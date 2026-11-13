import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { raceData as localRaceData } from '../data/raceData';

export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = '2024-01-01';

export const isSanityConfigured = Boolean(projectId && projectId !== 'your-project-id');

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // build-time static queries
    })
  : null;

const builder = isSanityConfigured && sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}

let cachedPromise: Promise<any> | null = null;
let lastFetchTime = 0;
const DEV_CACHE_TTL_MS = 2000; // 2s cache in dev mode so simultaneous component queries share results, while page refresh gets fresh data

/**
 * Fetch race data from Sanity if configured; otherwise gracefully return local static data.
 * Results are cached in-memory during build execution.
 */
export async function getRaceData() {
  if (!isSanityConfigured || !sanityClient) {
    return localRaceData;
  }

  const now = Date.now();
  if (cachedPromise) {
    if (import.meta.env.PROD) {
      return cachedPromise;
    }
    if (now - lastFetchTime < DEV_CACHE_TTL_MS) {
      return cachedPromise;
    }
  }

  lastFetchTime = now;
  cachedPromise = (async () => {
    try {
      const [raceInfo, neighborhoods, pillars, cheerZones, faqs, testimonials, gallery] = await Promise.all([
        sanityClient.fetch(`*[_type == "raceInfo"][0]`),
        sanityClient.fetch(`*[_type == "neighborhood"] | order(order asc)`),
        sanityClient.fetch(`*[_type == "pillar"] | order(number asc)`),
        sanityClient.fetch(`*[_type == "cheerZone"] | order(order asc)`),
        sanityClient.fetch(`*[_type == "faq"] | order(order asc, _createdAt asc)`),
        sanityClient.fetch(`*[_type == "testimonial"]`),
        sanityClient.fetch(`*[_type == "galleryPhoto"] | order(order asc)`),
      ]);

      return {
        ...localRaceData,
        general: raceInfo
          ? {
              ...localRaceData.general,
              name: raceInfo.name || localRaceData.general.name,
              tagline: raceInfo.tagline || localRaceData.general.tagline,
              raceDate: raceInfo.raceDate || localRaceData.general.raceDate,
              raceDisplayDate: raceInfo.raceDisplayDate || localRaceData.general.raceDisplayDate,
              location: raceInfo.location || localRaceData.general.location,
              registrationOpenDate: raceInfo.registrationOpenDate || localRaceData.general.registrationOpenDate,
              registrationUrl:
                raceInfo.registrationUrl && raceInfo.registrationUrl !== 'https://runsignup.com'
                  ? raceInfo.registrationUrl
                  : localRaceData.general.registrationUrl,
              fieldCaps: {
                ...localRaceData.general.fieldCaps,
                marathon: raceInfo.fullCap || localRaceData.general.fieldCaps?.marathon,
                halfMarathon: raceInfo.halfCap || localRaceData.general.fieldCaps?.halfMarathon,
              },
              contactEmail: raceInfo.contactEmail || localRaceData.general.contactEmail,
              volunteerEmail: raceInfo.volunteerEmail || localRaceData.general.volunteerEmail,
            }
          : localRaceData.general,

        course: {
          ...localRaceData.course,
          stravaRouteUrl: raceInfo?.stravaRouteUrl || localRaceData.course.stravaRouteUrl,
          googleMapsEmbedUrl: raceInfo?.googleMapsEmbedUrl || localRaceData.course.googleMapsEmbedUrl,
          neighborhoods: neighborhoods && neighborhoods.length > 0 ? neighborhoods : localRaceData.course.neighborhoods,
          cheerZones:
            cheerZones && cheerZones.length > 0
              ? cheerZones.map((z: any, idx: number) => ({
                  number: z.number ?? z.order ?? idx + 1,
                  neighborhood: z.neighborhood || z.name || 'Boston',
                  location: z.location || '',
                  mile: z.mile || '',
                  vibe: z.vibe || '',
                  amenities: Array.isArray(z.amenities) && z.amenities.length > 0 ? z.amenities : ['Hydration', 'Community Support'],
                }))
              : localRaceData.course.cheerZones,
        },

        pillars:
          pillars && pillars.length > 0
            ? pillars.map((p: any) => {
                const targetUrl =
                  p.linkUrl === 'custom' && p.customLinkUrl
                    ? p.customLinkUrl
                    : p.linkUrl ||
                      (p.number === 2 || p.number === 3 || /untimed|cheer/i.test(p.title)
                        ? '/course'
                        : '/history');

                let targetLabel = p.linkLabel?.trim();
                if (!targetLabel) {
                  if (targetUrl === '/course' || targetUrl.startsWith('/course')) {
                    targetLabel = /cheer/i.test(p.title) ? 'Explore cheer zones' : 'Explore the course';
                  } else if (targetUrl === '/history' || targetUrl.startsWith('/history')) {
                    targetLabel = 'Read the history';
                  } else if (targetUrl === '/faq' || targetUrl.startsWith('/faq')) {
                    targetLabel = 'Read the FAQ';
                  } else if (targetUrl === '/gallery' || targetUrl.startsWith('/gallery')) {
                    targetLabel = 'View gallery';
                  } else {
                    targetLabel = 'Learn more';
                  }
                }

                return {
                  ...p,
                  linkUrl: targetUrl,
                  linkLabel: targetLabel,
                };
              })
            : localRaceData.pillars,
        faqs:
          faqs && faqs.length > 0
            ? faqs.map((f: any) => {
                let cat = f.category || '';
                // Standardize category names
                if (cat === 'General' || cat === 'General & Registration') {
                  if (/volunteer/i.test(f.question)) {
                    cat = 'Cheer Zones & Volunteers';
                  } else if (/registration|bib|packet/i.test(f.question)) {
                    cat = 'Registration & Bibs';
                  } else {
                    cat = 'About 26.TRUE';
                  }
                } else if (cat === 'Course' || cat === 'Course & Route') {
                  cat = 'Course & Route';
                } else if (cat === 'Logistics' || cat === 'Logistics & Waves') {
                  cat = 'Course & Route';
                } else if (cat === 'Community' || /cheer/i.test(cat) || /volunteer/i.test(cat)) {
                  cat = 'Cheer Zones & Volunteers';
                }
                return {
                  ...f,
                  category: cat || 'About 26.TRUE',
                };
              })
            : localRaceData.faqs.map((f: any) => ({
                ...f,
                category: f.category === 'Cheer Squads & Volunteers' ? 'Cheer Zones & Volunteers' : f.category,
              })),
        testimonials: testimonials && testimonials.length > 0 ? testimonials : localRaceData.testimonials,
        gallery:
          gallery && gallery.length > 0
            ? gallery.map((item: any, idx: number) => ({
                id: item._id || `photo-${idx + 1}`,
                src: builder && item.image ? builder.image(item.image).width(1600).url() : '',
                alt: item.caption || '26.TRUE Photo',
                caption: item.caption || '',
                year: item.year || '2026',
                category: item.category || 'Runners',
                neighborhood: item.neighborhood || 'Boston',
                photographer: item.photographer || '',
                featuredOnHome: Boolean(item.featuredOnHome),
                featuredOnCourse1: Boolean(item.featuredOnCourse1),
                featuredOnCourse2: Boolean(item.featuredOnCourse2),
                order: typeof item.order === 'number' ? item.order : idx + 1,
              }))
            : localRaceData.gallery,
      };
    } catch (error) {
      console.warn('[Sanity] Failed to fetch CMS content, falling back to local raceData.ts:', error);
      return localRaceData;
    }
  })();

  return cachedPromise;
}

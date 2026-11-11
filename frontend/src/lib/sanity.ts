import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
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

const builder = isSanityConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}

/**
 * Fetch race data from Sanity if configured; otherwise gracefully return local static data.
 */
export async function getRaceData() {
  if (!isSanityConfigured || !sanityClient) {
    return localRaceData;
  }

  try {
    const [raceInfo, neighborhoods, pillars, cheerZones, faqs, testimonials, gallery] = await Promise.all([
      sanityClient.fetch(`*[_type == "raceInfo"][0]`),
      sanityClient.fetch(`*[_type == "neighborhood"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "pillar"] | order(number asc)`),
      sanityClient.fetch(`*[_type == "cheerZone"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "faq"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "testimonial"]`),
      sanityClient.fetch(`*[_type == "galleryPhoto"] | order(order asc)`),
    ]);

    return {
      general: raceInfo
        ? {
            ...localRaceData.general,
            name: raceInfo.name || localRaceData.general.name,
            tagline: raceInfo.tagline || localRaceData.general.tagline,
            raceDate: raceInfo.raceDate || localRaceData.general.raceDate,
            raceDisplayDate: raceInfo.raceDisplayDate || localRaceData.general.raceDisplayDate,
            location: raceInfo.location || localRaceData.general.location,
            registrationOpenDate: raceInfo.registrationOpenDate || localRaceData.general.registrationOpenDate,
            registrationUrl: raceInfo.registrationUrl || localRaceData.general.registrationUrl,
            fieldCap: {
              total: raceInfo.totalCap || localRaceData.general.fieldCap.total,
              full: raceInfo.fullCap || localRaceData.general.fieldCap.full,
              half: raceInfo.halfCap || localRaceData.general.fieldCap.half,
              firstTimeFullTarget: raceInfo.firstTimeFullTarget || localRaceData.general.fieldCap.firstTimeFullTarget,
              firstTimeHalfTarget: raceInfo.firstTimeHalfTarget || localRaceData.general.fieldCap.firstTimeHalfTarget,
            },
          }
        : localRaceData.general,

      course: {
        ...localRaceData.course,
        stravaRouteUrl: raceInfo?.stravaRouteUrl || localRaceData.course.stravaRouteUrl,
        googleMapsEmbedUrl: raceInfo?.googleMapsEmbedUrl || localRaceData.course.googleMapsEmbedUrl,
        neighborhoods: neighborhoods && neighborhoods.length > 0 ? neighborhoods : localRaceData.course.neighborhoods,
        cheerZones: cheerZones && cheerZones.length > 0 ? cheerZones : localRaceData.course.cheerZones,
      },

      pillars: pillars && pillars.length > 0 ? pillars : localRaceData.pillars,
      faqs: faqs && faqs.length > 0 ? faqs : localRaceData.faqs,
      testimonials: testimonials && testimonials.length > 0 ? testimonials : localRaceData.testimonials,
      gallery:
        gallery && gallery.length > 0
          ? gallery.map((item: any) => ({
              src: builder ? builder.image(item.image).width(1600).url() : '',
              alt: item.caption || '26.TRUE Photo',
              caption: item.caption || '',
              year: item.year || '2026',
              category: item.category || '26.TRUE',
              neighborhood: item.neighborhood || 'Boston',
              photographer: item.photographer || '',
            }))
          : localRaceData.gallery,
    };
  } catch (error) {
    console.warn('[Sanity] Failed to fetch CMS content, falling back to local raceData.ts:', error);
    return localRaceData;
  }
}

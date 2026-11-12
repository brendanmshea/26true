import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'raceInfo',
  title: 'Race Information & Details',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Race Name',
      type: 'string',
      initialValue: '26.TRUE Marathon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'edition',
      title: 'Edition / Year Label',
      type: 'string',
      initialValue: 'Year Seven • 2027',
      description: 'e.g. Year Seven • 2027',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: "Boston's Untimed Marathon & Half Marathon",
    }),
    defineField({
      name: 'raceDate',
      title: 'Race Start Date & Time (ISO)',
      type: 'datetime',
      description: 'Used for countdown calculations (e.g. 2027-04-17T07:00:00-04:00)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'raceDisplayDate',
      title: 'Race Display Date',
      type: 'string',
      initialValue: 'Saturday, April 17, 2027',
    }),
    defineField({
      name: 'location',
      title: 'Location Label',
      type: 'string',
      initialValue: 'Boston, MA',
    }),
    defineField({
      name: 'registrationOpenDate',
      title: 'Registration Opening Date & Time (ISO)',
      type: 'datetime',
      description: 'Used for Stage 1 countdown (e.g. 2026-11-20T08:00:00-05:00)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Registration Platform URL',
      type: 'url',
      description: 'Movemint registration link (e.g. https://www.movemint.cc/events/Uwj1WJY)',
      initialValue: 'https://www.movemint.cc/events/Uwj1WJY',
    }),
    defineField({
      name: 'totalCap',
      title: 'Total Field Cap',
      type: 'number',
      initialValue: 500,
    }),
    defineField({
      name: 'fullCap',
      title: 'Full Marathon Cap',
      type: 'number',
      initialValue: 200,
    }),
    defineField({
      name: 'halfCap',
      title: 'Half Marathon Cap',
      type: 'number',
      initialValue: 300,
    }),
    defineField({
      name: 'stravaRouteUrl',
      title: 'Strava Route URL',
      type: 'url',
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google My Maps Embed URL (Iframe)',
      type: 'url',
    }),
    defineField({
      name: 'coaches',
      title: 'Certified Community Coaches',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['Trish Moran', 'Lindsey Thorne-Bingham'],
    }),
  ],
});

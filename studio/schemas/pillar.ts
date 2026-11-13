import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pillar',
  title: 'Why 26.TRUE / Pillar',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Pillar Number',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'title',
      title: 'Pillar Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link Destination Page',
      type: 'string',
      description: 'Select the page this pillar links to, or choose "Custom URL / Path" to type any URL or path.',
      initialValue: '/history',
      options: {
        list: [
          { title: 'Course & Route (/course)', value: '/course' },
          { title: 'Race Info & Inclusions (/race)', value: '/race' },
          { title: 'Origin & History (/history)', value: '/history' },
          { title: 'FAQ & Runner Guide (/faq)', value: '/faq' },
          { title: 'Photo Gallery (/gallery)', value: '/gallery' },
          { title: 'Custom URL / Path', value: 'custom' },
        ],
      },
    }),
    defineField({
      name: 'customLinkUrl',
      title: 'Custom Link URL / Path',
      type: 'string',
      description: 'Used when Link Destination Page is set to "Custom URL / Path" (e.g. /course#map or https://...)',
      hidden: ({ parent }) => parent?.linkUrl !== 'custom',
    }),
    defineField({
      name: 'linkLabel',
      title: 'Link Button Text',
      type: 'string',
      description: 'Custom text for the card link (e.g. "Explore the course", "Read the history"). If left blank, automatically matches the destination page.',
    }),
  ],
  orderings: [
    {
      title: 'Number',
      name: 'numberAsc',
      by: [{ field: 'number', direction: 'asc' }],
    },
  ],
});

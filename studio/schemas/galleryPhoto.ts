import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'galleryPhoto',
  title: 'Gallery Photograph',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photograph',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption / Story',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      options: {
        list: [
          { title: '26.TRUE', value: '26.TRUE' },
          { title: 'PIONEERS', value: 'PIONEERS' },
          { title: 'Cheer Squad', value: 'Cheer Squad' },
          { title: 'Finish Line', value: 'Finish Line' },
        ],
      },
      initialValue: '26.TRUE',
    }),
    defineField({
      name: 'neighborhood',
      title: 'Neighborhood Location',
      type: 'string',
      description: 'e.g. Dorchester, Roxbury, Jamaica Plain, Mattapan',
    }),
    defineField({
      name: 'year',
      title: 'Year Captured',
      type: 'string',
      initialValue: '2026',
    }),
    defineField({
      name: 'photographer',
      title: 'Photographer Credit',
      type: 'string',
      description: 'e.g. Charlotte Tuminelli, ShotByEK',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 10,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});

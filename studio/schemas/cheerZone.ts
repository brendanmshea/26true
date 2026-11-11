import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'cheerZone',
  title: 'Cheer Zone',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Cheer Zone Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mile',
      title: 'Course Mile Marker',
      type: 'string',
      description: 'e.g. Mile 3.5',
    }),
    defineField({
      name: 'location',
      title: 'Intersection / Landmark',
      type: 'string',
    }),
    defineField({
      name: 'vibe',
      title: 'Vibe & Energy',
      type: 'string',
      description: 'e.g. Live DJ, Brass Band, Block Party',
    }),
    defineField({
      name: 'order',
      title: 'Order Along Course',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Course Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});

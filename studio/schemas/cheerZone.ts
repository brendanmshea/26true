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
      name: 'neighborhood',
      title: 'Neighborhood Corridor',
      type: 'string',
      description: 'e.g. Roxbury, Dorchester, Mattapan, Jamaica Plain',
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
      name: 'amenities',
      title: 'Zone Amenities & Supplies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Hydration, Electrolytes, Fruit, Noise Makers',
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

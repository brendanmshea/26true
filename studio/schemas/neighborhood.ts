import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'neighborhood',
  title: 'Neighborhood Corridor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Neighborhood Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'highlight',
      title: 'Course Highlight',
      type: 'string',
      description: 'e.g. Miles 1–6 & Franklin Park',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});

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
  ],
  orderings: [
    {
      title: 'Number',
      name: 'numberAsc',
      by: [{ field: 'number', direction: 'asc' }],
    },
  ],
});

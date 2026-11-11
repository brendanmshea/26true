import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'Frequently Asked Question',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General & Registration', value: 'General' },
          { title: 'Course & Route', value: 'Course' },
          { title: 'Logistics & Waves', value: 'Logistics' },
          { title: 'Cheer Squads & Volunteering', value: 'Community' },
        ],
      },
      initialValue: 'General',
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
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});

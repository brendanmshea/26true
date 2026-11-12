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
      description: 'Supports Markdown formatting (e.g. * bullet lists, **bold**, [links](https://...))',
      rows: 6,
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
      name: 'showOnHome',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Toggle ON to display this question in the FAQ preview accordion on the homepage.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Numerical sort rank (e.g. 1 = first, 2 = second, 3 = third). Lower numbers display first.',
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: 'Display Order (1 → 10)',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: '_updatedAt', direction: 'desc' },
      ],
    },
    {
      title: 'Homepage Featured First',
      name: 'homepageFirst',
      by: [
        { field: 'showOnHome', direction: 'desc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Question (A → Z)',
      name: 'questionAsc',
      by: [{ field: 'question', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
      order: 'order',
      showOnHome: 'showOnHome',
    },
    prepare({ title, subtitle, order, showOnHome }) {
      const homeBadge = showOnHome ? '🏠 Homepage' : '';
      const orderPrefix = order !== undefined && order !== null ? `#${order} ` : '';
      return {
        title: `${orderPrefix}${title || 'Untitled Question'}`,
        subtitle: [subtitle, homeBadge].filter(Boolean).join(' • '),
      };
    },
  },
});

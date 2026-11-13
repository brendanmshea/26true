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
          { title: 'Start', value: 'Start' },
          { title: 'Finish Line', value: 'Finish Line' },
          { title: 'Block Party', value: 'Block Party' },
          { title: 'Cheer Zone', value: 'Cheer Zone' },
          { title: 'Runners', value: 'Runners' },
        ],
      },
      initialValue: 'Runners',
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
      name: 'featuredOnHome',
      title: 'Feature in Homepage Photostrip',
      type: 'boolean',
      description: 'Toggle on to feature this photograph in the 6-photo homepage showcase grid.',
      initialValue: false,
    }),
    defineField({
      name: 'featuredOnCourse1',
      title: 'Feature in Course Photostrip 1 (Overview / Neighborhoods)',
      type: 'boolean',
      description: 'Toggle on to feature in the 3-photo photostrip between Course Overview and Neighborhood Cards on the Course page.',
      initialValue: false,
    }),
    defineField({
      name: 'featuredOnCourse2',
      title: 'Feature in Course Photostrip 2 (Course Map / Cheer Zones)',
      type: 'boolean',
      description: 'Toggle on to feature in the 3-photo photostrip between Course Map and Cheer Zones on the Course page.',
      initialValue: false,
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
      description: 'Controls order in gallery and priority/slot in the homepage photostrip (1 = featured large card).',
      initialValue: 10,
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
      featured: 'featuredOnHome',
      course1: 'featuredOnCourse1',
      course2: 'featuredOnCourse2',
      order: 'order',
      photographer: 'photographer',
    },
    prepare({ title, media, featured, course1, course2, order, photographer }) {
      const parts = [];
      if (featured) parts.push('⭐ Home');
      if (course1) parts.push('📍 Course 1');
      if (course2) parts.push('📣 Course 2');
      if (order !== undefined) parts.push(`Order: ${order}`);
      if (photographer) parts.push(`By ${photographer}`);
      return {
        title: title || 'Untitled Photograph',
        subtitle: parts.length > 0 ? parts.join(' • ') : undefined,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});

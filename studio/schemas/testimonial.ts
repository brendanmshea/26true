import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Runner & Volunteer Quote',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Bio',
      type: 'string',
      description: 'e.g. Marathon Finisher, First-Timer, Cheer Captain',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      initialValue: '2026',
    }),
  ],
});

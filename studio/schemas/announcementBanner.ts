import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'announcementBanner',
  title: 'Top Announcement Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enable Banner',
      type: 'boolean',
      initialValue: false,
      description: 'Turn on or off across the entire site',
    }),
    defineField({
      name: 'tag',
      title: 'Badge / Tag Text',
      type: 'string',
      initialValue: '2027 Registration',
    }),
    defineField({
      name: 'message',
      title: 'Announcement Message',
      type: 'string',
      initialValue: 'Registration opens Friday, November 20, 2026 at 8:00 AM EST!',
    }),
    defineField({
      name: 'linkText',
      title: 'Action Link Text',
      type: 'string',
      initialValue: 'Get Ready',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Action Link URL',
      type: 'string',
      initialValue: '#event-info',
    }),
  ],
});

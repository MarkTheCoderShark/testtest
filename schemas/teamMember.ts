export const teamMember = {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position/Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
}

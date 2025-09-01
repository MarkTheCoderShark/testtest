export const testimonial = {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
      description: 'Rating from 1-5 stars',
    },
    {
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Which service did they use?',
    },
    {
      name: 'image',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Should this appear on the homepage?',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which testimonials appear',
    },
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
      media: 'image',
    },
  },
}

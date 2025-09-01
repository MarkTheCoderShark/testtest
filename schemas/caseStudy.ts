export const caseStudy = {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Case Study Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'challenge',
      title: 'Client Challenge',
      type: 'text',
      rows: 4,
      description: 'What problem was the client facing?',
    },
    {
      name: 'solution',
      title: 'Our Solution',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'How did we solve their problem?',
    },
    {
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    },
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', title: 'Metric', type: 'string' },
            { name: 'before', title: 'Before', type: 'string' },
            { name: 'after', title: 'After', type: 'string' },
            { name: 'improvement', title: 'Improvement', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', title: 'Quote', type: 'text', rows: 4 },
        { name: 'author', title: 'Author Name', type: 'string' },
        { name: 'position', title: 'Position', type: 'string' },
        { name: 'company', title: 'Company', type: 'string' },
      ],
    },
    {
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
      description: 'How long did the project take?',
    },
    {
      name: 'budget',
      title: 'Project Budget',
      type: 'string',
      description: 'What was the investment range?',
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      description: 'Should this appear on the homepage?',
      initialValue: false,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When was this case study published?',
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      industry: 'industry',
      media: 'images.0',
    },
    prepare(selection: any) {
      const { title, client, industry, media } = selection
      return {
        title: title,
        subtitle: `${client} - ${industry}`,
        media: media,
      }
    },
  },
}

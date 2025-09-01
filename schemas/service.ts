export const service = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Name of the Lucide icon (e.g., "Zap", "Globe", "Code")',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features included in this service',
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of benefits this service provides',
    },
    {
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Step Number', type: 'string' },
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Step Description', type: 'text' },
            { name: 'duration', title: 'Duration', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'pricing',
      title: 'Pricing Information',
      type: 'object',
      fields: [
        { name: 'startingPrice', title: 'Starting Price', type: 'string' },
        { name: 'pricingModel', title: 'Pricing Model', type: 'string' },
        { name: 'features', title: 'Pricing Features', type: 'array', of: [{ type: 'string' }] },
      ],
    },
    {
      name: 'results',
      title: 'Expected Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'metric', title: 'Metric', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which services appear on the services page',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Whether this service is currently offered',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'image',
    },
  },
}

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Web Vello CMS',
  projectId: 'your-project-id',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { apiVersion, dataset, projectId } from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  name: 'attend_studio',
  title: 'ATTEND CMS Studio',
  projectId: projectId || 'placeholder_project_id',
  dataset: dataset || 'production',
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
})

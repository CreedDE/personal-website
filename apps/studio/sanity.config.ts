import { defineConfig, isDev } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial';

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
export const dataset = process.env.SANITY_STUDIO_DATASET!;

const devOnlyPlugins = [getStartedPlugin()];

export default defineConfig({
  name: 'default',
  title: 'personal-website',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes
  }
});

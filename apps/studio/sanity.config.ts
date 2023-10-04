import { defineConfig, isDev } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial';
import { pageStructure, singletonPlugin } from './plugins/singleton';
import home from './schemas/singleton/home';
import settings from './schemas/singleton/settings';
import imprint from './schemas/singleton/imprint';
import about from './schemas/singleton/about';

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
export const dataset = process.env.SANITY_STUDIO_DATASET!;

const devOnlyPlugins = [getStartedPlugin()];

export default defineConfig({
  name: 'default',
  title: 'personal-website',

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: pageStructure([home, settings, imprint, about])
    }),
    singletonPlugin([home.name, settings.name, imprint.name, about.name]),
    visionTool(),
    ...(isDev ? devOnlyPlugins : [])
  ],

  schema: {
    types: schemaTypes
  }
});

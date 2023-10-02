import page from './documents/page';
import project from './documents/project';
import duration from './objects/duration';
import milestone from './objects/milestone';
import timeline from './objects/timeline';
import pet from './pet';
import home from './singleton/home';
import imprint from './singleton/imprint';
import settings from './singleton/settings';

export const schemaTypes = [
  home,
  settings,
  imprint,
  duration,
  page,
  project,
  milestone,
  timeline,
  pet
];

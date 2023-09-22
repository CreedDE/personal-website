import page from './documents/page';
import project from './documents/project';
import duration from './objects/duration';
import milestone from './objects/milestone';
import timeline from './objects/timeline';
import pet from './pet';
import home from './singleton/home';
import settings from './singleton/settings';

export const schemaTypes = [home, settings, duration, page, project, milestone, timeline, pet];

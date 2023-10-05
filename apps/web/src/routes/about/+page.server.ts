import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAbout } from '$lib/utils/sanity';

export const load: PageServerLoad = async () => {
  const about = await getAbout();

  if (about) {
    return { about };
  }
  throw error(404, 'Not found');
};

import { getHomepage } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const home = await getHomepage();

  if (home) {
    return { home };
  }
  throw error(404, 'Not found');
};

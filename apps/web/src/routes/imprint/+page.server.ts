import { getImprint } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const imprint = await getImprint();

  if (imprint) {
    return { imprint };
  }

  throw error(404, 'Not found');
};

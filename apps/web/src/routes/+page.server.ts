import { getPets } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const pets = await getPets();

  if (pets) {
    return { pets };
  }
  throw error(404, 'Not found');
};

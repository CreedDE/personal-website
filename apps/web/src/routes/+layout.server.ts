import { getNavigation } from '$lib/utils/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const navigation = await getNavigation();

  return { navigation };
};

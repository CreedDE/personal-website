import { getNavigation } from '$lib/utils/sanity';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
  const navigation = await getNavigation();

  const theme = cookies.get('colortheme');

  return { navigation, theme };
};

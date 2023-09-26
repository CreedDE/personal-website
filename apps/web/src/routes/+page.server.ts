import { getHomepage } from '$lib/utils/sanity';
import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const home = await getHomepage();

  if (home) {
    return { home };
  }

  throw error(404, 'Not found');
};

export const actions: Actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get('theme');

    if (theme) {
      cookies.set('colortheme', theme, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      });
    }
  }
};

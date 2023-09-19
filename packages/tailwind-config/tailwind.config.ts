import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;

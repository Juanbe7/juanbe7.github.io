import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://juanbe7.github.io',
  i18n: { defaultLocale: 'es', locales: ['es', 'en'], routing: { prefixDefaultLocale: false } },
});

# juanbe7.github.io

Portfolio de Juan Bustos, desarrollador fullstack. Publicado en https://juanbe7.github.io

Hecho con [Astro](https://astro.build), en español e inglés. Se publica solo con GitHub Actions en cada push a `main`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

- `src/pages/` páginas en español; `src/pages/en/` se genera con `python3 scripts/make_en.py`.
- `cv/cv-es.html` es la fuente del CV; el PDF publicado está en `public/cv/`.

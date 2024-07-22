Prueba de Metronic9 con Next.js


## Getting Started

```bash
bunx create-next-app@latest
cd my-app
code .
```

Para Vincular a Github crear un repo, copiar la URL y ejecutar:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/tomichGIT/metro9-test1.git
git push -u origin main
```

Para exportar un static site a Github Pages:

Según GPT tenes que modificar el archivo `next.config.mjs` para asignar las rutas de basePath y assetPrefix.

```js
// next.config.mjs
module.exports = {
  basePath: '/metro9-test1',
  assetPrefix: '/metro9-test1/',
}
```
o  chequear por productiom
```js
// next.config.js
const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? '/metro9-test1' : '',
    assetPrefix: isProd ? '/metro9-test1/' : ''
};

export default nextConfig;
``` 

1. Ir al repo a Pages.
2. Seleccionar Source: Github Actions: Next.js Template
3. Se crea el workflow automaticamente. ".github/workflows/nextjs.yml"
4. Con cada deploy en "main" se hace el build automáticamente en el servidor de github, y se publica en la rama "gh-pages".
5. Nota: nextjs ejecuta el comando "next export" para generar el sitio estático, y lo suele guardar en una carpeta "out"
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




# Integración con Metronic:

[Changelog Metro 9](https://keenthemes.com/metronic/tailwind/docs/changelog)

[Integration Docs](https://keenthemes.com/metronic/tailwind/docs/getting-started/integration/nextjs)
[Instructivo pero de Github Directo](https://github.com/keenthemes/metronic-tailwind-html-integration/tree/main/metronic-tailwind-next)

```js
// nuevo NextJs App
bunx create-next-app@latest
// instalación de dependencias
bun i @popperjs/core
// instalar dependencias de Developer
bun i tailwindcss postcss autoprefixer mini-svg-data-uri postcss-import postcss-loader postcss-nesting postcss-preset-env -D

```


1. Descargar `metronic9-html-tailwind`
2. Copiar el contenido de `metronic9-html-tailwind/src` en la carpeta `src/app/metronic` del proyecto NextJs
3. Delete `index.ts` from `metronic/core/index.ts`
4. Rename `index.spa.ts` file to `index.ts`

5. en  `src/metronic/app/layouts/demo1.js` 
    
```js   
// reemplazar el siguiente código:
KTDom.ready(() => {
    KTLayout.init();
});

// con el siguiente código:
export default KTLayout;

// * ya existia el "export default KTLayout;" entonces solo comenté el KTDom.ready
```

De todas maneras acá tuve un error de que KTLayout es una clase, y debía instanciarla con "new" en fin, converti la class KTLayout en un objeto, este es el nuevo código de "metronic/app/layouts/demo1.js"

```js
const KTLayout = {
	_isSidebarCollapse() {
		return document.body.classList.contains('sidebar-collapse');
	},
	_handleMegaMenu() {
		const megamenuEl = document.querySelector('#megamenu');
		if (!megamenuEl) return;

		const menu = KTMenu.getInstance(megamenuEl);
		menu.disable();

		setTimeout(() => {
			menu.enable();
		}, 500);
	},
	_handleSidebar() {
		const sidebarToggle = KTToggle.getInstance(this.sidebarToggleEl);
		sidebarToggle?.on('toggle', () => {
			this.sidebarEl.classList.add('animating');

			this._handleMegaMenu();

			KTDom.transitionEnd(this.sidebarEl, () => {
				this.sidebarEl.classList.remove('animating');
			});
		});
	},
	_handleSidebarMenu() {
		const menuEl = document.querySelector('#sidebar_menu');
		const scrollableEl = document.querySelector('#sidebar_scrollable');
		const menuActiveItemEl = menuEl.querySelector(".menu-item.active");

		if (!menuActiveItemEl || KTDom.isVisibleInParent(menuActiveItemEl, scrollableEl)) {
			return;
		}

		scrollableEl.scroll({
			top: KTDom.getRelativeTopPosition(menuActiveItemEl, scrollableEl) - 100,
			behavior: 'instant'
		});
	},
	init() {
		this.sidebarEl = document.querySelector('#sidebar');
		this.sidebarWrapperEl = document.querySelector('#sidebar_wrapper');
		this.headerEl = document.querySelector('#header');
		this.sidebarToggleEl = document.querySelector('#sidebar_toggle');

		if (this.sidebarEl && this.sidebarToggleEl) {
			this._handleSidebar();
			this._handleSidebarMenu();
		}
	},
	isSidebarCollapse() {
		return this._isSidebarCollapse();
	}
}

export default KTLayout;
```


6. Abrir el `src/app/globalcs.css` de nextjs y reemplazar su contenido con el siguiente css:

```css
@import "../metronic/vendors/keenicons/duotone/style.css";
@import "../metronic/vendors/keenicons/filled/style.css";
@import "../metronic/vendors/keenicons/solid/style.css";
@import "../metronic/vendors/keenicons/outline/style.css";

@import "../metronic/css/styles.css";

#__next {
display: contents;
}
```

Copiarme las carpetas de media y fonts a "public" de nextjs
Copy the media folder from the metronic-tailwind-html package's dist/assets/media directory into your NextJs project's public directory.

"C:\xampp\htdocs\metronic9\metronic-tailwind-html\dist\assets\vendors\keenicons\fonts"


Corregir las fuentes. En cada archivo styles.css de "src/metronic/vendors/keenicons" (son 4 carpetas [duotone, filled, solid, outline]) cambiar la ruta de las fuentes de "fonts/..." a "/fonts/..." (cambiar 4 archivos)



Agregarle al body la clase "demo1"

"<body className={`flex h-full demo1 sidebar-fixed header-fixed bg-[#fefefe] dark:bg-coal-500 ${inter.className}`}>{children}</body>"
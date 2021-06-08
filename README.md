# Jina.ai website

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
npm run dev
```

Open http://localhost:8080 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

### Customization

You can easily configure the theme. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/main.css`: your CSS file using Tailwind CSS
- `utils/Config.ts`: website configuration file
- `src/pages/index.tsx`: the index page of the theme use the `Base` component
- `src/template/Base.tsx`: the `Base` component using component blocks
- `src/template/*`: the list of component blocks
- `src/*`: other folders in src are the atomic components used by components blocks

Here is the layer:

- the entry point: `index.tsx` in `src/pages`
- the `Base` template: `Base.tsx` in `src/template`
- use component blocks from `src/template/*`
- use atomic components from `src/*`

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).


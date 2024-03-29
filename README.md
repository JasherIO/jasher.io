# JasherIO

This [site](https://jasher.io) is built with [Gatsby v2](https://www.gatsbyjs.org/), [Emotion](https://emotion.sh), and [TailwindCSS](https://tailwindcss.com).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e3396904-c331-43a1-a8ac-93e5c8469636/deploy-status)](https://app.netlify.com/sites/jasherio/deploys)

## Prerequisites

- Node (v8.2.0+ Recommeded)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

### Access Locally

```bash
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```

To test the CMS locally, you'll need run a production build of the site:

```bash
$ npm run build
$ npm run serve
```

## Debugging

Windows users might encounter ```node-gyp``` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.
```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

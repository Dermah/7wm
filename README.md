# 7WM Code Challenge

## Prerequesites

You'll need

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Install

Clone the repo:

```sh
git clone https://github.com/Dermah/7wm.git
cd 7wm
```

Then install dependencies:

```sh
yarn
```

## Develop

Run and serve the site locally with live-reloading:

```sh
yarn start
```

Run tests in watch mode:

```sh
yarn test
```

Tests are run using [Jest](https://jestjs.io/). Most of the tests involve taking snapshots of the react components. If a snapshot changes, you will be prompted to update them.

## Build

Build a static version of the site:

```sh
yarn build
```

The files will appear in the `build/` directory.

## Deploy

Build and deploy the site to GitHub Pages:

```sh
yarn deploy
```

The site will appear [here](https://dermah.github.io/7wm/).

## Notes

Media query breakpoints throughout the site:

- Desktop: 992px
- Tablet: 768px
- Phone: 576px

These can be edited in the [breakpoint file](./src/utils/styledBreakpoints.js).

## Comprimises

Given more time, I would improve the following

- Add a prop to `MediaTile` that allows you to provide different channel logos
- Improve the `Shelf` component to look more like a typical streaming service shelf with indicators that content continues off the page to the right
- Tweak the `MediaTile` phone breakpoint to be more readable on phones
- Improve tests using Enzyme rendering to test props more dynamically than snapshots

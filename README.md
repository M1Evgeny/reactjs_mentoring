# reactjs_mentoring

## Installation
1. Install npm and nodejs: https://nodejs.org/en/
2. Run ``` npm install ```
3. Run ``` npm run dev```
4. Open http://localhost:3000

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run build:server`

Builds server side part for production to the `dist/server` folder.

### `npm run test`

Runs tests.

### `npm run test:cover`

Runs tests, shows the percentage of coverage, and creates a "coverage" folder with detailed coverage information.

### `npm run cypress`

Run cypress for make E2E tests.

## SSR

Before starting the server, you need to run `npm run build` and `npm run build:server`. Then run `npm run server`.
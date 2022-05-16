# woofles

A fun way to browse different types of dogs, sourced from the [The Dog API](https://thedogapi.com/).
Features:
- Displays a random dog on the landing page, which links to dog's profile
- User can view dog profiles and info about each type
- User can scroll through a list of dog types (asynchronously and incrementally loaded); user can subsequently select up to 4 dogs to compare
- Responsive design for desktop and mobile

Live demo: [https://woofles.herokuapp.com/](https://woofles.herokuapp.com/)

_(**Note**: Heroku takes some time to load.)_

## Running the app
#### Install dependencies:
```
npm install
```

#### Build and run locally:
```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view app in development mode.

#### Serve production build:
```
npm run build
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the served production build.

## Deployment

The production build of the app is currently deployed on Heroku [here](https://woofles.herokuapp.com/). To serve a static production build, rather than run the create-react-app development server (a memory-intensive process), some additional steps were taken. See [Deployment for create-react-app](https://cra.link/deployment) and [Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration#create-and-deploy-a-react-app-in-two-minutes) for more details.

#### Install [serve](https://github.com/vercel/serve):
```
npm install -g serve
npm install serve
```
After `npm run build` generates the production build, running `serve -s build` will serve the build via a static server.

#### Update package.json:
```
  "scripts": {
    "start": "serve -s build",
    "dev": "react-scripts start",
    "build": "react-scripts build",
    ...
  },
```

## About
### APIs used
Data is provided by the [The Dog API](https://thedogapi.com/).

#### Random dog images
```
GET https://api.thedogapi.com/v1/images/search?size=large&mime_types=jpg&format=json&has_breeds=true&order=RANDOM
```

#### Dog breeds
```
GET https://api.thedogapi.com/v1/breeds
```

#### Dog breed info by id
```
GET https://api.thedogapi.com/v1/breeds/{id}
```

### @adobe/react-spectrum
This project uses a number of utilities from Adobe's [React Spectrum libraries](https://react-spectrum.adobe.com/). Notably:
- @react-stately - useAsyncList() for fetching and infinite-loading the list of dog breeds
- @react-spectrum - Button, Item, ListBox, Provider, dark theme
- @spectrum-css - for various additional styling (mostly typography)

Using Spectrum helped give the app a cohesive and consistent look and feel.

In the future, @react-aria could also be utilized to improve accessibility.

### Testing
Tests are not currently available for this project.

Future end-to-end tests that test the core functionality could include:
1) Loading the landing page, seeing a random dog image; clicking on the dog image, which should then load the dog profile page; verify displayed content
2) Loading the catalog page, selecting 1-4 dog types and clicking submit; seeing all of the selected dog types' profiles on one page; verify displayed content

### Technologies used
- React, TypeScript
- [@adobe/react-spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html), [@adobe/react-stately](https://react-spectrum.adobe.com/react-spectrum/index.html), [@spectrum-css](https://opensource.adobe.com/spectrum-css/index.html)
- [react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [usehooks-ts](https://usehooks-ts.com/)
- [classnames](https://github.com/JedWatson/classnames)

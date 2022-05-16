# woofles

A fun way to browse different types of dogs, sourced from the [The Dog API](https://thedogapi.com/).
Features:
- Shows a random dog image and breed on the landing page
- Asynchronously and incrementally loads a list of dog types; user can subsequently select up to 4 types to compare
- User can view dog profiles and info about each type
- Responsive design

Live demo: [https://woofles.herokuapp.com/](https://woofles.herokuapp.com/)

_(**Note**: Heroku takes some time to load.)_

## Running the app
#### Install dependencies:
```
npm install
```

#### Build and run locally:
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view app in development mode.

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
1) Loading the landing page, seeing a random dog image; clicking on the dog image, which should then load the dog profile page
2) Loading the catalog page, selecting 1-4 dog types and clicking submit; seeing all of the selected dog types' profiles on one page

### Technologies used
- React, TypeScript
- [@adobe/react-spectrum](https://react-spectrum.adobe.com/react-spectrum/index.html), [@adobe/react-stately](https://react-spectrum.adobe.com/react-spectrum/index.html), [@spectrum-css](https://opensource.adobe.com/spectrum-css/index.html)
- [classnames](https://github.com/JedWatson/classnames)
- [react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [usehooks-ts](https://usehooks-ts.com/)

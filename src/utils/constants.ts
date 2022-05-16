import { NavigationLink } from '../types';

/**
 * strings / labels
 */
export const LANDING_PAGE_TITLE: string = `Your new best friend.`;
export const DOG_HOVER_TEXT: string = `Woof! Click on me to learn more!`;
export const CATALOG_TITLE: string = `Choose 1-4 dog breeds to learn more.`;
export const COMPARE: string = `Compare`;

export const BREED_INFO: { [key: string]: string } = {
  ORIGIN: 'Origin',
  BRED_FOR: 'Bred for',
  BREED_GROUP: 'Breed Group',
  TEMPERAMENT: 'Temperament',
  LIFE_SPAN: 'Life Span',
  HEIGHT: 'Height',
  WEIGHT: 'Weight',
};

export const NAVIGATION: { [key: string]: NavigationLink } = {
  HOME: { to: '/', label: 'home' },
  CATALOG: { to: '/catalog', label: 'browse' },
  COMPARE: { to: '/compare' },
  BREED: { to: '/breed' },
};

export const GENERIC_ERROR: string = `An error has occurred. Unable to load this section.`;

export const getTemperamentTmplStrs = () => {
  return [
    (temperament: string) => `Looking for a friend who's ${temperament}?`,
    (temperament: string) => `How about a doggo who's ${temperament}?`,
    (temperament: string) => `They're ${temperament}.`,
  ];
};

/**
 * other constants
 */
export const FETCH_RANDOM_IMAGES_URL: string = `https://api.thedogapi.com/v1/images/search?size=large&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`;

export const getFetchBreedsUrl = (page: number): string =>
  `https://api.thedogapi.com/v1/breeds?limit=10&page=${page}`;

export const getFetchBreedsByIdUrl = (id: string): string =>
  `https://api.thedogapi.com/v1/breeds/${id}`;

export const getDogImgUrl = (url: string): string =>
  `https://cdn2.thedogapi.com/images/${url}.jpg`;

export const NAVIGATION_LINKS: NavigationLink[] = [
  NAVIGATION.HOME,
  NAVIGATION.CATALOG,
];

export const COMPARE_LIMIT: number = 4;

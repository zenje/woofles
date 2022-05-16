import { NavigationLink } from '../types';

export const FETCH_RANDOM_IMAGES_URL: string = `https://api.thedogapi.com/v1/images/search?size=large&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`;

export const getFetchBreedsUrl = (page: number): string =>
  `https://api.thedogapi.com/v1/breeds?limit=10&page=${page}`;

export const getFetchBreedsByIdUrl = (id: string): string =>
  `https://api.thedogapi.com/v1/breeds/${id}`;

export const NAVIGATION_LINKS: NavigationLink[] = [
  { to: '/', label: 'home' },
  { to: '/catalog', label: 'browse' },
];

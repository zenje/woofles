export const FETCH_RANDOM_IMAGES_URL = `https://api.thedogapi.com/v1/images/search?size=large&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`;

export const getFetchBreedsUrl = (page: number) =>
  `https://api.thedogapi.com/v1/breeds?limit=10&page=${page}`;

export const getFetchBreedsByIdUrl = (id: string) =>
  `https://api.thedogapi.com/v1/breeds/${id}`;

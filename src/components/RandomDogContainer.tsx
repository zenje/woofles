import { useFetch } from 'usehooks-ts';
import { DogImage } from '../types';
import { FETCH_RANDOM_IMAGES_URL } from '../utils/constants';
import { LANDING_PAGE_TITLE } from '../utils/strings';
import RandomDog from './RandomDog';

const findLandingImage = (images: DogImage[] | undefined): DogImage | null => {
  if (images) {
    console.log(images);
    return (
      images.find((image) => {
        return (
          image.width > 600 &&
          image.height > 600 &&
          Math.abs(image.width - image.height) /
            Math.min(image.width, image.height) <
            0.3
        );
      }) ?? null
    );
  }
  return null;
};

const RandomDogContainer = () => {
  const { data, error } = useFetch<DogImage[]>(FETCH_RANDOM_IMAGES_URL);
  const randomDog: DogImage | null = findLandingImage(data);
  return (
    <>
      <h1
        className="spectrum-Heading spectrum-Heading--sizeXXXL random-dog-title"
        id="title"
      >
        {LANDING_PAGE_TITLE}
      </h1>
      {randomDog && <RandomDog {...randomDog} />}
    </>
  );
};

export default RandomDogContainer;

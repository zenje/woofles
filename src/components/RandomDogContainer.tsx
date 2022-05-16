import { useFetch } from 'usehooks-ts';
import { DogImage } from '../types';
import {
  FETCH_RANDOM_IMAGES_URL,
  LANDING_PAGE_TITLE,
} from '../utils/constants';
import { findRandomImageFromData } from '../utils/utils';
import ErrorContainer from './ErrorContainer';
import RandomDog from './RandomDog';

const RandomDogContainer = () => {
  const { data, error } = useFetch<DogImage[]>(FETCH_RANDOM_IMAGES_URL);
  const randomDogImage: DogImage | null = data
    ? findRandomImageFromData(data)
    : null;

  if (error) {
    return <ErrorContainer />;
  }
  
  return (
    <>
      <h1
        className="spectrum-Heading spectrum-Heading--sizeXXXL random-dog-title"
        id="title"
      >
        {LANDING_PAGE_TITLE}
      </h1>
      {randomDogImage && <RandomDog {...randomDogImage} />}
    </>
  );
};

export default RandomDogContainer;

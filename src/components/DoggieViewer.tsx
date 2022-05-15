import { Flex } from '@adobe/react-spectrum';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DogImage } from '../types';
import { getTemperamentString } from '../utils/utils';

type Props = {};

const findLandingImage = (images: DogImage[]): DogImage | null => {
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
};

const DoggieViewer = (props: Props) => {
  const [landingImage, setLandingImage] = useState<DogImage | null>(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(
      'https://api.thedogapi.com/v1/images/search?size=large&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10'
    )
      .then((response) => response.json())
      .then((data) => {
        const image: DogImage | null = findLandingImage(data);
        setLandingImage(image);
      });
  }, []);
  return (
    <Flex
      flex={1}
      direction="column"
      width="100%"
      maxWidth="static-size-6000"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <h1 className="spectrum-Heading spectrum-Heading--sizeXXXL" id="title">
        find your new best friend!
      </h1>
      {landingImage && (
        <img
          onClick={() => {
            navigate(`/breed/${landingImage.breeds[0].id}`, { replace: true });
          }}
          className="doggo"
          src={landingImage.url}
          alt="doggo"
        />
      )}
      <h1 className="spectrum-Heading spectrum-Heading--sizeXXL dog-name">
        {landingImage && (
          <>
            <div>{landingImage.breeds[0].name}</div>{' '}
            <div className="spectrum-Body spectrum-Body--sizeXXXL">
              {getTemperamentString(
                landingImage.breeds[0].temperament.toLowerCase()
              )}
            </div>
          </>
        )}
      </h1>
    </Flex>
  );
};

export default DoggieViewer;

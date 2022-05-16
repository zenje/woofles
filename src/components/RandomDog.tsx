import { useNavigate } from 'react-router-dom';
import { DogImage } from '../types';
import { DOG_HOVER_TEXT } from '../utils/strings';
import { getTemperamentString } from '../utils/utils';
import ImageWithHoverText from './ImageWithHoverText';

const RandomDog = ({ breeds, url }: DogImage) => {
  const navigate = useNavigate();

  const { id: breedId, name, temperament } = breeds[0];
  const navigateToBreed = () => {
    navigate(`/breed/${breedId}`, { replace: true });
  };
  return (
    <>
      <ImageWithHoverText
        onClick={navigateToBreed}
        hoverText={DOG_HOVER_TEXT}
        imgClasses="random-dog-img"
        onHoverImgClasses="random-dog-img-hover"
        src={url}
        alt={name}
      />
      <div className="random-dog-content">
        <div className="spectrum-Body spectrum-Body--sizeXXXL">
          {getTemperamentString(temperament.toLowerCase())}
        </div>
        <h1 className="spectrum-Heading spectrum-Heading--sizeXXL dog-name">
          {`Meet the `}
          <a
            className="random-dog-name-link"
            href="#"
            onClick={navigateToBreed}
          >
            {name}
          </a>
          {`.`}
        </h1>
      </div>
    </>
  );
};

export default RandomDog;

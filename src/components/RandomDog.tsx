import { useNavigate, Link } from 'react-router-dom';
import { DogImage } from '../types';
import { DOG_HOVER_TEXT, NAVIGATION } from '../utils/constants';
import { getTemperamentString } from '../utils/utils';
import ImageWithHoverText from './ImageWithHoverText';

const RandomDog = ({ breeds, url }: DogImage) => {
  const { id: breedId, name, temperament } = breeds[0];

  const navigate = useNavigate();
  const navLink = `${NAVIGATION.BREED.to}/${breedId}`;
  const navigateToBreed = () => {
    navigate(navLink, { replace: true });
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
        <h1 className="spectrum-Heading spectrum-Heading--sizeXXL random-dog-meet">
          {`Meet the `}
          <Link className="random-dog-name-link" to={navLink}>
            {name}
          </Link>
          {`.`}
        </h1>
      </div>
    </>
  );
};

export default RandomDog;

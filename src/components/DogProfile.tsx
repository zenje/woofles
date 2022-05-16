import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useFetch } from 'usehooks-ts';
import { Breed, LabelValue } from '../types';
import { getDogImgUrl, getFetchBreedsByIdUrl } from '../utils/constants';
import { getInfoLabelValuesFromBreedData } from '../utils/utils';
import DogProfileContent from './DogProfileContent';
import ErrorContainer from './ErrorContainer';

type Props = {
  id: string;
  className?: string;
};

export const DogProfileWithParams = () => {
  let { id } = useParams();
  return id ? <DogProfile id={id} /> : null;
};

const DogProfile = ({ className, id }: Props) => {
  const { data, error } = useFetch<Breed>(getFetchBreedsByIdUrl(id));

  if (error) {
    return <ErrorContainer />;
  }

  if (data) {
    const { name, reference_image_id } = data;
    const infoLabelValues: LabelValue[] = getInfoLabelValuesFromBreedData(data);
    return (
      <div className={cn('dog-profile', className)}>
        <h1
          className="spectrum-Heading spectrum-Heading--sizeXXL dog-profile-title"
          id="title"
        >
          {name}
        </h1>
        {reference_image_id && (
          <img
            className="dog-profile-img"
            src={getDogImgUrl(reference_image_id)}
            alt={data.name}
          />
        )}
        <DogProfileContent infoLabelValues={infoLabelValues} />
      </div>
    );
  }
  return null;
};

export default DogProfile;

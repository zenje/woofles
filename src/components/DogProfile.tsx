import cn from 'classnames';
import { useParams } from 'react-router-dom';
import { useFetch } from 'usehooks-ts';
import { Breed, LabelValue } from '../types';
import {
    BREED_INFO,
    getDogImgUrl,
    getFetchBreedsByIdUrl
} from '../utils/constants';
import ErrorContainer from './ErrorContainer';

type Props = {
  id: string;
  className?: string;
};

const getInfoLabelValues = (data: Breed): LabelValue[] => {
  return [
    { label: BREED_INFO.ORIGIN, value: data.origin },
    { label: BREED_INFO.BRED_FOR, value: data.bred_for },
    { label: BREED_INFO.BREED_GROUP, value: data.breed_group },
    { label: BREED_INFO.TEMPERAMENT, value: data.temperament },
    { label: BREED_INFO.LIFE_SPAN, value: data.life_span },
    {
      label: BREED_INFO.HEIGHT,
      value: data.height
        ? `${data.height.imperial} in (${data.height.metric} cm)`
        : null,
    },
    {
      label: BREED_INFO.WEIGHT,
      value: data.weight
        ? `${data.weight.imperial} lbs (${data.height.metric} kg)`
        : null,
    },
  ];
};

const renderInfo = (infoLabelValues: LabelValue[]) => {
  return (
    <div role="list">
      {infoLabelValues.map((labelValue) =>
        labelValue && labelValue.value ? (
          <div
            role="listitem"
            key={labelValue.label}
            className="dog-profile-detail-row"
          >
            <div className="spectrum-Detail spectrum-Detail--sizeXL">
              {labelValue.label}
            </div>
            <div className="dog-profile-detail-row-right">
              {labelValue.value}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
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
    const infoLabelValues: LabelValue[] = getInfoLabelValues(data);
    const { name, reference_image_id } = data;
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
        <div className="dog-profile-content">{renderInfo(infoLabelValues)}</div>
      </div>
    );
  }
  return null;
};

export default DogProfile;

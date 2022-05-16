import { useParams } from 'react-router-dom';
import { useFetch } from 'usehooks-ts';
import { Breed } from '../types';

type Props = {};

type LabelValue = {
  label: string;
  value: string | null;
};

const getInfoLabelValues = (data: Breed): LabelValue[] => {
  return [
    { label: 'Origin', value: data.origin },
    { label: 'Bred for', value: data.bred_for },
    { label: 'Breed Group', value: data.breed_group },
    { label: 'Temperament', value: data.temperament },
    { label: 'Life Span', value: data.life_span },
    {
      label: 'Height',
      value: data.height
        ? `${data.height.imperial} in (${data.height.metric} cm)`
        : null,
    },
    {
      label: 'Weight',
      value: data.weight
        ? `${data.weight.imperial} lbs (${data.height.metric} kg)`
        : null,
    },
  ];
};

const DogProfile = (props: Props) => {
  let { id } = useParams();
  const { data, error } = useFetch<Breed>(
    `https://api.thedogapi.com/v1/breeds/${id}`
  );
  console.log('data', data);

  if (data) {
    const infoLabelValues: LabelValue[] = getInfoLabelValues(data);
    return (
      <div className="dog-profile">
        <h1
          className="spectrum-Heading spectrum-Heading--sizeXXL dog-profile-title"
          id="title"
        >
          {data.name}
        </h1>
        {data.reference_image_id && (
          <img
            className="dog-profile-img"
            src={`https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`}
          />
        )}
        <div className="dog-profile-content">
          {infoLabelValues.map((labelValue) =>
            labelValue && labelValue.value ? (
              <div key={labelValue.label} className="dog-profile-detail-row">
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
      </div>
    );
  }
  return null;
};

export default DogProfile;

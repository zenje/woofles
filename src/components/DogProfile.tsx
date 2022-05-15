import { useParams } from 'react-router-dom';
import { useFetch } from 'usehooks-ts';
import { Breed } from '../types';

type Props = {};

type LabelValue = {
  label: string;
  value: string | null;
};

const DogProfile = (props: Props) => {
  let { id } = useParams();
  console.log(id);
  const { data, error } = useFetch<Breed>(
    `https://api.thedogapi.com/v1/breeds/${id}`
  );
  console.log('data', data);

  if (data) {
    const info: LabelValue[] = [
      { label: 'Origin', value: data.origin },
      { label: 'Temperament', value: data.temperament },
      { label: 'Life Span', value: data.life_span },
      {
        label: 'Height',
        value: data.height
          ? `${data.height.imperial}in (${data.height.metric}cm)`
          : null,
      },
      {
        label: 'Weight',
        value: data.weight
          ? `${data.weight.imperial}lbs (${data.height.metric}kg)`
          : null,
      },
    ];
    return (
      <div>
        <h1>{data.name}</h1>
        {info.map((labelValue) =>
          labelValue && labelValue.value ? (
            <div>
              <label>{labelValue.label}</label>
              <div>{labelValue.value}</div>
            </div>
          ) : null
        )}
        {data.reference_image_id && (
          <img
            className="dog-profile-img"
            src={`https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`}
          />
        )}
      </div>
    );
  }
  return null;
};

export default DogProfile;

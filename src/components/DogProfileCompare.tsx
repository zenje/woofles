import DogProfile from './DogProfile';
import { useLocation } from 'react-router-dom';

type Props = {
  ids: Set<string>;
};

export const DogProfileCompareWithParams = () => {
  let location = useLocation();
  let { ids } = location.state as { ids: Set<string> };
  if (ids !== undefined && ids !== null) {
    return <DogProfileCompare ids={ids} />;
  }
  return null;
};

const DogProfileCompare = ({ ids }: Props) => {
  return (
    <div className="dog-profile-compare">
      {Array.from(ids).map((id) => (
        <DogProfile key={id} className="dog-profile-compare-item" id={id} />
      ))}
    </div>
  );
};

export default DogProfileCompare;

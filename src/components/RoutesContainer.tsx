import { Route, Routes } from 'react-router-dom';
import Catalog from './Catalog';
import { DogProfileWithParams } from './DogProfile';
import { DogProfileCompareWithParams } from './DogProfileCompare';
import RandomDogContainer from './RandomDogContainer';

const wrapped = (Component: any) => {
  const WrappedComponent = () => (
    <div className="content-container">
      <Component />
    </div>
  );
  return WrappedComponent;
};

const WrappedRandomDog = wrapped(RandomDogContainer);
const WrappedDogProfile = wrapped(DogProfileWithParams);
const WrappedCatalog = wrapped(Catalog);
const WrappedDogProfileCompare = wrapped(DogProfileCompareWithParams);

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<WrappedRandomDog />} />
      <Route path="/breed">
        <Route path=":id" element={<WrappedDogProfile />} />
      </Route>
      <Route path="/catalog" element={<WrappedCatalog />} />
      <Route path="/compare" element={<WrappedDogProfileCompare />} />
    </Routes>
  );
};

export default RoutesContainer;
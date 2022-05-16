import { Route, Routes } from 'react-router-dom';
import Catalog from './Catalog';
import { DogProfileWithParams } from './DogProfile';
import { DogProfileCompareWithParams } from './DogProfileCompare';
import RandomDogContainer from './RandomDogContainer';
import { NAVIGATION } from '../utils/constants';

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
      <Route path={NAVIGATION.HOME.to} element={<WrappedRandomDog />} />
      <Route path={NAVIGATION.BREED.to}>
        <Route path=":id" element={<WrappedDogProfile />} />
      </Route>
      <Route path={NAVIGATION.CATALOG.to} element={<WrappedCatalog />} />
      <Route
        path={NAVIGATION.COMPARE.to}
        element={<WrappedDogProfileCompare />}
      />
    </Routes>
  );
};

export default RoutesContainer;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DogProfile from './DogProfile';
import RandomDogContainer from './RandomDogContainer';

type Props = {};

const wrapped = (Component: any) => {
  const WrappedComponent = () => (
    <div className="content-container">
      <Component />
    </div>
  );
  return WrappedComponent;
};

const WrappedRandomDog = wrapped(RandomDogContainer);
const WrappedDogProfile = wrapped(DogProfile);

const RoutesContainer = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<WrappedRandomDog />} />
      <Route path="breed">
        <Route path=":id" element={<WrappedDogProfile />} />
      </Route>
      <Route path="/catalog" element={<div>Catalog!!</div>} />
    </Routes>
  );
};

export default RoutesContainer;

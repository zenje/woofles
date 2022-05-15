import { Route, Routes } from 'react-router-dom';
import DoggieViewer from './DoggieViewer';
import DogProfile from './DogProfile';

type Props = {};

const RoutesContainer = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<DoggieViewer />} />
      <Route path="breed">
        <Route path=":id" element={<DogProfile />} />
      </Route>
      <Route path="/catalog" element={<div>Catalog!!</div>} />
    </Routes>
  );
};

export default RoutesContainer;

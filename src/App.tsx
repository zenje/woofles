import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import RoutesContainer from './components/RoutesContainer';
import { NAVIGATION_LINKS } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <Provider theme={defaultTheme}>
        <div className="app-container">
          <header>
            <Navigation links={NAVIGATION_LINKS} />
          </header>
          <RoutesContainer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

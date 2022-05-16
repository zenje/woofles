import { darkTheme, Provider } from '@adobe/react-spectrum';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './components/RoutesContainer';
import { NAVIGATION_LINKS } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <Provider theme={darkTheme}>
        <div className="app-container">
          <header>
            <Navigation links={NAVIGATION_LINKS} />
          </header>
          <Routes />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

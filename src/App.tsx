import { darkTheme, Provider } from '@adobe/react-spectrum';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './components/RoutesContainer';
import useTitle from './hooks/useTitle';
import { NAVIGATION_LINKS, PAGE_TITLE } from './utils/constants';

function App() {
  useTitle(PAGE_TITLE);
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

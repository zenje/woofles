import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import RoutesContainer from './components/RoutesContainer';

function App() {
  return (
    <BrowserRouter>
      <Provider theme={defaultTheme}>
        <div className="app-container">
          <header>
            <nav>
              <Link to="/">Home</Link> | <Link to="/catalog">Catalog</Link> |{' '}
              <Link to="/breed/10">Breed</Link>
            </nav>
          </header>
          <RoutesContainer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import DoggieViewer from './components/DoggieViewer';
import {
  Button,
  Header,
  Heading,
  defaultTheme,
  Provider,
  Flex,
  View,
} from '@adobe/react-spectrum';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <div className="app-container">
        <header>
          <div>
            <a href="/">home</a>
          </div>
          <div>
            <a href="/catalog">catalog</a>
          </div>
        </header>
        <DoggieViewer />
      </div>
    </Provider>
  );
}

export default App;

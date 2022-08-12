import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <AppRouter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

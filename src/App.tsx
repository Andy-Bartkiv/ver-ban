import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;

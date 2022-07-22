import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeIndex from './components/Home/HomeIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomeIndex/>} />
      </Routes>
    </div>
  );
}

export default App;

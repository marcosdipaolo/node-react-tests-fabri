import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomeIndex from './components/Home/HomeIndex';
// wekfgewhkfgdskf

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeIndex/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

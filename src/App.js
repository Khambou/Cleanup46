import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar';
import HomePage from './components/home';
import PricesPage from './components/prices';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tarifs" element={<PricesPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
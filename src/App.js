import { Routes, Route } from 'react-router-dom';
import Nav from './components/navbar';
import HomePage from './components/home';
import PricesPage from './components/prices';
import NotFoundPage from './components/404';

function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tarifs" element={<PricesPage />} />
        </Routes>
    </>
  );
}

export default App;
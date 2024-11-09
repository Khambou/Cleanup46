import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar';
import HomePage from './components/home';
import PricesPage from './components/prices';
import NotFoundPage from './components/404';

function App() {
  return (
    <>
      <Nav />
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tarifs" element={<PricesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
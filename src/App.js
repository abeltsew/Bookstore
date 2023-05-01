import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Catagories from './components/Catagories';
import Layout from './components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Catagories />} />
      <Route path="*" element={<div>Not Found 404</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;

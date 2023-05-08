import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Catagories from './components/Catagories';
import Layout from './components/Layout';
import store from './app/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Catagories />} />
        <Route path="*" element={<div>Not Found 404</div>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;

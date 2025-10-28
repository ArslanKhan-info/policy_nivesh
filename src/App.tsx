import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/home';
import CategoryPage from './pages/category';
import ProductDetail from './pages/product-detail';
import ScrollToTop from './components/scroll-to-top';

/**
 * Main App component with routing configuration
 */
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:categorySlug" element={<CategoryPage />} />
          <Route path="products/:productSlug" element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;


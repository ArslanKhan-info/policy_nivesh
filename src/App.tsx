import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './pages/home';

/**
 * Main App component with routing configuration
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;


import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

/**
 * Main layout wrapper component
 */
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Repository } from './pages/Repository';
import { Articles } from './pages/Articles';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Home />
  },
  {
    path: '/articles',
    element: <Articles />
  },
  {
    path: '/repository',
    element: <Repository />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

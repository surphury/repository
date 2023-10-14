import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Repository } from './pages/Repository';
/* import { Articles } from './pages/Articles'; */
import { Events } from './pages/Events';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Home />
  },
  /*  {
    path: '/articles',
    element: <Articles />
  }, */
  {
    path: '/repository',
    element: <Repository />
  },
  {
    path: '/events',
    element: <Events />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

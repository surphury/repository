import './App.css';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Repository } from './pages/Repository';
/* import { Articles } from './pages/Articles'; */
import { Events } from './pages/Events';
import { Content } from './pages/Content';
import { Login } from './pages/Login';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Home />
  },
  {
    path: '/content/:id',
    element: <Content />
  },
  {
    path: '/repository',
    element: <Repository />
  },
  {
    path: '/events',
    element: <Events />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

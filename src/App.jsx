


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home';
import Game from './component/Game';
import Start from './component/Start';
import Contact from './component/Contact';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Start /> },
      { path: 'game', element: <Game /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

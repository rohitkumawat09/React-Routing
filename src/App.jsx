import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './component/home'
import Game from './component/game'
import Start from './component/Start'
import Contact from './component/Contact'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Start />,
        },
        {
          path: "/game",
          element: (
              <Game />
          ),
        },
        {
          path: "/contact",
          element: (
              <Contact />
          ),
        },
        
      ]
    },
  ]);

  return (

      <RouterProvider router={router}> 
      <Home />
      </RouterProvider>
  
  );
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ErrorPage from './Rotas/ErrorPage'
import Contato from './Rotas/Contato';
import UserPage from './Rotas/UserPage';
import Aulas from './Rotas/Aulas';
import Home from './Rotas/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "contacts/",
        element: <Contato />,
      },
      {
        path: "usuarios/",
        element: <UserPage />,
      },
      {
        path: "Aulas/",
        element: <Aulas />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

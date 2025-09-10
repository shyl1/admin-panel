import { Home } from "./pages/home/Home"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Users } from "./pages/users/Users";
import { Products } from "./pages/products/Products";
import {MainLayout} from './UI/MainLayout.js';
import { Login } from "./pages/login/Login.js";

import './styles/global.scss'

function App() {

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
          index: true,
          element: <Home />,
      },
      {
          path: "/users",
          element: <Users />,
      },
      {
          path: "/products",
          element: <Products />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  
]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

import { createBrowserRouter } from "react-router-dom";
import Container from "./maincontent/container";
import Help from "./maincontent/help";
import About from "./maincontent/About"; 
import App from "./App";
import Signin from "./maincontent/signin";
import Restaurant from "./maincontent/restaurant";
import ErrorComponent from "./errorPage";
import Cart from "./cart/cart";

export const appRouter = createBrowserRouter([
    {
          path: "/",
      element: <App/>,
      errorElement:<ErrorComponent/>,
      children: [
        {
          path: "/",
          element: <Container />
        },
        {
            path: "/About",
            element: <About />
          },
          {
            path: "/help",
            element: <Help />
          },
          {
            path: "/signin",
            element:<Signin/>
          },
          {
            path:"/restaurant/:id",
            element:<Restaurant/>
          },
          {
            path:"/cart",
            element:<Cart/>
          }
      ],
    },
  ]);


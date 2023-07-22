import { useRoutes } from "react-router-dom";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Products from "./Pages/Products/Products";
import ProductsById from "./Pages/ProductsById/ProductsById";
import NotFound from "./Pages/NotFound/NotFound";
import ProductsLayout from "./Components/ProductsLayout/ProductsLayout";
import Main from "./Pages/Main/Main";

export const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/products",
      element: <ProductsLayout />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: ":id",
          element: <ProductsById />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

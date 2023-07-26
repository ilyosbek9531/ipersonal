import { useRoutes } from "react-router-dom";
import About from "pages/About/About";
import Blog from "pages/Blog/Blog";
import Products from "pages/Products/Products";
import ProductsById from "pages/ProductsById/ProductsById";
import NotFound from "pages/NotFound/NotFound";
import ProductsLayout from "./Components/ProductsLayout/ProductsLayout";
import Main from "pages/Main/Main";
import Protected from "helpers/Protected/Protected";

export const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about",
      element: (
        <Protected isProtected={true}>
          <About />
        </Protected>
      ),
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

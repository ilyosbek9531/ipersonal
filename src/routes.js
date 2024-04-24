import { useRoutes } from "react-router-dom";
import Blog from "pages/Blog/Blog";
import NotFound from "pages/NotFound/NotFound";
import Main from "pages/Main/Main";
import About from "pages/About/About";
import Projects from "pages/Projects/Projects";
import Skills from "pages/Skills/Skills";

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
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

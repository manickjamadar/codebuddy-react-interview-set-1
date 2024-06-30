import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Root from "./pages/Root";
import { MultiFormProvider } from "./contexts/MultiFormContext";
import { PagePaths } from "./config/constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: PagePaths.home,
        element: (
          <MultiFormProvider>
            <Home />
          </MultiFormProvider>
        ),
      },
      { path: PagePaths.posts, element: <Posts /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

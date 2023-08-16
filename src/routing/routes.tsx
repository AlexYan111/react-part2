import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UserList from "./UserList";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <HomePage /> }, SAME AS BELOW
      { path: "", element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;

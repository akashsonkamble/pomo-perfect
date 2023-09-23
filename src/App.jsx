import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Login from "./pages/Login";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Login /> },
      { path: "home", element: <HomePage /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;

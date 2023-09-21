import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './pages/Root';
import Login from "./pages/Login";
// import Pomodoro from "./components/Pomodoro";
import Register from "./pages/Register";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Login />
      <Register />
      <section className="bg-Rebeccapurple text-white flex justify-between justify-items-center p-9 max-w-9xl h-20 items-center box-border m-auto">
        <h1 className="font-bold text-4xl">PomoPerfect</h1>
        <a className="text-2xl text-white" href="/logout">
          Logout
        </a>
      </section>

      <section className="justify-between justify-items-center p-4 max-w-4xl items-center box-border mx-auto">
        <Pomodoro />
      </section> */}
    </>
  );
}

export default App;

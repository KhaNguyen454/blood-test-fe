import "./App.css";
import LoginPage from "./page/login/Login";
import RegisterPage from "./page/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

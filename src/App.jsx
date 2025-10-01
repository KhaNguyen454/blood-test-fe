import "./App.css";
import LoginPage from "./page/login/Login";
import RegisterPage from "./page/register/Register";
import HomePage from "./page/home/Home";
import BookingPage from "./page/booking/Booking";
import ResultsPage from "./page/results/Results";
import HistoryPage from "./page/history/History";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "booking",
      element: <BookingPage />,
    },
    {
      path: "results",
      element: <ResultsPage />,
    },
    {
      path: "history",
      element: <HistoryPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import "./App.css";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import HomePage from "./pages/home/Home";
import BookingPage from "./pages/booking/Booking";
import ResultsPage from "./pages/results/Results";
import HistoryPage from "./pages/history/History";
import ProfilePage from "./components/profile/ProfilePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./pages/booking/Booking";
import CatalogSelection from "./components/booking/CatalogSelection";

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
    {
      path: "profile",
      element: <ProfilePage />,
    },
    {
      path: "/booking",
      element: <Booking />,
    },
    {
      path: "/booking/catalog",
      element: <CatalogSelection />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import CallLogs from "../pages/CallLogs";
import Appointments from "../pages/Appointments";
import Settings from "../pages/Settings";


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true,
            element: <Dashboard></Dashboard>,
        },
        {
          path: "/calls",
          element: <CallLogs></CallLogs>,
        },
        {
          path: "/appointments",
          element: <Appointments></Appointments>,
        },
        {
          path:"settings",
          element: <Settings></Settings>,
        },
    ]
  },
]);
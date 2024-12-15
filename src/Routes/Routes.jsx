import { createBrowserRouter } from "react-router-dom";
import Main from "../layOuts/Main";
import AddJobs from "../pages/AddJobs/AddJobs";
import Home from "../pages/Home/Home";
import JobApply from "../pages/jobApply/JobApply";
import JobDetails from "../pages/JobDetails/JobDetails";
import Login from "../pages/Login";
import MyApplications from "../pages/myApplications/MyApplications";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import Register from "../pages/Register";
import ViewApplication from "../pages/viewApplications/ViewApplications";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplication />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`),
      },
      {
        path: "/addJobs",
        element: <AddJobs />,
      },
      {
        path: "/jobApply/:id",
        element: <JobApply />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export { router };

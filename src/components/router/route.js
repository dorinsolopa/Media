import ViewProfile from "../viewProfile/ViewProfile";
import Dashboard from "../Dashboard";
import CreateProfile from "../create_profile/CreateProfile";

export const routes = [
  {
    path: "/profile/:userId",
    exact: true,
    component: ViewProfile,
    name: " ViewProfile",
  },
  {
    path: "/",
    exact: true,
    component: Dashboard,
    name: " Dashboard",
  },
  {
    path: "/create-profile",
    exact: true,
    component: CreateProfile,
    name: " CreateProfile",
  },
];

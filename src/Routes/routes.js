import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Historic from "../pages/Historic/Historic";
import MemberRegister from "../pages/MemberRegister/MemberRegister";
import PointRegister from "../pages/PointRegister/PointRegister";
import Settings from "../pages/Settings/Settings";
import TeamManagement from "../pages/TeamManagement/TeamManagement";

const routes = [
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "/register",
    component: Register,
    requiresAuth: true,
  },
  {
    path: "/historic",
    component: Historic,
    requiresAuth: true,
  },
  {
    path: "/member-register",
    component: MemberRegister,
    requiresAuth: true,
  },
  {
    path: "/point-register",
    component: PointRegister,
    requiresAuth: true,
  },
  {
    path: "/settings",
    component: Settings,
    requiresAuth: true,
  },
  {
    path: "/team-management",
    component: TeamManagement,
    requiresAuth: true,
  },
];

export default routes;

// routes.js
import Login from "../pages/Auth/Login/Login";
import RedefinePassword from "../pages/Auth/RedefinePassword/RedefinePassword";
import Register from "../pages/Auth/Register/Register";
import Historic from "../pages/Historic/Historic";
import MemberRegister from "../pages/MemberRegister/MemberRegister";
import PointRegister from "../pages/PointRegister/PointRegister";
import Settings from "../pages/Settings/Settings";
import Team from "../pages/Team/Team";
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
    requiresAuth: false,
  },
  {
    path: "/historic",
    component: Historic,
    requiresAuth: true,
  },
  {
    path: "/redefine-password",
    component: RedefinePassword,
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
    path: "/team",
    component: Team,
    requiresAuth: true,
  },
  {
    path: "/team-management",
    component: TeamManagement,
    requiresAuth: true,
  },
];

export default routes;

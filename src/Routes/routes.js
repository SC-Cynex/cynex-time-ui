import Login from '../pages/Auth/Login/Login';
import RedefinePassword from '../pages/Auth/RedefinePassword/RedefinePassword';
import Historic from '../pages/Historic/Historic';
import MemberRegister from '../pages/MemberRegister/MemberRegister';
import PointRegister from '../pages/PointRegister/PointRegister';
import Settings from '../pages/Settings/Settings';
import Team from '../pages/Team/Team';
import TeamManagement from '../pages/TeamManagement/TeamManagement';

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/historic',
        component: Historic,
    },
    {
        path: '/redefine-password',
        component: RedefinePassword,
    },
    {
        path: '/member-register',
        component: MemberRegister,
    },
    {
        path: '/point-register',
        component: PointRegister,
    },
    {
        path: '/settings',
        component: Settings,
    },
    {
        path: '/team',
        component: Team,
    },
    {
        path: '/team-management',
        component: TeamManagement,
    }
];

export default routes;

import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import RedifinePassword from '../pages/Auth/RedifinePassword/RedifinePassword';
import Historic from '../pages/Historic/Historic';
import MemberRegister from '../pages/MemberRegister/MemberRegister';
import PointRegister from '../pages/PointRegister/PointRegister';
import Settings from '../pages/Settings/Settings';
import Team from '../pages/Team/Team';

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/historic',
        component: Historic,
    },
    {
        path: '/redifine-password',
        component: RedifinePassword,
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
    }
];

export default routes;

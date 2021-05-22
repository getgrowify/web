import Starter from '../views/starter/starter.jsx';
import Alerts from '../views/pages/maintenance.jsx';
import Crypto from '../views/pages/crypto.jsx';
import Cards from '../views/pages/cards.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-home',  
    component: Starter 
  },
  {
    path: '/maintenance',
    name: 'Maintenance',
    icon: 'ti-panel',
    component: Alerts
  },{
    path: '/community',
    name: 'Community',
    icon: 'ti-world',
    component: Cards
  },
  {
    path: '/crypto',
    name: '$EED',
    icon: 'ti-rocket',
    component: Crypto
  },

  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;

import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Dashboard',
    icon: 'grid-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Real Time',
    icon: 'clock-outline',
    link: '/pages/real-time',
  },
  {
    title: 'Platform Analysis',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'OTS',
        link: '/pages/platform-analysis/ots',
      },
      {
        title: 'Reach',
        link: '/pages/platform-analysis/reach',
      },
      {
        title: 'TSV',
        link: '/pages/platform-analysis/tsv',
      },
      {
        title: 'Share',
        link: '/pages/platform-analysis/share',
      },
      {
        title: 'Being Watch',
        pathMatch: 'prefix',
        link: '/pages/platform-analysis/being-watch',
      },
    ],
  },
  {
    title: 'Show Analysis',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'By Content',
        link: '/pages/show-analysis/content',       
      },
      {
        title: 'By Genere',
        link: '/pages/show-analysis/genere',
      },
      {
        title: 'By Duration',
        link: '/pages/show-analysis/duration',
      },
      {
        title: 'Being Watch',
        link: '/pages/show-analysis/being-watch',        
      },
      {
        title: 'Originals',
        link: '/pages/show-analysis/originals',
      },
      {
        title:'New Launches',
        link: '/pages/show-analysis/new-launch',
      }
    ],
  },
  {
    title: 'In depth Analysis',
    icon: 'keypad-outline',
    // link: '/pages/in-depth-analysis',
    children: [
      {
        title: 'Top Artists',
        link: '/pages/in-depth-analysis/top-artists',   
      },
      {
        title: 'Heatmaps',
        link: '/pages/in-depth-analysis/heat-maps',
      },
      {
        title: 'Audience Poll',
        link: '/pages/in-depth-analysis/audience-poll',       
      },
      {
        title: 'Trends',
        link: '/pages/in-depth-analysis/trends',
      },
    ],
  },
  {
    title: 'Audience',
    icon: 'people-outline',
    children: [
      {
        title: 'Location',
        link: '/pages/audience/location',
      },
      {
        title: 'Language',
        link: '/pages/audience/language',
      },
      {
        title: 'Device',
        link: '/pages/audience/devices',
      }
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];

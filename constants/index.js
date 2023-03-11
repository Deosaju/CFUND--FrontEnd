import { createCampaign, dashboard, logout, payment, profile, withdraw } from '/public/assets';

export const navlinks = [
  {
    name: '/',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: '/CreateCampaign',
    imgUrl: createCampaign,
    link: '/CreateCampaign',
  },
  {
    name: '/CampaignDetails',
    imgUrl: payment,
    link: '/CampaignDetails',
  },
  {
    name: 'CampaignDetails',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: '/Profile',
    imgUrl: profile,
    link: '/Profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];

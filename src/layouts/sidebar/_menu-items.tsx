import routes from '@/config/routes';
import { HomeIcon } from '@/components/icons/home';
import { FarmIcon } from '@/components/icons/farm';
import { PoolIcon } from '@/components/icons/pool';
import { ProfileIcon } from '@/components/icons/profile';
import { DiskIcon } from '@/components/icons/disk';
import { ExchangeIcon } from '@/components/icons/exchange';
import { VoteIcon } from '@/components/icons/vote-icon';
import { PlusCircle } from '@/components/icons/plus-circle';
import { CompassIcon } from '@/components/icons/compass';

export const menuItems = [
  // {
  //   name: 'Home',
  //   icon: <HomeIcon />,
  //   href: routes.home,
  // },
  {
    name: 'Marketplace',
    icon: <FarmIcon />,
    href: routes.marketplace,
  },
  // {
  //   name: 'Swap',
  //   icon: <ExchangeIcon />,
  //   href: routes.swap,
  // },
  // {
  //   name: 'Liquidity',
  //   icon: <PoolIcon />,
  //   href: routes.liquidity,
  // },
  // {
  //   name: 'Explore NFTs',
  //   icon: <CompassIcon />,
  //   href: routes.search,
  // },
  {
    name: 'Underwrite',
    icon: <PlusCircle />,
    href: routes.underwrite,
  },
  // {
  //   name: 'NFT Details',
  //   icon: <DiskIcon />,
  //   href: routes.nftDetails,
  // },
  {
    name: 'Portfolio',
    icon: <ProfileIcon />,
    href: routes.portfolio,
  },
  {
    name: 'Risk Management',
    icon: <VoteIcon />,
    href: routes.proposals,
  },
  // {
  //   name: 'Vote',
  //   icon: <VoteIcon />,
  //   href: routes.vote,
  //   dropdownItems: [
  //     {
  //       name: 'Explore',
  //       href: routes.vote,
  //     },
  //     {
  //       name: 'Vote with pools',
  //       href: routes.proposals,
  //     },
  //     {
  //       name: 'Create proposal',
  //       href: routes.createProposal,
  //     },
  //   ],
  // },
];

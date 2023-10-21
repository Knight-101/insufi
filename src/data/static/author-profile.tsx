// Profile Wallet Data
import Wallet from '@/assets/images/portfolio/wallet.svg';
import Nft from '@/assets/images/portfolio/nft.svg';
import Deposit from '@/assets/images/portfolio/deposit.svg';
import Claimable from '@/assets/images/portfolio/claimable.svg';
export const authorWallets = [
  {
    id: 1,
    name: 'WALLET',
    logo: Wallet,
    balance: '$2,518.78',
  },
  {
    id: 2,
    name: 'POLICY TOKENS',
    logo: Nft,
    balance: '$100.00',
  },
];

// Profile Protocols Data
import PooltoGether from '@/assets/images/portfolio/poolto-gether.svg';
import GfcLogo from '@/assets/images/gfc.png';
import Uniswap from '@/assets/images/portfolio/uniswap.svg';
import Pancake from '@/assets/images/portfolio/pancake.svg';
import Curve from '@/assets/images/portfolio/curve.svg';

export const authorProtocols = [
  {
    id: 1,
    name: 'ALP',
    coinType: 'Alphabet Inc.',
    logo: GfcLogo,
    balance: '$100.00',
  }
];

// Profile Protocols Data
import Bitcoin from '@/assets/images/currency/bitcoin.svg';
import Ethereum from '@/assets/images/currency/ethereum.svg';
export const authorNetworks = [
  {
    id: 1,
    name: 'Allianz',
    logo: Bitcoin,
    balance: '$100.00',
  },
];

// Author Transaction History Data
import User1 from '@/assets/images/user-1.png';
import User2 from '@/assets/images/user-2.png';

export const transactionHistory = [
  {
    id: 1,
    name: 'Spy Thirtythree',
    avatar: User2,
    date: 'February 7, 2022',
    time: '10:13 AM',
    transactionType: 'credited',
    transactionFrom: 'Stefen365',
    transactionFromAvatar: User1,
    transactionMethodLogo: '',
    transactionMethod: 'Verse',
    transactionAmount: 9.85,
    gasFee: 0.0519,
    currencyType: 'ETH',
  },
  {
    id: 2,
    name: 'Spy Thirtythree',
    avatar: User2,
    date: 'February 7, 2022',
    time: '10:13 AM',
    transactionType: 'debited',
    transactionFrom: 'Stefen365',
    transactionFromAvatar: User1,
    transactionMethodLogo: '',
    transactionMethod: 'Verse',
    transactionAmount: 3000000.0,
    gasFee: 0.0519,
    currencyType: 'ETH',
  },
  {
    id: 3,
    name: 'Spy Thirtythree',
    avatar: User2,
    date: 'February 7, 2022',
    time: '10:13 AM',
    transactionType: 'credited',
    transactionFrom: 'Stefen365',
    transactionFromAvatar: User1,
    transactionMethodLogo: '',
    transactionMethod: 'Verse',
    transactionAmount: 9.85,
    gasFee: 0.0519,
    currencyType: 'ETH',
  },
];

import cn from 'classnames';
import Scrollbar from '@/components/ui/scrollbar';
import Avatar from '@/components/ui/avatar';
import TopupButton from '@/components/ui/topup-button';
import TransactCoin from '@/components/ui/transact-coin';
import WalletCard from '@/components/ui/wallet-card-two';
import { motion } from 'framer-motion';
//images
import GfcLogo from '@/assets/images/gfc.png';
import AuthorImage from '@/assets/images/author.jpg';
import ComparisonChart from '@/components/ui/chats/retro-comparision-chart';
import { LivePriceFeed } from '@/components/ui/live-price-feed';
import BitcoinImage from '@/assets/images/coin/bitcoin.svg';
import { Bitcoin } from '@/components/icons/bitcoin';
import { RadioGroup } from '@headlessui/react';
import { useContext, useState } from 'react';
import ListCard from '@/components/ui/list-card';
import PooltoGether from '@/assets/images/portfolio/poolto-gether.svg';
import { WalletContext } from '@/lib/hooks/use-connect';

const priceFeed = {
    id: '0',
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '0.2231345',
    usdBalance: '11,032.24',
    logo: BitcoinImage,
    change: '+12.5%',
    isChangePositive: true,
    isBorder: false,
    color: '#FDEDD4',
    icon: <Bitcoin />,
    prices: [
        { name: 1, value: 15187.44 },
        { name: 2, value: 21356.99 },
        { name: 3, value: 34698.98 },
        { name: 4, value: 37587.55 },
        { name: 5, value: 17577.4 },
        { name: 6, value: 26577.4 },
        { name: 7, value: 23577.4 },
        { name: 8, value: 18577.4 },
        { name: 9, value: 28577.4 },
    ],
}

const bestPerformer =
{

    id: 1,
    name: 'ALP',
    coinType: 'Alphabet Inc.',
    logo: GfcLogo,
    balance: '$100.00',
}

const bestUnderwriter =
{
    id: 1,
    name: 'Allianz',
    logo: Bitcoin,
    balance: '$100.00',
}

interface RadioOptionProps {
    value: string;
}

function RadioGroupOption({ value }: RadioOptionProps) {
    return (
        <RadioGroup.Option value={value}>
            {({ checked }) => (
                <span
                    className={`relative flex h-8 cursor-pointer items-center justify-center rounded-lg px-3 text-sm uppercase tracking-wider ${checked ? 'text-white' : 'text-brand dark:text-gray-400'
                        }`}
                >
                    {checked && (
                        <motion.span
                            className="absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large"
                            layoutId="statusIndicator"
                        />
                    )}
                    <span className="relative">{value}</span>
                </span>
            )}
        </RadioGroup.Option>
    );
}

export default function Sidebar({ className }: { className?: string }) {
    const { address, connectToWallet, balance, } = useContext(WalletContext);
    const [status, setStatus] = useState('Month');
    // const [chartData, setChartData] = useState(monthlyComparison);

    const handleOnChange = (value: string) => {
        setStatus(value);
        // switch (value) {
        //   case 'Week':
        //     setChartData(weeklyComparison);
        //     break;
        //   case 'Month':
        //     setChartData(monthlyComparison);
        //     break;
        //   case 'Year':
        //     setChartData(yearlyComparison);
        //     break;
        //   default:
        //     setChartData(monthlyComparison);
        //     break;
        // }
    };
    return (
        <aside
            className={cn(
                'top-0 z-20 h-full w-full max-w-full border-dashed border-slate-200 ltr:left-0 rtl:right-0 dark:border-gray-700 lg:fixed lg:w-80 ltr:lg:border-l rtl:lg:border-r xl:pt-20 3xl:w-[350px]',
                className
            )}
        >
            <div className="absolute top-0 right-0 z-20 h-[75px] w-full bg-sidebar-body dark:bg-dark md:block xl:hidden" />
            <Scrollbar style={{ height: 'calc(100% + 20px)' }}>
                <div className="relative z-20 pb-5">
                    <div className="my-10 mx-5 flex h-full flex-col justify-between overflow-x-hidden rounded-lg bg-transparent sm:mx-6 sm:flex-row lg:mx-0 lg:flex-col lg:p-4 xl:my-0 2xl:p-4">
                        <div className="w-full sm:w-[48%] lg:w-full">
                            {/* <Avatar
                                image={AuthorImage}
                                alt="Author"
                                className="mx-auto mb-6"
                                size="lg"
                            /> */}
                            <h3 className="mb-2 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 3xl:mb-3">
                                My Balance
                            </h3>
                            <div className="mb-7 text-center font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl 3xl:mb-8 3xl:text-[32px]">
                                {"$2,518.78"}
                            </div>
                            <TopupButton className="mb-8" />
                            <div>
                                <span className="-mx-6 block border-t border-dashed border-t-gray-200 dark:border-t-gray-700 3xl:-mx-8" />

                                {/* <TransactCoin className="mt-6 mb-8" /> */}
                            </div>
                            <span className="-mx-6 block border-t border-dashed border-t-gray-200 dark:border-t-gray-700 3xl:-mx-8" />
                        </div>

                    </div>
                    <div className="w-full px-3 sm:mt-0 sm:w-[48%] lg:w-full">
                        <RadioGroup
                            value={status}
                            onChange={handleOnChange}
                            className="flex items-center gap-5 mb-4"
                        >
                            <RadioGroupOption value="Week" />
                            <RadioGroupOption value="Month" />
                            <RadioGroupOption value="Year" />
                        </RadioGroup>
                        <LivePriceFeed {...priceFeed} />
                        <div className="block my-4">
                            <h3 className="text-heading-style mb-3 uppercase text-gray-900 dark:text-white">
                                Best Performer
                            </h3>
                            {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"> */}

                            <ListCard
                                item={bestPerformer}

                                variant="large"
                            />

                            {/* </div> */}
                        </div>
                        <div className="block">
                            <h3 className="text-heading-style mb-3 uppercase text-gray-900 dark:text-white">
                                Best Underwriter
                            </h3>
                            {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4"> */}

                            <ListCard
                                item={bestUnderwriter}

                                variant="medium"
                            />

                            {/* </div> */}
                        </div>
                    </div>

                </div>

            </Scrollbar>
        </aside>
    );
}

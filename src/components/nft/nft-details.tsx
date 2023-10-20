import { StaticImageData } from 'next/image';
import ParamTab, { TabPanel } from '@/components/ui/param-tab';
import Image from '@/components/ui/image';
import FeaturedCard from '@/components/nft/featured-card';
import ListCard from '@/components/ui/list-card';
import AnchorLink from '@/components/ui/links/anchor-link';
import { ArrowLinkIcon } from '@/components/icons/arrow-link-icon';
import { nftData } from '@/data/static/single-nft';
import NftDropDown from '@/components/nft/nft-dropdown';
import Avatar from '@/components/ui/avatar';
import NftFooter from './nft-footer';
import SwapCard from '../ui/swap-card';
import LiquidityChart from '../ui/chats/liquidity-chart';
import VolumeChart from '../ui/chats/volume-chart';
import ComparisonChart from '../ui/chats/comparison-chart';

type Avatar = {
  id: string | number;
  name: string;
  slug: string;
  logo: StaticImageData;
};
type NftDetailsProps = {
  isAuction?: boolean;
  image: StaticImageData;
  name: string;
  description: string;
  minted_date: string;
  minted_slug: string;
  price: number;
  creator: Avatar;
  collection: Avatar;
  owner: Avatar;
  block_chains: Avatar[];
};

export default function NftDetails({ product }: { product: NftDetailsProps }) {
  const {
    isAuction,
    image,
    name,
    description,
    minted_date,
    minted_slug,
    price,
    creator,
    collection,
    owner,
    block_chains,
  } = product;

  return (
    <div className="flex self-center flex-grow">

      <SwapCard />


      <div className="mx-auto flex flex-col transition-all xl:max-w-[1360px] 4xl:max-w-[1760px]">

        <div className="relative flex w-full self-end flex-col justify-between ltr:md:pl-8 rtl:md:mr-auto rtl:md:pr-8 lg:min-h-[calc(100vh-96px)] lg:w-[460px] ltr:lg:pl-12 rtl:lg:pr-12 xl:w-[592px] ltr:xl:pl-20 rtl:xl:pr-20">
          <div className="block">
            <div className="block">
              <div className="flex justify-between">
                <h2 className="text-xl font-medium leading-[1.45em] -tracking-wider text-gray-900 dark:text-white md:text-2xl xl:text-3xl">
                  {name}
                </h2>
                <div className="mt-1.5 shrink-0 ltr:ml-3 rtl:mr-3 xl:mt-2">
                  <NftDropDown />
                </div>
              </div>
              <AnchorLink
                href={minted_slug}
                className="mt-1.5 inline-flex items-center text-sm -tracking-wider text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white xl:mt-2.5"
              >
                Created on {minted_date}
                <ArrowLinkIcon className="h-3 w-3 ltr:ml-2 rtl:mr-2" />
              </AnchorLink>
              <div className="mt-4 flex flex-wrap gap-6 pt-0.5 lg:-mx-6 lg:mt-6 lg:gap-0">
                <div className="shrink-0 border-dashed border-gray-200 dark:border-gray-700 lg:px-6 lg:ltr:border-r lg:rtl:border-l">
                  <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                    Insuree
                  </h3>
                  <AnchorLink href={creator?.slug} className="inline-flex">
                    <ListCard
                      item={creator}
                      className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    />
                  </AnchorLink>
                </div>
                <div className="shrink-0 lg:px-6">
                  <h3 className="text-heading-style mb-2.5 uppercase text-gray-900 dark:text-white">
                    Insurer
                  </h3>
                  <AnchorLink href="#" className="inline-flex">
                    <ListCard
                      item={collection}
                      className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    />
                  </AnchorLink>
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col pb-5 xl:mt-9">
              <ParamTab
                tabMenu={[
                  {
                    title: 'Details',
                    path: 'details',
                  },
                  {
                    title: 'ROI',
                    path: 'bids',
                  },
                  {
                    title: 'Liquidity',
                    path: 'history',
                  },
                ]}
              >
                <TabPanel className="focus:outline-none">
                  <div className="space-y-6">
                    <div className="block">
                      <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                        Description
                      </h3>
                      <div className="text-sm leading-6 -tracking-wider text-gray-600 dark:text-gray-400">
                        {description}
                      </div>
                    </div>
                    <div className="block">
                      <h3 className="text-heading-style mb-2 uppercase text-gray-900 dark:text-white">
                        Expires On
                      </h3>
                      <AnchorLink href={owner?.slug} className="inline-block text-gray-600 hover:text-gray-900 dark:text-gray-400">

                        {minted_date}
                        {/* <ListCard
                          item={owner}
                          className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        /> */}
                      </AnchorLink>
                    </div>

                  </div>
                </TabPanel>
                <TabPanel className="focus:outline-none">
                  <div className="flex flex-col-reverse">
                    {nftData?.bids?.map((bid) => (
                      <FeaturedCard
                        item={bid}
                        key={bid?.id}
                        className="mb-3 first:mb-0"
                      />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel className="focus:outline-none">
                  <div className="flex flex-col-reverse">
                    {/* {nftData?.history?.map((item) => (
                      <FeaturedCard
                        item={item}
                        key={item?.id}
                        className="mb-3 first:mb-0"
                      />
                    ))} */}
                    <ComparisonChart />
                  </div>
                </TabPanel>
              </ParamTab>
            </div>
          </div>
          {/* <NftFooter
            className="hidden md:block"
            currentBid={nftData?.bids[nftData?.bids?.length - 1]}
            auctionTime={Date.now() + 4000000 * 10}
            isAuction={isAuction}
            price={price}
          /> */}
        </div>
        <NftFooter
          currentBid={nftData?.bids[nftData?.bids?.length - 1]}
          auctionTime={Date.now() + 4000000 * 10}
          isAuction={isAuction}
          price={price}
        />
      </div>
    </div>
  );
}

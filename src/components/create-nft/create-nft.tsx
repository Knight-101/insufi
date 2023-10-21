import { useEffect, useState } from 'react';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import { Transition } from '@/components/ui/transition';
import { RadioGroup } from '@/components/ui/radio-group';
import { Listbox } from '@/components/ui/listbox';
import Image from '@/components/ui/image';
import Button from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Input from '@/components/ui/forms/input';
import Textarea from '@/components/ui/forms/textarea';
import Uploader from '@/components/ui/forms/uploader';
import InputLabel from '@/components/ui/input-label';
import ToggleBar from '@/components/ui/toggle-bar';
import { ChevronDown } from '@/components/icons/chevron-down';
import { Ethereum } from '@/components/icons/ethereum';
import { Flow } from '@/components/icons/flow';
import { Warning } from '@/components/icons/warning';
import { Unlocked } from '@/components/icons/unlocked';
import Avatar from '@/components/ui/avatar';
//images
import AuthorImage from '@/assets/images/author.jpg';
import NFT1 from '@/assets/images/nft/nft-1.jpg';
import ClaimType from '@/components/create-nft/price-types-props';
import axios from 'axios';
import tokenLogo from "@/assets/images/Token Logo Goes Here.png"
import suiLogo from "@/assets/images/sui-sui-logo.png"
import Loader from '../ui/loader';

const BlockchainOptions = [
  {
    id: 1,
    name: 'SUI',
    value: 'sui',
    icon: <Ethereum />,
  },

];

export default function CreateNFT() {
  let [publish, setPublish] = useState(true);
  let [files, setFiles] = useState([]);
  let [explicit, setExplicit] = useState(false);
  let [unlocked, setUnlocked] = useState(false);
  let [claimType, setClaimType] = useState('self');
  let [formData, setFormData] = useState({});
  let [loader, setLoader] = useState(false)
  let [blockchain, setBlockChain] = useState(BlockchainOptions[0]);

  async function readData() {
    setLoader(true)
    const data = new FormData();
    data.append('file', files[0]);
    try {
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://8e7c-122-172-83-203.ngrok-free.app/underwrite/autocomplete',
        headers: {
          "Content-type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
          // "Access-Control-Allow-Credentials": true,
        },
        data: data,
      };

      const response = await axios.request(config);
      response && setFormData(response.data)
      setLoader(false)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    files.length > 0 && readData()
  }, [files])

  return (
    <>
      {loader ?
        <div className="absolute inset-0 h-full w-full flex items-center justify-center">
          <Loader variant="blink" />
        </div>
        :
        <div className="mx-auto w-full sm:pt-0 lg:px-8 xl:px-10 2xl:px-0">
          <h2 className="mb-6 text-lg font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:mb-10 sm:text-2xl">
            UNDERWRITE NEW POLICY
          </h2>
          <div className="mb-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* File uploader */}
              <div className="mb-8">
                <InputLabel title="Upload file" important />
                <Uploader setFiles={setFiles} />
              </div>

              {/* NFT price type */}

              <InputLabel
                title="CLAIMS & DISBURSAL PROCESSOR"
                subTitle="Choose how you wish to enable claims filling,approval and disbursal for your policy"
              />

              <ClaimType value={claimType} onChange={setClaimType} />
            </div>

            <div className="hidden flex-col lg:flex">
              {/* NFT preview */}
              <InputLabel title="Preview" />
              <div className="relative flex flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:shadow-large dark:bg-light-dark">
                <div className="flex items-center p-4 text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-400">
                  {formData?.["insurer"]?.["logo"] && <Avatar
                    size="sm"
                    width={50}
                    height={50}
                    image={{
                      src: formData?.["insurer"]?.["logo"],
                      height: 10,
                      width: 10
                    }}
                    alt="Insurer"
                    className="border-white bg-gray-300 ltr:mr-3 rtl:ml-3 dark:bg-gray-400"
                  />}
                  Insurer
                </div>
                <div className="relative block w-full pb-full">
                  <Image
                    src={formData?.["insuree"] ? formData?.["insuree"]?.["logo"] : tokenLogo}
                    layout="fill"
                    objectFit="cover"
                    alt="Insuree Image"
                  />
                </div>
                <div className="p-5">
                  <div className="text-sm font-medium text-black dark:text-white">
                    Insuree
                  </div>
                  <div className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    1 $
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <InputLabel title="Premium Amount" important />
            <Input
              min={0}
              type="text"
              placeholder="Enter your premium amount"
              inputClassName="spin-button-hidden"
              value={formData?.["policy_premium"]}
            />
          </div>

          {/* Name */}
          <div className="mb-8">
            <InputLabel title="Policy Expiry" important />
            <Input type="text" placeholder="Enter your policy expiry date" value={formData?.["policy_expiry"]} />
          </div>

          {/* External link */}
          <div className="mb-8">
            <InputLabel
              title="Coverage Amount"
              subTitle="Mention the maximum coverage amount of this policy (mentioned at the time of sales) along with maximum amount per claim, maximum amount for copay and so on."
            />
            <Input value={formData?.["coverage_amt"]} type="text" placeholder="" />
          </div>

          {/* Description */}
          <div className="mb-8">
            <InputLabel
              title="Coverage Details"
              subTitle="Itemized details on coverage specifics with payment limit per billable item, disbursal conditions, payout schedules, dispute resolution and jurisdiction information."
            />
            <Textarea value={formData?.["coverage_details"]} placeholder="Provide a detailed description of coverage" />
          </div>

          {/* Unlockable content */}
          <div className="mb-3">
            <ToggleBar
              title="RISK MITIGATION"
              subTitle="Enforce recommended best practices for portfolio risk mitigation such as allowing people to create third-party price oracles for your token."
              icon={<Unlocked />}
              checked={unlocked}
              onChange={() => setUnlocked(!unlocked)}
            >
              {unlocked && (
                <Textarea placeholder="Enter content" />
              )}
            </ToggleBar>
          </div>

          {/* Explicit content */}
          <div className="mb-8">
            <ToggleBar
              title="INTEGRATE DEEPBBOOK LIQUIDITY POOLS"
              subTitle="Allow price discovery using SUI's native orderbook"
              icon={<Warning />}
              checked={explicit}
              onChange={() => setExplicit(!explicit)}
            />
          </div>

          {/* Supply */}
          <div className="mb-8">
            <InputLabel
              title="Supply"
              subTitle="The total number of tokens to be minted. Recommended: Keep number of tokens same as coverage amount in US$"
            />
            <Input type="number" placeholder="1" disabled />
          </div>
          <div className="mb-8">
            <InputLabel
              title="UNDERWRITER COMMISSION"
              subTitle="The total commision in % on the policy premium amount."
            />
            <Input type="number" placeholder="1" disabled />
          </div>

          {/* Blockchain */}
          <div className="mb-8">
            <InputLabel title="Blockchain" />
            <div className="relative">
              <Listbox value={blockchain} onChange={setBlockChain}>
                <Listbox.Button className="text-case-inherit letter-space-inherit flex h-10 w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-shadow duration-200 hover:border-gray-900 hover:ring-1 hover:ring-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:ring-gray-600 sm:h-12 sm:px-5">
                  <div className="flex items-center">
                    <span className="ltr:mr-2 rtl:ml-2">
                      <Image
                        src={suiLogo}
                        width={27}
                        height={27}
                        objectFit="cover"
                        alt="Insuree Image"
                      /></span>
                    {blockchain.name}
                  </div>
                  {/* <ChevronDown /> */}
                </Listbox.Button>
                {/* <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute left-0 z-10 mt-1 grid w-full origin-top-right gap-0.5 rounded-lg border border-gray-200 bg-white p-1 shadow-large outline-none dark:border-gray-700 dark:bg-gray-800 xs:p-2">
                  {BlockchainOptions.map((option) => (
                    <Listbox.Option key={option.id} value={option}>
                      {({ selected }) => (
                        <div
                          className={`flex cursor-pointer items-center rounded-md px-3 py-2 text-sm text-gray-900 transition dark:text-gray-100  ${selected
                            ? 'bg-gray-200/70 font-medium dark:bg-gray-600/60'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700/70'
                            }`}
                        >
                          <span className="ltr:mr-2 rtl:ml-2">
                            {option.icon}
                          </span>
                          {option.name}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition> */}
              </Listbox>
            </div>
          </div>

          <Button shape="rounded">UNDERWRITE NOW</Button>
        </div >
      }
    </>
  );
}

// {
//   "claim_processor": "holder_votes",
//     "coverage_amt": "The coverage amount for this policy is USD 1,000,000.",
//       "coverage_details": "The coverage details include itemized details on coverage specifics, payment limit per billable item, disbursal conditions, payout schedules, dispute resolution, and jurisdiction information.",
//         "insuree": {
//     "logo": "https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png",
//       "name": "Allianz SE",
//         "site": "https://about.google.com"
//   },
//   "insurer": {
//     "logo": "https://i.ibb.co/hgr21ZC/ALV-DE-D.png",
//       "name": "The insuree in this policy is not mentioned in the provided context.",
//         "site": "https://www.allianz.com/en.html"
//   },
//   "policy_doc_url": "https://www.allianz.com/policies/meta12345.pdf",
//     "policy_expiry": "October 19, 2024",
//       "policy_premium": "USD 100,000"
// }
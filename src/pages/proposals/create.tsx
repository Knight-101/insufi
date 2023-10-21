import type { NextPageWithLayout } from '@/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import routes from '@/config/routes';
import Button from '@/components/ui/button';
import Image from '@/components/ui/image';
import { ExportIcon } from '@/components/icons/export-icon';
import { Close as CloseIcon } from '@/components/icons/close';
import Input from '@/components/ui/forms/input';
import Textarea from '@/components/ui/forms/textarea';
import Listbox, { ListboxOption } from '@/components/ui/list-box';
// static data
import votePool from '@/assets/images/vote-pool.svg';
import RootLayout from '@/layouts/_root-layout';
import { Switch } from '@headlessui/react';
import ToggleBar from '@/components/ui/toggle-bar';
import { Warning } from '@/components/icons/warning';

const actionOptions = [
  {
    name: 'Oracle',
    value: 'oracle',
  },
  {
    name: 'Bid for claim processing',
    value: 'bid',
  },
  {
    name: 'Risk mitigation strategy',
    value: 'risk',
  },
];

const chartOptions = [
  {
    name: 'Line chart',
    value: 'line',
  },
  {
    name: 'Bar chart',
    value: 'bar',
  },
];

const reserveOptions = [
  {
    name: 'Renounce Ownership',
    value: 'renounceOwnership',
  },
  {
    name: 'Set Rate Mantissa',
    value: 'setRateMantissa',
  },
  {
    name: 'Transfer Ownership',
    value: 'transferOwnership',
  },
  {
    name: 'Withdraw Reverse',
    value: 'withdrawReverse',
  },
];

const claims = [
  {
    name: 'Firebase RealtimeDB experienced an unexpected downtime lasting for six hours on May 12, 2023',
    value: 'firebase',
  },
  {
    name: 'BigQuery Service Level Agreement (SLA) for Bing API was violated on March 23, 2023',
    value: 'bigquery',
  },
  {
    name: 'Africa Availability Zone was down for 8 hours on September 21, 2023',
    value: 'africa',
  },
];

const cripticTokenOptions = [
  {
    name: 'Google FY24 FB BS',
    value: 'google',
  },
  // {
  //   name: 'Delegated',
  //   value: 'delegated',
  // },
  // {
  //   name: 'Mint',
  //   value: 'mint',
  // },
  // {
  //   name: 'Set Minter',
  //   value: 'setMinter',
  // },
  // {
  //   name: 'Transfer',
  //   value: 'transfer',
  // },
  // {
  //   name: 'Transfer From',
  //   value: 'transferFrom',
  // },
];

function CripticTokenAction({
  selectedOption,
  onChange,
}: {
  selectedOption: ListboxOption;
  onChange: React.Dispatch<React.SetStateAction<ListboxOption>>;
}) {
  return (
    <>
      <Listbox
        className="w-full sm:w-80"
        options={cripticTokenOptions}
        selectedOption={selectedOption}
        onChange={onChange}
      />
      {selectedOption.value === 'approve' && (
        <>
          <Input
            label="Spender address"
            useUppercaseLabel={false}
            placeholder="Enter spender address"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
          <Input
            label="Raw amount unit256"
            useUppercaseLabel={false}
            placeholder="Enter rawAmount in unit256"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
        </>
      )}
      {selectedOption.value === 'delegated' && (
        <Input
          label="Delegated address"
          useUppercaseLabel={false}
          placeholder="Enter delegated address"
          className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
        />
      )}
      {selectedOption.value === 'mint' && (
        <>
          <Input
            label="Dst address"
            useUppercaseLabel={false}
            placeholder="Enter dst address"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
          <Input
            label="Raw amount unit256"
            useUppercaseLabel={false}
            placeholder="Enter rawAmount in unit256"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
        </>
      )}
      {selectedOption.value === 'setMinter' && (
        <Input
          label="Minter address"
          useUppercaseLabel={false}
          placeholder="Enter minter address"
          className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
        />
      )}
      {selectedOption.value === 'transfer' && (
        <>
          <Input
            label="Dst address"
            useUppercaseLabel={false}
            placeholder="Enter dst address"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
          <Input
            label="Raw amount unit256"
            useUppercaseLabel={false}
            placeholder="Enter rawAmount in unit256"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
        </>
      )}
      {selectedOption.value === 'transferFrom' && (
        <>
          <Input
            label="Src address"
            useUppercaseLabel={false}
            placeholder="Enter src address"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
          <Input
            label="Dst address"
            useUppercaseLabel={false}
            placeholder="Enter dst address"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
          <Input
            label="Raw amount unit256"
            useUppercaseLabel={false}
            placeholder="Enter rawAmount in unit256"
            className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12"
          />
        </>
      )}
    </>
  );
}

function ActionFields({ form, setForm }) {
  let [actionType, setActionType] = useState(actionOptions[0]);
  let [reserveAction, setReserveAction] = useState(reserveOptions[0]);
  let [chart, setChart] = useState(
    chartOptions[0]
  );
  let [cripticTokenAction, setCripticTokenAction] = useState(
    cripticTokenOptions[0]
  );
  let [claim, setClaim] = useState(
    claims[0]
  );
  useEffect(() => {
    chart && setForm((prev) => {
      return ({
        ...prev,
        "choose_visualization": chart?.value
      })
    })
  }, [chart])


  return (
    <div className="">
      <div className="group mb-4 rounded-md bg-gray-100/90 p-5 pt-3 dark:bg-dark/60 xs:p-6 xs:pb-8">
        <div className="-mr-2 mb-3 flex items-center justify-between">
          <h3 className="text-base font-medium dark:text-gray-100">
            Choose Proposal
          </h3>
          {/* <Button
            type="button"
            size="mini"
            shape="circle"
            variant="transparent"
            className="opacity-0 group-hover:opacity-100 dark:text-gray-300"
          >
            <CloseIcon className="h-auto w-[11px] xs:w-3" />
          </Button> */}
        </div>
        <>

          <Listbox
            className="w-full sm:w-80"
            options={actionOptions}
            selectedOption={actionType}
            onChange={setActionType}
          />
          {actionType.value === 'bid' && (
            <div className="mt-4 ltr:xs:ml-6 rtl:xs:mr-6 ltr:sm:ml-12 rtl:sm:mr-12">
              <Listbox
                className="w-full sm:w-80"
                options={claims}
                inputH={"sm:h-20"}
                selectedOption={claim}
                onChange={setClaim}
              />
            </div>
          )}
          <Listbox
            className="w-full sm:w-80 mt-4"
            options={cripticTokenOptions}
            selectedOption={cripticTokenAction}
            onChange={setCripticTokenAction}
          />
          {/* oracle */}
          {actionType.value === 'oracle' && (
            <>
              <div className="mb-6 mt-4 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Enter contract address
                </h3>
                {/* <p className="mb-5 leading-[1.8] dark:text-gray-300">
            Your title introduces your proposal to the voters. Make sure it is
            clear and to the point.
          </p> */}
                <Input onChange={(e) => setForm((prev) => {
                  return ({
                    ...prev,
                    "oracle_address": e?.target?.value
                  })
                })} placeholder="" required />
              </div>
              <div className="mb-6 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Set refresh frequency
                </h3>
                {/* <p className="mb-5 leading-[1.8] dark:text-gray-300">
            Your title introduces your proposal to the voters. Make sure it is
            clear and to the point.
          </p> */}
                <Input type='number' onChange={(e) => setForm((prev) => {
                  return ({
                    ...prev,
                    "refresh_frequency": e?.target?.value
                  })
                })} value={form?.["refresh_frequency"]} placeholder="" required />
              </div>
              <div className="mb-6 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Select chart type
                </h3>
                <Listbox
                  className="w-full sm:w-80 mt-4"
                  options={chartOptions}
                  selectedOption={chart}
                  onChange={setChart}
                />
              </div>
            </>
          )}
          {/* Risk */}
          {actionType.value === 'risk' && (
            <>
              <div className="mb-6 mt-4 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Risk Amount
                </h3>
                <p className="mb-5 leading-[1.8] dark:text-gray-300">
                  Amount in $ terms what will be the amount risk managed
                </p>
                <Input placeholder="" />
              </div>
              <div className="mb-6 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Lambda Function
                </h3>
                <p className="mb-5 leading-[1.8] dark:text-gray-300">
                  The code for the risk modelling and post-mitigation risk calculation
                </p>
                <Input placeholder="" />
              </div>
              <div className="mb-6 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Processing Fee
                </h3>
                <p className="mb-5 leading-[1.8] dark:text-gray-300">
                  Fee in %age terms what will your charges be for managing this risk
                </p>
                <Input placeholder="" />
              </div>
              <div className="mb-6 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Monitoring Oracle
                </h3>
                <p className="mb-5 leading-[1.8] dark:text-gray-300">
                  Pub key of oracle of outstanding risk valu
                </p>
                <Input placeholder="" />
              </div>
              <div className="mb-6 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Transparency
                </h3>
                <p className="mb-5 leading-[1.8] dark:text-gray-300">
                  IPFS of snapshots of runtime of mitigation strategies
                </p>
                <Input placeholder="" />
              </div>

            </>
          )}
          {actionType.value === 'bid' && (
            <>
              <div className="mb-6 mt-4 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Processing Fee
                </h3>
                <p className="mb-5 leading-[1.8] dark:text-gray-300">
                  Fee in %age terms what will your charges be for processing this claim
                </p>
                <Input placeholder="" />
              </div>
              <div className="mb-6 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
                <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
                  Settlement Breakdown
                </h3>
                <p className="mb-5 leading-[1.8] dark:text-gray-300">
                  attach a detailed breakdown of the total itemized amount of settlement you will be paying out for this claim
                </p>
                <Input placeholder="" />
              </div>
              <div className="mb-8">
                <ToggleBar
                  title="PROTOCOL LIABILITY"
                  subTitle="Waiver of protocol liability in case incorrect settlement leads to a possible lawsuit."
                  icon={<Warning />}
                />
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
}

const CreateProposalPage: NextPageWithLayout = () => {
  const router = useRouter();
  let [actionType, setActionType] = useState(actionOptions[0]);
  let [formData, setFormdata] = useState({
    "oracle_address": "",
    "refresh_frequency": 100,
    "choose_visualization": "",
    "insuree": {
      "name": "Alphabet Inc.",
      "logo": "https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png",
      "site": "https://about.google.com"
    },
    "underwriter": {
      "name": "Allianz",
      "logo": "https://i.ibb.co/hgr21ZC/ALV-DE-D.png",
      "site": "https://www.allianz.com/en.html"
    },
    "token": {
      "name": "Alphabet Inc. Cloud SLA FY24",
      "logo": "https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png",
      "symbol": "ALP"
    }
  });

  const createProposal = () => {
    console.log(formData)
    const axios = require('axios');
    let data = JSON.stringify(formData);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://8e7c-122-172-83-203.ngrok-free.app/risk/oracles',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function goToAllProposalPage() {
    setTimeout(() => {
      router.push(routes.proposals);
    }, 800);
  }
  return (
    <>
      {/* <NextSeo
        title="Create Proposal"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      /> */}
      <section className="mx-auto w-full max-w-[1160px] text-sm">
        <header className="mb-10 flex flex-col gap-4 rounded-lg bg-white p-5 py-6 shadow-card dark:bg-light-dark xs:p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4 xs:gap-3 xl:gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-dark">
              <Image alt="Vote Pool" src={votePool} width={32} height={32} />
            </div>
            <div>
              {/* <h2 className="mb-2 text-base font-medium uppercase dark:text-gray-100 xl:text-lg">
                You have 100 votes
              </h2> */}
              <p className="leading-[1.8] text-gray-600 dark:text-gray-400">
                You can create risk oracles to bring community awareness or create proposals for voting on risk mitigation strategy and settlement procedures
                {/* <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/pooltogether/governance-101-fca9ab8b8ba2"
                  className="inline-flex items-center gap-2 text-gray-900 underline transition-opacity duration-200 hover:no-underline hover:opacity-90 dark:text-gray-100"
                >
                  Learn more <ExportIcon className="h-auto w-3" />
                </a> */}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <Button
              shape="rounded"
              fullWidth={true}
              className="uppercase"
              onClick={() => goToAllProposalPage()}
            >
              All Proposal
            </Button>
          </div>
        </header>

        <h2 className="mb-5 text-lg font-medium dark:text-gray-100 sm:mb-6 lg:mb-7 xl:text-xl">
          Create a new proposal
        </h2>
        <div className="mb-6 rounded-lg bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark xs:p-6 xs:pb-8">
          {/* <h3 className="mb-2 text-base font-medium dark:text-gray-100 xl:text-lg">
            Actions
          </h3> */}
          {/* <p className="mb-5 leading-[1.8] dark:text-gray-300">
            Enter the on-chain actions this proposal should take. Actions are
            executed in the order laid out here (ie. Action #1 fires, then
            Action #2, etc.)
          </p> */}
          <ActionFields form={formData} setForm={setFormdata} />
        </div>



        <div className="mt-6">
          <Button
            size="large"
            shape="rounded"
            fullWidth={true}
            className="xs:w-64 md:w-72"
            onClick={createProposal}
          >
            Create Proposal
          </Button>
        </div>
      </section>
    </>
  );
};

CreateProposalPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default CreateProposalPage;

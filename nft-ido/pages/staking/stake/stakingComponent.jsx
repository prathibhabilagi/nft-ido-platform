import { useState } from 'react';
//import { LoaderSVG } from '@/components/svg';

export default function Stake(props) {
 
  //const [stakeAmount, setStakeAmount] = useState('');

  const item = {
    name: 'stake',
    label: 'Available  tokens',
    totalTokens: '0',
    imgSrc: 'images/NFTminting.png',
    alt: 'flash',
    button: 'Stake NFT',
    icon: 'images/NFTminting.png',
    iconalt: 'receive',
    subLabel: '',
  };
//   const setMaxStakeAmount = () => {
//     setStakeAmount(lPBalance.toString());
//   };

  const textboxComponent = () => {
    return (
      <div className="flex justify-center flex-grow">
        <div className="relative w-11/12 rounded-md shadow-sm">
          <input
           // value={}
            // onChange={(e) =>
            //   isAllowance ? setStakeAmount(e.target.value) : undefined
            // }
            type="text"
            name="lp"
            id="lp"
            className="block w-full py-3 border-gray-300  focus:ring-blue-500 focus:border-blue-500 rounded-xl sm:text-sm"
            placeholder="Tokens to stake"
           // disabled={!isAllowance}
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2">
            <label htmlFor="maximum-button" className="sr-only">
              Maximum
            </label>
            <button
             // onClick={isAllowance ? setMaxStakeAmount : undefined}
              id="maximum-button"
              type="button"
              //disabled={!isAllowance}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-zee-lightBlue hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zee-blue"
            >
              Max
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      key={item.name}
      className="flex flex-col px-2 py-4 overflow-hidden rounded-lg shadow-lg bg-light-gray"
    >
      <div className="flex-shrink-0 px-4">
        <div>
          <img
            className="inline-block w-16 mr-2"
            src={item.imgSrc}
            alt={item.alt}
          />
          <div className="block px-4 py-2">
            <p className="inline-flex justify-center text-sm font-bold text-gray-500 md:pr-2 lg:pr-4">
              {item.label}
            </p>
          </div>

          <div className="block px-3 pb-5 ">
            <h1 className="text-2xl font-bold text-black">
           "we have to show NFTs"  {/* {lPBalance.toFormat(4)} ZEE{' '} */}
            </h1>
          </div>

          <hr className="px-0 py-2 text-gray-100"></hr>

          {/* <div
            className={`flex flex-between pl-1 py-3 ${
              !isAllowance ? 'invisible' : ''
            }`}
          >
            {textboxComponent()}
          </div> */}

          <div className="flex py-4 ">
           <span>Stake</span>
            {/* {!isAllowance ? (
              <button
                type="button"
                onClick={() => setAllowance('no')}
                disabled={allowanceProgress}
                className="flex justify-center mx-2 px-2.5 py-3 w-full text-sm font-medium rounded-3xl shadow-sm text-white bg-zee-primary hover:bg-zee-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {allowanceProgress ? (
                  <>
                    <LoaderSVG /> Approving
                  </>
                ) : (
                  `Approve`
                )}
              </button>
            ) : (
              <button
                onClick={() => stakeLP(stakeAmount, false)}
                disabled={isStaking || stakeAmount < 1}
                className={`${
                  isStaking ? 'opacity-50' : ''
                } flex justify-center mx-2 px-2.5 py-3 w-full text-sm font-medium rounded-3xl shadow-sm text-white bg-zee-primary hover:bg-zee-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                {isStaking ? (
                  <>
                    <LoaderSVG />
                    Staking...
                  </>
                ) : (
                  'Stake'
                )}
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

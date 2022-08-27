
  import React, { useState } from 'react';
import StakeComponent from './stake/stakingComponent';
 import UnstakeComponent from './stake/unstakeComponent';
 import ClaimComponent from './stake/claimRewardComponent';

{
  /* Staking UI */
}
export default function StakingCard(props) {
  return (
    <div className="text-center pt-10 pd-10 md:w-4/5 m-auto">
      <div className="mt-18 mb-5">
        <h1 className="text-3xl tracking-normal font-black text-gray-900 sm:text-4xl">
          Stake ZEE <br /> to access the most comprehensive MultiChains
          Ecosystem
        </h1>
        <div className="p-4 m-auto w-full sm:w-2/3">
          <p className="mt-3 text-md text-center text-gray-500 sm:mt-4">
            ZeroSwap Combines the liquidity across chains, reduce friction in
            digital asset conversions, and help startups fund raise through
            ZeeDO
          </p>
        </div>
      </div>
      <div className="mt-4 max-w-lg mx-auto grid gap-5 px-5 py-10 lg:grid-cols-3 lg:max-w-none">
        <StakeComponent {...props} />
         <UnstakeComponent {...props} />
          <ClaimComponent {...props} />  
      </div>
    </div>
  );
}

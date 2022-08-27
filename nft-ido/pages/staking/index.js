
 // import Web3 from 'web3';
// import axios from 'axios';
import React, { useState } from 'react';
//import WalletConnectProvider from "@walletconnect/web3-provider";
import {Contract} from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import erc721abi from "../../artifacts/erc721abi.json"
import  stakingabi from "../../artifacts/stakingabi.json"
import StakeComponent from './stake/stakingComponent';
 import UnstakeComponent from './stake/unstakeComponent';
 import ClaimComponent from './stake/claimRewardComponent';

{
  /* Staking UI */
}
export default function StakingCard(props) {
    const { chainId, account, activate, active, library } = useWeb3React(); 
    const [ approveState, setApproveState ] = useState();

    const NFTCONTRACT = "0xC89668c76473F06D93FA7De59A3Df8930574fA7D";
    const STAKINGCONTRACT = "0xe8DCcaB339512F86d052558C7515cEb10CDf480b"
const passingProps = {
    approveState,

}
// const getApprove = nftcontract.getApproved()
// console.log(" state ", getApprove);

     const nftcontract = new Contract(
        NFTCONTRACT,
        erc721abi,
        library && library.getSigner()
    );
console.log("nftcontract ", nftcontract);

    const stakingcontract = new Contract(
      STAKINGCONTRACT,
      stakingabi,
      library && library.getSigner()
    );

    console.log("stakingcontract  ", stakingcontract);
   
  const  
useEffect = () => {
    setApproveState()
}
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
        <StakeComponent {...passingProps} />
         <UnstakeComponent {...passingProps} />
          <ClaimComponent {...passingProps} />  

</div>
  </div> 

   )}
// import Web3 from 'web3';
// import axios from 'axios';
import React, { useEffect, useState } from "react";
//import WalletConnectProvider from "@walletconnect/web3-provider";
import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import erc721abi from "../../artifacts/erc721abi.json";
import stakingabi from "../../artifacts/stakingabi.json";
import StakeComponent from "./stake/stakingComponent";
import UnstakeComponent from "./stake/unstakeComponent";
import ClaimComponent from "./stake/claimRewardComponent";

export default function StakingCard(props) {
  const { chainId, account, activate, active, library } = useWeb3React();

  const NFTCONTRACT = "0xadF7F3Ee85683Bd34eA0978a20fa9d5425956be6";
  const STAKINGCONTRACT = "0x5d19F3b0f8b8048634238D3F0e76527277C73703";

  const nftcontract = new Contract(
    NFTCONTRACT,
    erc721abi,
    library && library.getSigner()
  );

  

  const stakingcontract = new Contract(
    STAKINGCONTRACT,
    stakingabi,
    library && library.getSigner()
  );

  return (
    <div className="text-center pt-10 pd-10 md:w-4/5 m-auto">
      <div className="mt-18 mb-5">
        <h1 className="text-3xl tracking-normal font-black text-white sm:text-4xl">
          NFT STAKING
        </h1>
      </div>
      <div className="mx-auto w-full">
        <StakeComponent
          nftcontract={nftcontract}
          stakingcontract={stakingcontract}
        />
      </div>
    </div>
  );
}

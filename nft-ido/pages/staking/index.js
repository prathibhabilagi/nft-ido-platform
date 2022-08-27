// import Web3 from 'web3';
// import axios from 'axios';
import React from 'react';
//import WalletConnectProvider from "@walletconnect/web3-provider";
import {Contract} from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import erc721abi from "../../artifacts/erc721abi.json"
import  stakingabi from "../../artifacts/stakingabi.json"
export default function staking() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { chainId, account, activate, active, library } = useWeb3React(); 
    const NFTCONTRACT = "0xaDb5a18F0d6823b1C473a73e92938545583608F4";
    const STAKINGCONTRACT = "0xe8DCcaB339512F86d052558C7515cEb10CDf480b"

     const nftcontract = new Contract(
        NFTCONTRACT,
        erc721abi,
        library && library.getSigner()
    );
console.log("nftcontract", nftcontract);

    const stakingcontract = new Contract(
      STAKINGCONTRACT,
      stakingabi,
      library && library.getSigner()
    );

    console.log("stakingcontract", stakingcontract);
   
    return (
      <div>
       <p>HELLLOOOOO</p>
      </div>
    )
  }
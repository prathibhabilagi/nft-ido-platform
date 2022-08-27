// import Web3 from 'web3';
// import axios from 'axios';
import React from 'react';
//import WalletConnectProvider from "@walletconnect/web3-provider";
import {Contract} from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
//import { stakeContract } from "../../common/utils";
export default function staking() {
   

    const { chainId, account, activate, active, library } = useWeb3React(); 
    const NFTCONTRACT = "0xaDb5a18F0d6823b1C473a73e92938545583608F4";
    const STAKINGCONTRACT = "0xe8DCcaB339512F86d052558C7515cEb10CDf480b"
   
    return (
      <div>
       <p>HELLLOOOOO</p>
      </div>
    )
  }
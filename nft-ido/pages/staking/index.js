// import Web3 from 'web3';
// import axios from 'axios';
import React, { useEffect, useState } from "react";
//import WalletConnectProvider from "@walletconnect/web3-provider";
import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import erc721abi from "../../artifacts/erc721abi.json";
import stakingabi from "../../artifacts/stakingabi.json";
import { getNfts, getMetadata, getAlchemyNfts } from "../api/fetchnft";
import Wallet from "../../components/Wallet";

export default function staking() {
  const { chainId, account, activate, active, library } = useWeb3React();
  const NFTCONTRACT = "0xaDb5a18F0d6823b1C473a73e92938545583608F4";
  const STAKINGCONTRACT = "0xe8DCcaB339512F86d052558C7515cEb10CDf480b";

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

  const [userNft, setUserNft] = useState();

  const FetchAcoountNFT = async () => {
    const nftData = await getAlchemyNfts(account);
    setUserNft(nftData);
  };

  useEffect(() => {
    account && FetchAcoountNFT();
  }, [account]);

  return (
    <div>
      <Wallet />
      <p>HELLLOOOOO</p>
    </div>
  );
}

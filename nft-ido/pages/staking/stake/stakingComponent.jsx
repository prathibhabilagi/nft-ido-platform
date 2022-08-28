import React, { useEffect, useState } from "react";
import { getAlchemyNfts, getMetadata } from "../../api/fetchnft";
import { useWeb3React } from "@web3-react/core";
import web3 from "web3";
import { Contract } from "@ethersproject/contracts";
import erc721abi from "../../../artifacts/erc721abi.json";
import stakingabi from "../../../artifacts/stakingabi.json";

export default function StakeComponent() {
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

  const [userNft, setUserNft] = useState();
  const [stakaeNft, setStakeNft] = useState();
  const [nfttokenID, setNfttokenID] = useState();
  const [metaData, setMetaData] = useState([]);
  const [checkApprove, setApprove] = useState()

  const FetchAcoountNFT = async () => {
    const nftData = await getAlchemyNfts(account);
    const stakeData = await getAlchemyNfts(STAKINGCONTRACT);
    setStakeNft(stakeData)
    setUserNft(nftData);

    FetchMetaData(nftData);
    stakeData?.totalCount > 0 && FetchMetaData(stakeData)
  };

  const FetchMetaData = async (data) => {
    const arr = [];
    data?.ownedNfts.map(async(item) => {
      arr.push(item.id.tokenId);
      const nft = await nftcontract.getApproved(item.id.tokenId);
      setApprove(nft)
      setNfttokenID(arr);
    });
    FetchNFTMetaData(arr);
  };



  const StakeNFT = async (id) => {
    const transactionParameters = {
      to: STAKINGCONTRACT,
      from: account,
      data: stakingcontract.interface.encodeFunctionData("stake", [
        web3.utils.hexToNumber(id)
      ]),
    };
    //sign the transaction via Metamask
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  };

  const UnstakeNFT = async (id) => {
    const transactionParameters = {
      to: STAKINGCONTRACT,
      from: account,
      data: stakingcontract.interface.encodeFunctionData("unstake", [
        web3.utils.hexToNumber(id)
      ]),
    };
    //sign the transaction via Metamask
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  };

  const ApproveNFT = async (id) => {
    const transactionParameters = {
      to: NFTCONTRACT,
      from: account,
      value: parseInt(web3.utils.toWei(String(0), "ether")).toString(
        16
      ),
      data: nftcontract.interface.encodeFunctionData("approve", [
        STAKINGCONTRACT, 
        web3.utils.hexToNumber(id)
      ]),
    };
    //sign the transaction via Metamask
    try {
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      });
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
          txHash,
      };
    } catch (error) {
      return {
        success: false,
        status: "😥 Something went wrong: " + error.message,
      };
    }
  };

  const FetchNFTMetaData = async (nfttokenID) => {
    const tokenid = nfttokenID?.map(async (item) => {
      const nftData = await getMetadata(item);
      return nftData;
    });
    const allPromises = await Promise.all(tokenid);
    setMetaData(allPromises);
  };

  useEffect(() => {
    account && FetchAcoountNFT();
  }, [account]);

  return (
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <ul
          role="list"
          className="flex justify-center"
        >
          {
            userNft?.totalCount == 0 ?
            metaData?.map((item, index) => (
              <li
                key={index}
                className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left m-2"
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={item.metadata.image}
                    alt=""
                  />
                    <div className="font-medium text-lg leading-6 flex flex-col justify-center items-center mt-6">
                      <h3 className="text-white">{item.metadata.name}</h3>
                      <p className="text-indigo-400 pt-3">
                        {item.metadata.description}
                      </p>
                    <div className="mt-6">
                       <button onClick={() => UnstakeNFT(item?.id?.tokenId)} className="bg-sky-100 py-2 px-6 text-gray-600 rounded-3xl">Unstake</button>
                      
                    </div>
                  </div>
                </div>
              </li>
            ))
             :
         
          metaData?.map((item, index) => (
            <li
              key={index}
              className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left m-2"
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={item.metadata.image}
                  alt=""
                />
                  <div className="font-medium text-lg leading-6 flex flex-col justify-center items-center mt-6">
                    <h3 className="text-white">{item.metadata.name}</h3>
                    <p className="text-indigo-400 pt-3">
                      {item.metadata.description}
                    </p>
                  <div className="mt-6">
                    {checkApprove == "0x0000000000000000000000000000000000000000" ?
                     <button onClick={() => ApproveNFT(item?.id?.tokenId)} className="bg-sky-100 py-2 px-6 text-gray-600 rounded-3xl">Approve</button> :
                     <button onClick={() => StakeNFT(item?.id?.tokenId)} className="bg-sky-100 py-2 px-6 text-gray-600 rounded-3xl">Stake</button>
                    }
                  </div>
                </div>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}

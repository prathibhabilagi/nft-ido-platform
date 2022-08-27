import React, { useEffect, useState } from "react";
import { getAlchemyNfts, getMetadata } from "../../api/fetchnft";
import { useWeb3React } from "@web3-react/core";
import web3 from "web3";

export default function StakeComponent(nftcontract, stakingcontract) {
  const { chainId, account, activate, active, library } = useWeb3React();

  const [userNft, setUserNft] = useState();
  const [nfttokenID, setNfttokenID] = useState();
  const [metaData, setMetaData] = useState([]);

  const FetchAcoountNFT = async () => {
    const nftData = await getAlchemyNfts(account);
    setUserNft(nftData);
    FetchMetaData(nftData);
  };

  const FetchMetaData = (data) => {
    const arr = [];
    data?.ownedNfts.map((item) => {
      arr.push(item.id.tokenId);
      setNfttokenID(arr);
    });
    FetchNFTMetaData(arr);
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
          {metaData?.map((item, index) => (
            <li
              key={index}
              className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left m-2"
            >
              {console.log(index)}
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
                    <button className="bg-sky-100 py-2 px-6 text-gray-600 rounded-3xl">Approve</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

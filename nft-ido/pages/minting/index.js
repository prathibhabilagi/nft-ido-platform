import Wallet from "../../components/Wallet";
import React, { useState } from "react";
import { pinJSONToIPFS } from "../../utils/pinata";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";
// import Nft from "../artifacts/Nft.json";
import erc721abi from '../../artifacts/erc721abi.json'
import web3 from "web3";
import { config } from "../../dapp.config";
// import { useMoralisWeb3Api } from "react-moralis";

export default function Mint() {
  const { chainId, account, activate, active, library } = useWeb3React();
  // const Contract_Address = "0x28261f1e1D516eEDF1bB2606f0a2bD74410AD53C";
  const Contract_Address = "0xadF7F3Ee85683Bd34eA0978a20fa9d5425956be6";
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  // const Web3Api = useMoralisWeb3Api();

  const networkName = {
    1: 'etheruem',
    4: "rinkeby",
    56: "bsc",
    137: "polygon"
  }

  const nftContract = new Contract(
    Contract_Address,
    erc721abi,
    library && library.getSigner()
  );

  let base64String = "";

  function imageUploaded(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function () {
      const value = reader?.result;
      if (value) {
        base64String = value.replace("data:", "").replace(/^.+,/, "");
        setUrl(`data:image/png;base64,${base64String}`);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const mintNFT = async () => {

    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;
    //make pinata call
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
        success: false,
        status: "😢 Something went wrong while uploading your tokenURI.",
      };
    }
    const tokenURI = pinataResponse.pinataUrl;
    console.log("tokenURI", tokenURI);
    const to = "0x0802e7C2073F3cfFdeD2e7A11Bb2417F46476B1d";

    const transactionParameters = {
      to: Contract_Address,
      from: account,
      value: parseInt(web3.utils.toWei(String(config.price), "ether")).toString(
        16
      ),
      data: nftContract.interface.encodeFunctionData("mint", [
        tokenURI,
        to,
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

  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <Wallet />
      </div>
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-10">
        <div className="text-center">
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            NFT Minting
          </p>
        </div>
      </div>

      <div className="mt-16 lg:mt-20">
        <div className="relative z-0">
          <div className="absolute inset-0 bg-gray-900" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
            <div className="">
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Mint NFT
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg px-6 pt-12 pb-10">
                    <div className="">
                      <div className="flex flex-row justify-around">
                        <div className="w-80 h-96">
                          <div className="w-full h-full p-1 md:p-2">
                            {url ? (
                              <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full mt-1 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                src={`${url}`}
                              />
                            ) : (
                              <div className="flex items-center w-full h-full border-2 border-gray-300 border-dashed rounded-md">
                                <svg
                                  className="mx-auto w-24 h-24 text-gray-400"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="mb-6">
                            <label
                              htmlFor="company-website"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Name
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                type="text"
                                name="company-website"
                                id="company-website"
                                className="block w-full p-1 sm:text-sm border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter NFT name"
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="mb-6">
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Description
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Enter NFT description"
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Upload NFT
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <div className="flex text-sm text-gray-600">
                                  <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                  >
                                    <span>Upload a file</span>
                                    <input
                                      id="file-upload"
                                      name="file-upload"
                                      type="file"
                                      className="sr-only"
                                      onChange={imageUploaded}
                                    />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={mintNFT}
                      >
                        Mint NFT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// https://api.etherscan.io/api?module=account&action=addresstokenbalance&address=0xB036713179E0607F96C4a756927A8822Fd19fDFF&page=1&offset=100&apikey=IY97A2ZVWVI44YAWA35XVDWQN8CJAVAEA6
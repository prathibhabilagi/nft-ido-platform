import {BigNumber} from "bignumber.js";
import {InjectedConnector} from "@web3-react/injected-connector";
import {isAddress} from "@ethersproject/address";
import {Contract} from "@ethersproject/contracts";
import StakingABI from "../abi/staking/staking.abi.json";
import MigrationABI from "../abi/dwz-zee-migration.abi.json";
import {Web3Provider} from "@ethersproject/providers";
import Web3 from 'web3';
import ERC20ABI from "../abi/ERC20.abi.json";

// export const DWZ_TOKEN_ADDR = "0x53938bac1fe75938f420f7e3086aa115598782df";
export const DWZ_TOKEN_ADDR = "0x7dee45dff03ec7137979586ca20a2f4917bac9fa";

export const MIGRATION_ADDRESS = "0x0Ef0F3aA9deCe3a95d9aF8E67a6E6Fa88D30AB48";
export const EthRpcURL = 'https://mainnet.infura.io/v3/4c7ab887e3134d07a8d8459db17547ce';


export const getLibrary = (provider) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
}

export const Networks = {
    MainNet: 1,
    Ropsten: 3,
    Rinkeby: 4,
    Goerli: 5,
    Kovan: 42,
    bsc: 56,
    bscTestnet: 97,
    polygon: 137
};

export const formatToken = (tokenBNValue, tokenData) => {
    if (tokenBNValue) {
        const tokenBN = new BigNumber(tokenBNValue.toString());
        const decimalsBN = new BigNumber(10 ** tokenData.decimals);
        return tokenBN.dividedBy(decimalsBN);
    } else {
        return new BigNumber(0);
    }
};

export const numAsHex = (value, tokenData) => {
    let clippedFormat = new RegExp('^-?\\d+(?:\.\\d{0,' + (parseInt(tokenData.decimals, 10) || -1) + '})?');
    const tokenValue = value.toString().match(clippedFormat)[0];
    const bignumberFormatAmountToken = new BigNumber(
        tokenValue
    );
    const ten = new BigNumber(10);
    const multiplierAllowanceTokenB = ten.pow(tokenData.decimals);

    const amountOutToken = bignumberFormatAmountToken.times(
        multiplierAllowanceTokenB
    );
    return '0x' + amountOutToken.toString(16);
};

export const shorter = (str) =>
    str?.length > 8 ? str.slice(0, 6) + "..." + str.slice(-4) : str;

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        Networks.MainNet, // Mainet
        Networks.Ropsten, // Ropsten
        Networks.Rinkeby, // Rinkeby
        Networks.Goerli, // Goerli
        Networks.Kovan, // Kovan
        Networks.bsc, // bsc
        Networks.polygon, // Polygon
        Networks.bscTestnet
    ],
});

export const fetcher = (library, abi) => (...args) => {
    const [arg1, arg2, ...params] = args;
    // it's a contract
    if (isAddress(arg1)) {
        const address = arg1;
        const method = arg2;
        const contract = new Contract(address, abi, library.getSigner());
        return contract[method](...params);
    }
    // it's a eth call
    const method = arg1;
    return library[method](arg2, ...params);
};

export const stakeContract = (library, stakingAddress) => {
    return new Contract(
        stakingAddress,
        StakingABI,
        library.getSigner()
    );
}

export const migrationContract = (library, stakingAddress) => {
    return new Contract(
        stakingAddress,
        MigrationABI,
        library.getSigner()
    );
}

const EthWeb3 = new Web3(EthRpcURL);
export const getUserDWZBalance = async (account) => {
    const contract = new EthWeb3.eth.Contract(ERC20ABI, DWZ_TOKEN_ADDR);
    const tokenBalance = await contract.methods.balanceOf(account).call();
    const balanceInWei = new BigNumber(tokenBalance).div(10**18);
    
    return balanceInWei.toString();
}
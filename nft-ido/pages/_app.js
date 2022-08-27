import '../styles/globals.css'
import { Web3ReactProvider } from '@web3-react/core'
import {Web3Provider} from "@ethersproject/providers";
import Wallet from '../components/Wallet'

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
       <Wallet />
        <Component {...pageProps} />
      </Web3ReactProvider>
  )
}

export default MyApp
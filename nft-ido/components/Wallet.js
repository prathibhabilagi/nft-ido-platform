import { useWeb3React } from "@web3-react/core"
import { useEffect } from "react";
import { injected } from "./connectors"

export default function Wallet() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();

    const connect = async () => {
        try {
            await activate(injected)
            localStorage.setItem('isWalletConnected', true)
        } catch (err) {
            console.log(err)
        }
    }

    const disconnect = () => {
        try {
            deactivate()
            localStorage.setItem('isWalletConnected', true)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
          if (localStorage?.getItem('isWalletConnected') === 'true') {
            try {
              await activate(injected)
              localStorage.setItem('isWalletConnected', true)
            } catch (ex) {
              console.log(ex)
            }
          }
        }
        connectWalletOnPageLoad()
      }, [])
      
      useEffect(()=>{
        if(active) {
        }
      },[library])

    return (
        <div className="absolute right-10">
            {!active && <button onClick={connect} className="py-2 mt-8 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>}
            {active && <span className="text-white">Connected with <b>{(account)}</b></span>}
            <div>
            {active && <button onClick={disconnect} className="py-2 my-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-80 float-right">Disconnect</button>}
            </div>

        </div>
    )
}
import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 56, 97, 42, 80001],
})
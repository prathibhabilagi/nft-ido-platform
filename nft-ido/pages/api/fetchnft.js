
const alchemyApiid = "plwplyMH74WLHr4VSM19T0iq1WENharo"
const alchemycontractAddress = "0xC89668c76473F06D93FA7De59A3Df8930574fA7D";

export const getAlchemyNfts = async (account) => {
    console.log("==================", account);
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
    const response = await fetch(`https://polygon-mumbai.g.alchemy.com/nft/v2/${alchemyApiid}/getNFTs?owner=${account}&contractAddresses[]=${alchemycontractAddress}&withMetadata=false`, options)
    const data = await response.json();
    return data
    };

  const contractAddress = "0xC89668c76473F06D93FA7De59A3Df8930574fA7D";
  const apikey = "ckey_d5713b3178474a4ab7142522c44";

  export const getNfts = async () => {
    const response = await fetch(
      `https://api.covalenthq.com/v1/80001/tokens/${contractAddress}/nft_token_ids/?quote-currency=USD&format=JSON&key=${apikey}`
    );
    const data = await response.json();
    console.log("data", data);
    // setItems(data.data.items)
  };

  export const getMetadata = async (tokenID) => {
    const response = await fetch(
      `https://api.covalenthq.com/v1/80001/tokens/${contractAddress}/nft_metadata/${tokenID}/?quote-currency=USD&format=JSON&key=ckey_d5713b3178474a4ab7142522c44`
    );
    const data = await response.json();
    console.log("data", data);
    // setItems(data.data.items)
  };




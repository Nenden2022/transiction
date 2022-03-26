Moralis = require("moralis/node");

const ADDRESSES = [
  "0x13b6f48b7d831f875771eecac073a28eda4b137c",
  "0x5d1477ae8ce136463d8a0a0ac5223d7c37906d3f",
  "0x1ba90d875a70875476258697ae46c3561c1bf3c5",
  "0x2dd534dd4949ccdbb301d29b15d8b86111ee4ae1",
  "0x14aa416a8694c2abd6b9a614c039d8ef463d3ab0",
  "0x9f4c5733784dbf867eba62068e5ab06c7d3a7843",
  "0x3ecde0397a0f9c35b1dca39d7d2396a28001adfb",
  "0x9441e690788b01b660e8d00eb09f007fe8c84b71",
  "0x133a933c9c1ac2295c37f5bd13ccfde110df36e6",
  "0x478d21a39757343d526ad56ecd82bc7e6bf2a876",
  "0x66c22847026859da04ef475113a58576d1347845",
  "0x591be8d5268f2f9d6b62a6604d58f325eb7c84bc",
  "0x245c5901d99c0729811ba3bcdfe4cb440e1c1dfd",
  "0x1e9f5a2a1c38deb432257bde75c77e27ec3628e7",
  "0xb8c1fece2c2928b1e985f59e8546c2f0c13296d4",
  "0x54b174179ae825ed630da40b625bb3c883cd40ae",
  "0xf2d29bbd9508cc58e2d7fe8427bd2bc0ad58e878",
  "0x20c3cc9e8869adc1b7efad187f10969a449653f5",
  "0x22bddf61d288dac8c2da1584f5d78ceeae4d21ee",
  "0x7e8d6380b45d33ee8be40635484bce7c362536b2",
  "0x4ab62d17e2c8f9ca79ad3429da12d495a1055eae",
  "0xbcbe9b878543b9d4098497c67f1e95bc44a0b34c",
  "0x982e09ebd5bf6f4f9cce5d0c84514fb96d91c5f9",
  "0x51107b3b430440ea796e36a0d3c99fbd51bbad41",
  "0x55a9c5180dcafc98d99d3f3e4b248e9156b12ac1",
  "0x53fda6d3ffabc8388b4c24e980f83fcdb1496e51",
];

const CONTRACTS = [
  "0x86c10d10eca1fca9daf87a279abccabe0063f247",
  "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
  "0xbcd7254a1d759efa08ec7c3291b2e85c5dcc12ce",
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "0x1e4ede388cbc9f4b5c79681b7f94d36a11abebc9",
];

const initMoralis = async () => {
  //   Moralis init code
  const serverUrl = "https://crywl6ozluix.usemoralis.com:2053/server";
  const appId = "XKjMTk1OXRy4k6bNCJLPK00zfxrgziuZDbmj3NLx";
  const masterKey = "VXRjFO3sUHeOdKqiL3GpYZ27BqE9vFl6kX1sWXLD";
  const moralisSecret =
    "6QiwHrVwcyuXDrHJ43GqaNZDNgtOwqQJMl4G0ySOu33OyI4tFxZg5n65FLHKuvxT";

  await Moralis.start({ serverUrl, appId, masterKey, moralisSecret });

  //   const web3Provider = await Moralis.enableWeb3({
  //     privateKey: "YOUR-PRIVATE-KEY",
  //   });
  //   console.log(web3Provider);
};

const checkAddress = async (_address) => {
  //   get mainnet transactions for the current user
  //   const transactions = await Moralis.Web3API.account.getTransactions();

  //   get ETH transactions for a given address
  //   with most recent transactions appearing first
  const options = {
    chain: "eth",
    address: _address,
    from_date: "Jan 10 2022",
    to_date: "Feb 28 2022",
    // order: "desc",
    // from_block: "0",
  };
  const transactions = await Moralis.Web3API.account.getTransactions(options);
  const bRelatedString =
    Number(
      transactions.result.some((element) => CONTRACTS[0] == element.to_address)
    ) +
    " " +
    Number(
      transactions.result.some((element) => CONTRACTS[1] == element.to_address)
    ) +
    " " +
    Number(
      transactions.result.some((element) => CONTRACTS[2] == element.to_address)
    ) +
    " " +
    Number(
      transactions.result.some((element) => CONTRACTS[3] == element.to_address)
    ) +
    " " +
    Number(
      transactions.result.some((element) => CONTRACTS[4] == element.to_address)
    );
  console.log(bRelatedString);
};

const main = async () => {
  console.log("Moralis Initializing...");
  await initMoralis();

  console.log("Related addresses: ");
  for (let i = 0; i < ADDRESSES.length; i++) {
    const address = ADDRESSES[i];
    await checkAddress(address);
  }
};

main();

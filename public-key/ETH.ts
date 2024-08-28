import * as bip39 from 'bip39';
import { hdkey } from 'ethereumjs-wallet';
import { toChecksumAddress } from 'ethereumjs-util';
// import toChecksumAddress = require('ethereumjs-util');


// Generate a Mnemonic Phrase
const mnemonic = bip39.generateMnemonic();
console.log('Mnemonic:', mnemonic);

// Convert the Mnemonic to a Seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Derive the Key Pair from Seed using the Derivation Path
for (let i = 0; i < 1; i++) {
  // Define the Ethereum path (e.g., m/44'/60'/0'/0/x)
  const path = `m/44'/60'/0'/0/${i}`;

  // Derive the wallet from the path and seed
  const hdwallet = hdkey.fromMasterSeed(seed);
  const wallet = hdwallet.derivePath(path).getWallet();

  console.log(wallet.getAddress())
  // console.log("Wallet addressGet "+wallet.getAddress())//


  const address = `0x${wallet.getAddress().toString('hex')}`; // for reciving funds

  console.log("Recieving address ", address)

  const checksumAddress = toChecksumAddress(address);

  console.log('Checksum Address:', checksumAddress);


  // Get the Ethereum address
  // const address = `0x${wallet.getAddress().toString('hex')}`;
  // console.log('Address:', address);

  // // Get the checksum address
  // const checksumAddress = toChecksumAddress(address);
  // console.log('Checksum Address:', checksumAddress);

  // // Get the private key
  // const privateKey = wallet.getPrivateKey().toString('hex');
  // console.log('Private Key:', privateKey);

  // Get the public key
  const publicKey = wallet.getPublicKey().toString('hex');
  console.log('Public Key:', publicKey);
}

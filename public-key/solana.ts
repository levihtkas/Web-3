mport nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { derivePath } from "ed25519-hd-key";
import { hdkey } from "ethereumjs-wallet/hdkey";
import { toChecksumAddress } from "ethereumjs-util";

import { Keypair, PublicKey } from "@solana/web3.js";

const mnemonic = generateMnemonic();

// from the mnemonic generated generate a seed
const seed = mnemonicToSeedSync(mnemonic);

for (let i = 0; i < 4; i++) {
  // define the path
  const path = `m/44'/501'/${i}'/0'`;
  // derive the seed from the path and the seed
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  console.log(derivedSeed);
  // derive the secret key from the derived seed
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}

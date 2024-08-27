import * as ed from "@noble/ed25519";

async function main() {
  const privKey = ed.utils.randomPrivateKey();

  const message = new TextEncoder().encode(
    "first message encrytpion using elliptic curves",
  );

  const signature = await ed.signAsync(message, privKey);

  const pubKey = await ed.getPublicKeyAsync(privKey);

  const isValid = await ed.verifyAsync(signature, message, pubKey);
  console.log(isValid);
}
main();

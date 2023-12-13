import { useState } from "react";

import { BlockchainTypes, CrossmintEVMWalletAdapter } from "@crossmint/connect";

export default function EVMConnectButton() {
  const [address, setAddress] = useState<string | undefined>(undefined);

  // const projectId = process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID as string;
  // const collectionId = process.env
  //   .NEXT_PUBLIC_CROSSMINT_COLLECTION_ID as string;
  // const environment = process.env.NEXT_PUBLIC_CROSSMINT_ENVIRONMENT as string;

  async function connectToCrossmint() {
    // Initialize the Crossmint embed.
    console.log("before init");
    const _crossmintEmbed = new CrossmintEVMWalletAdapter({
      chain: BlockchainTypes.ETHEREUM,
      projectId: "8bb2a090-8fdf-4fe6-a477-8264848b5538",
    });
    console.log("after init");
    //projectId: process.env.NEXT_PUBLIC_CROSSMINT_PROJECT_ID as string,

    // Ask the user to sign in and give access to their publicKey
    const address = await _crossmintEmbed.connect();

    // If the user successfully connects to Crossmint, the address will be returned.
    if (address) {
      setAddress(address);
    }
  }

  return (
    <button
      onClick={connectToCrossmint}
      className="px-6 py-2 font-semibold text-black bg-white rounded-md"
    >
      {address ? address.slice(0, 6) + "..." : "Connect"}
    </button>
  );
}

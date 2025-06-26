import { NextResponse, type NextRequest } from "next/server";
import { PinataSDK } from "pinata-web3";

// Initialize Pinata SDK with environment variables
const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT!,
  pinataGateway: process.env.PINATA_GATEWAY!,
});

export async function POST(request: NextRequest) {
  try {
    // Check if environment variables are set
    if (!process.env.PINATA_JWT || !process.env.PINATA_GATEWAY) {
      throw new Error("Pinata configuration missing. Please set PINATA_JWT and PINATA_GATEWAY environment variables.");
    }

    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      throw new Error("No file provided");
    }

    console.log(`Uploading file: ${file.name}, size: ${file.size} bytes`);

    // Upload file to Pinata
    const upload = await pinata.upload.file(file);
    
    // Get the gateway URL
    const gatewayUrl = `https://${process.env.PINATA_GATEWAY}/ipfs/${upload.IpfsHash}`;
    console.log('✅ Successfully uploaded file to Pinata:', gatewayUrl);

    return NextResponse.json({ 
      url: gatewayUrl,
      ipfsHash: upload.IpfsHash 
    }, { status: 200 });
  } catch (e) {
    console.error("❌ Error uploading to Pinata:", e);
    
    // Return more specific error messages
    if (e instanceof Error) {
      if (e.message.includes('Authentication failed')) {
        return NextResponse.json(
          { error: "Pinata authentication failed. Please check your API key and scopes." },
          { status: 403 }
        );
      }
      if (e.message.includes('NO_SCOPES_FOUND')) {
        return NextResponse.json(
          { error: "Pinata API key doesn't have required scopes. Please add 'files:write' scope." },
          { status: 403 }
        );
      }
    }
    
    return NextResponse.json(
      { error: "Failed to upload file to IPFS" },
      { status: 500 }
    );
  }
} 
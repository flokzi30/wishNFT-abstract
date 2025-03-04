import { NextResponse, type NextRequest } from "next/server";
import { PinataSDK } from "pinata-web3";

// Initialize Pinata SDK
const pinata = new PinataSDK({
  pinataJwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0NzZhNTZlMS1mY2ZiLTQzMDMtOWM4OS03YzMxYzNkMDI3NjAiLCJlbWFpbCI6ImJyaWtpbmZvbW9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImVkOTlkMTQyY2QzZDg4NTRkZDE0Iiwic2NvcGVkS2V5U2VjcmV0IjoiMmVkMjc2MTRjNjM4NDY0M2JkNWU2ZmExYjcwZDUxOWI0ZTc5ZjU0MThjOGI2NGE2M2I3NjQ5MWZkYzNmMzJhMSIsImV4cCI6MTc3MjE5ODUwMX0.btLDT3ZAN3i-uEs8YPic97hc4WqMWT9GGsdvTnprV9k',
  pinataGateway: 'peach-objective-pelican-416.mypinata.cloud',
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      throw new Error("No file provided");
    }

    // Upload file to Pinata
    const upload = await pinata.upload.file(file);
    
    // Get the gateway URL
    const gatewayUrl = `https://peach-objective-pelican-416.mypinata.cloud/ipfs/${upload.IpfsHash}`;
    console.log('Uploaded file to Pinata:', gatewayUrl);

    return NextResponse.json({ 
      url: gatewayUrl,
      ipfsHash: upload.IpfsHash 
    }, { status: 200 });
  } catch (e) {
    console.error("Error uploading to Pinata:", e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
} 
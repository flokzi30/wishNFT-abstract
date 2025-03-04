# Pinata IPFS Integration for WishMint

This document explains how to set up and use the Pinata IPFS integration for storing wish preview images on IPFS before minting them as NFTs.

## Setup Instructions

1. **Create a Pinata Account**:
   - Sign up at [pinata.cloud](https://www.pinata.cloud/)
   - Create an API key with permissions for file uploads

2. **Configure Environment Variables**:
   - Open the `.env.local` file in the project root
   - Replace the placeholder values with your actual Pinata credentials:
     ```
     PINATA_JWT=your_pinata_jwt_here
     NEXT_PUBLIC_GATEWAY_URL=your_gateway_url_here
     ```
   - For the `PINATA_JWT`, use the JWT token from your Pinata API key
   - For the `NEXT_PUBLIC_GATEWAY_URL`, use your Pinata gateway URL (e.g., `mydomain.mypinata.cloud`)

3. **Install Dependencies**:
   - Run `npm install` to ensure all dependencies are installed

## How It Works

The integration follows these steps:

1. **Generate Preview Image**:
   - The user creates a wish and sees a preview
   - They can download the preview image to verify it looks correct

2. **Upload to IPFS**:
   - When the user submits the form, the preview image is first uploaded to IPFS via Pinata
   - The image is converted from a data URL to a file and sent to the server

3. **Create NFT with IPFS Link**:
   - After successful upload, the IPFS URL is used as the `imageURI` for the NFT
   - The NFT is then minted with this permanent IPFS link

## Troubleshooting

- **Upload Failures**: Check your Pinata API key permissions and ensure it has access to file uploads
- **File Size Issues**: If you encounter file size limitations, consider using the client-side upload approach with temporary keys
- **CORS Issues**: Ensure your Pinata gateway has proper CORS settings if accessing the images directly from the frontend

## Security Considerations

- The server-side approach keeps your Pinata API key secure
- For production, consider implementing rate limiting and additional validation
- Monitor your Pinata usage to avoid unexpected charges 
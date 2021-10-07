import { NFTStorage,File } from "nft.storage";

const apikey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZmRTkwNDQzMDI3QkJDZjUxNEE4NTRlRjRCZUMwNTZGNkI0N0U5QjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzMzU5Nzg0ODUzMSwibmFtZSI6InRlc3QifQ.bhn4GxmxZcEilMFmvvjJE8sCiY9kMx1Nm5KB6r__muE';
const client=new NFTStorage({token:apikey});

export async function stringtoNFT(){
    const metadata = await client.storeBlob(new Blob(['asdad']))
    
      return metadata;

}
import { NFTStorage,File } from "nft.storage";

const apikey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEZmRTkwNDQzMDI3QkJDZjUxNEE4NTRlRjRCZUMwNTZGNkI0N0U5QjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzMzU5Nzg0ODUzMSwibmFtZSI6InRlc3QifQ.bhn4GxmxZcEilMFmvvjJE8sCiY9kMx1Nm5KB6r__muE';
const client=new NFTStorage({token:apikey});

export async function stringtoNFT(data){
    console.log("Value of data NFT--"+data);
    const metadata = await client.storeBlob(new Blob([data]))
    //bafkreibcx2fea6pmpoj3hhs2jffui6a7i3xsjxsaxpkcwr4asw4o645ho4
   
      return metadata;

}

export async function stringFromNFT(cid) {
  let result= await client.status(cid);
  console.log("Endpoint"+client.endpoint);
  let data=await client.check(cid);
  
  alert("Status"+JSON.stringify(result));
  alert("Status"+JSON.stringify(data));
}
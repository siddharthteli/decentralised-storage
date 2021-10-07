import {create} from 'ipfs-http-client';



export async function ipfscaddstring() {
    const client=create('https://ipfs.infura.io:5001/api/v0');
    const add=await client.add("hello world");
    console.log("CID is here:---"+add.cid);
    return add.cid.toString();
}



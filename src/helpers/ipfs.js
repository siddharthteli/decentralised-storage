import {create} from 'ipfs-http-client';


const client=create('https://ipfs.infura.io:5001/api/v0');
export async function addStringToIpfs(data) {
    console.log("Value of data NFT--"+data);
    const add=await client.add(data);
    console.log("CID is here:---"+add.cid);
    return add.cid.toString();
}


async function  getStringFromIpfs(cid) {
    const get=await client.cat(cid);
    
}



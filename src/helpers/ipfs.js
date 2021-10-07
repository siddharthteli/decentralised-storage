import {create} from 'ipfs-http-client';


const client=create('https://ipfs.infura.io:5001/api/v0');
export async function addStringToIpfs(data) {
    
    
    const add=await client.add(data);
    console.log("CID is here:---"+add.cid);
    //alert("CID:"+add.cid.toString())
    return add.cid.toString();
}


export async function  getStringFromIpfs(cid) {
    const stream=client.cat(cid);
    let data = '';
    //Qmae6ZkdWUUfw61mcqUscTeQZu17M6UCWsqyxi3sWEdSzM
    for await (const chunk of stream) {
        console.log("Value of chuck+"+chunk);

        data += new TextDecoder().decode(chunk);
      }
    alert("data:--"+data);
}



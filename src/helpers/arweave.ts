import Arweave from "arweave";
import TestWeave from 'testweave-sdk';


const arweave = Arweave.init({
    host: 'localhost',
    port: '1984',
    protocol: 'http',

})


export async function stringToWeave(data: string) {
    try {


        const testWeave = await TestWeave.init(arweave);
        let key = testWeave.rootJWK;
        let transaction = await arweave.createTransaction({
            data,
        }, key)
        transaction.addTag("Content-Type", "text/plain");
        await arweave.transactions.sign(transaction, key);
        await arweave.transactions.post(transaction);
        await testWeave.mine();
        alert("id:" + transaction.id);
        return transaction.id;
    }
    catch (e:unknown) {
        console.log("Kuch error hai:--" + e);
    }

}
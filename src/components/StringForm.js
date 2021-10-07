import React from "react";
import { addStringToIpfs,getStringFromIpfs } from '../helpers/ipfs'
import { stringtoNFT } from '../helpers/nftStorage'

export default class StringForm extends React.Component {
    labelValue;
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }
    onUpdate = (e) => {
        this.setState({ value: e.target.value });

    }

    onClick = async () => {
        if (this.props.selection === 'NFT Storage') {

            //add backend nft call here.
            if (this.props.function === "CAT") {

            }
            else if (this.props.function === "GET") {
                console.log("inside NFT");
                let cid = await stringtoNFT(this.state.value);
                alert("Your CID--" + cid);

            }



        }
        else if (this.props.selection === 'IPFS') {
            //add backend ipfs call here.
            if (this.props.function === "CAT") {
                await getStringFromIpfs(this.state.value)
                
            }
            else if (this.props.function === "GET") {
                console.log("Inside IPFS")
                let cid = await addStringToIpfs(this.state.value);
                alert("Your CID--" + cid);
            }

        }
    }

    render() {
        this.labelValue = "ENTER STRING";
        if (this.props.function === "CAT") {
            console.log("Inside String form VAlue is CAT");
            this.labelValue = "Enter CID";
        }
        else if (this.props.function === "GET") {
            console.log("Inside String form VAlue is GET");
            this.labelValue = "Enter String";
        }

        console.log("Value of prop:---" + this.props.selection);
        return (
            <div>
                <label>{this.labelValue}</label>
                <input type="text" value={this.state.value} onChange={this.onUpdate} />
                <button type="submit" onClick={this.onClick}>submit</button>
            </div>
        )

    }

}
import React from "react";
import { addStringToIpfs, getStringFromIpfs } from '../helpers/ipfs'
import { stringtoNFT, stringFromNFT } from '../helpers/nftStorage'
import {stringToWeave} from '../helpers/arweave.ts'
export default class StringForm extends React.Component {
    labelValue;uploadType;
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }
    onUpdate = (e) => {
        this.setState({ value: e.target.value });

    }

    onClick = async () => {
        console.log("Inside onclcick")
        console.log("Value of state---" + this.props.function);

        if (this.props.selection === 'NFT Storage') {

            //add backend nft call here.
            if (this.props.function === "CAT") {
                console.log("Inside NFT & CAT ");

                await stringFromNFT(this.state.value);
            }
            else if (this.props.function === "GET") {
                console.log("Inside NFT & GET ");

                let cid = await stringtoNFT(this.state.value);
                alert("Your CID--" + cid);

            }



        }
        else if (this.props.selection === 'IPFS') {
            //add backend ipfs call here.
            if (this.props.function === "CAT") {
                console.log("Inside IPFS & CAT ");
                await getStringFromIpfs(this.state.value)

            }
            else if (this.props.function === "GET") {
                console.log("Inside IPFS & GET ");

                let cid = await addStringToIpfs(this.state.value);
                alert("Your CID--" + cid);
            }

        }
        else if (this.props.selection === 'AR') {
            //add backend ipfs call here.
            if (this.props.function === "CAT") {
                console.log("Inside AR & CAT ");
               //will impl.

            }
            else if (this.props.function === "GET") {
                console.log("Inside IPFS & GET ");

                await stringToWeave(this.state.value);
               
            }

        }
    }

    render() {
        console.log("Value of uploadtype::----"+this.props.uploadType);
        this.labelValue = "ENTER STRING";
        if (this.props.function === "CAT") {
            this.labelValue = "Enter CID";
        }
        else if (this.props.function === "GET") {

            this.labelValue = "Enter String";
        }

        if (this.props.uploadType === "String") {
            this.uploadType= "text";
        }
        else if (this.props.uploadType === "File") {

            this.uploadType = "file";
        }


        return (
            <div>
                <label>{this.labelValue}</label>
                <input type={this.uploadType} value={this.state.value} onChange={this.onUpdate} />
                <button type="submit" onClick={this.onClick}>submit</button>
            </div>
        )

    }

}
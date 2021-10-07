import React from "react";
import {addStringToIpfs} from '../helpers/ipfs'
import {stringtoNFT} from '../helpers/nftStorage'

export default class StringForm extends React.Component {

    constructor(props) {
        super(props)
        this.state={value:''}
    }
    onUpdate=(e) =>{
        this.setState({value:e.target.value});

    }

    onClick=async() => {
        if(this.props.selection==='NFT Storage')
        {
            
            //add backend nft call here.
            console.log("inside NFT");
            let cid=await stringtoNFT(this.state.value);
            alert("Your CID--"+cid);
            
        }
        else if (this.props.selection==='IPFS') 
        {
            //add backend ipfs call here.
            console.log("Inside IPFS")
            let cid=await addStringToIpfs(this.state.value);
            alert("Your CID--"+cid);
        }
    }

    render() {
        console.log("Value of prop:---"+this.props.selection);
        return(
        <div>
            <label>Enter String:</label>
            <input type="text" value={this.state.value} onChange={this.onUpdate}/>
            <button type="submit" onClick={this.onClick}>submit</button>
        </div>
        )

    }

}
import React from "react";



export default class StringForm extends React.Component {

    constructor(props) {
        super(props)
        this.state={value:''}
    }
    onUpdate=(e) =>{
        this.setState({value:e.target.value});

    }

    onClick=() => {
        if(this.props.selection==='NFT Storage')
        {
            //add backend nft call here.
        }
        else if (this.props.selection==='IPFS') 
        {
            //add backend ipfs call here.
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
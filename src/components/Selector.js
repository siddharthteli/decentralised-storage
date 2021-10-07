import React from "react";
import './Selector.css';
import StringForm from './StringForm.js'
export default class Selector extends React.Component {
    constructor(props) {
        super(props)
        this.state={selected:'IPFS'}

    }

    onUpdate= (e) => {
        this.setState({selected:e.target.value});
    }

    render() {
        console.log("Value of state:---"+this.state.selected)
        return (
            <div className="container">
            <select value={this.state.selected} onChange={this.onUpdate}>
                <option defaultValue>IPFS</option>
                <option>NFT Storage</option>

            </select>
            <StringForm selection={this.state.selected}/>
            </div>
        )

    }
    
}
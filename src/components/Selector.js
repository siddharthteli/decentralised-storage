import React from "react";
import './Selector.css';

export default class Selector extends React.Component {
    constructor(props) {
        super(props)
        this.state={selected:''}

    }

    onUpdate= (e) => {
        this.setState({selected:e.target.value});
    }

    render() {
        console.log("Value of state:---"+this.state.selected)
        return (
            <select value={this.state.selected} onChange={this.onUpdate}>
                <option>IPFS</option>
                <option>NFT Storage</option>

            </select>
        )

    }
}
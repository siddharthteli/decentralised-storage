import React from "react";
import './Selector.css';
import StringForm from './StringForm.js'
export default class Selector extends React.Component {
    constructor(props) {
        super(props)
        this.state = { selected: 'IPFS',function:'add',label:'Enter String' }

    }

    onUpdate = (e) => {
        this.setState({ selected: e.target.value });
    }
    onFunctionUpdate =(e) => {
        
        this.setState({function:e.target.value});
        
    }

    render() {
        console.log("Value of state:---" + this.state.selected)
        return (
            <div className="container">
                <div className="selection-wrapper">
                    <select value={this.state.selected} onChange={this.onUpdate}>
                        <option defaultValue>IPFS</option>
                        <option>NFT Storage</option>

                    </select>
                </div>
                <div className="selection-wrapper">
                    <select value={this.state.function} onChange={this.onFunctionUpdate}>
                        <option defaultValue>GET</option>
                        <option>CAT</option>

                    </select>
                </div>

                <StringForm selection={this.state.selected} function={this.state.function}/>
            </div>
        )

    }

}
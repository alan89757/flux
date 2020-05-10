import React, { Component } from "react";
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict'
import Store from '../myFlux/store';

const store = new Store();

class Calculator extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <TemperatureInput scale="c" store={store}/>
                <TemperatureInput scale="f" store={store}/>
                <BoilingVerdict store={store}/>
            </div>
        );
    }
}

export default Calculator;
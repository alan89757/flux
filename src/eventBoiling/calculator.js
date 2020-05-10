import React, { Component } from "react";
import TemperatureInput from './temperatrueInput';
import BoilingVerdict from './boilingVerdict'
import Store from '../myFlux/store';
import Dispatcher from '../myFlux/dispatcher';

const store = new Store();

class Calculator extends Component {
    constructor(props){
        super(props);
        Dispatcher.use(function(action, next){
            setTimeout(() => {
                console.log("我是第一个中间件")
                next();
            }, 2000);
        })
        Dispatcher.use(function(action, next){
            setTimeout(() => {
                console.log("我是第二个中间件")
                next();
            }, 2000);
        })
        Dispatcher.use(function(action, next){
            setTimeout(() => {
                console.log("我是第三个中间件")
                next();
            }, 2000);
        })
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
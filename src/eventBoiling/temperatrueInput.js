import React, { Component } from 'react';
import Actions from '../myFlux/actions';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};


class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.action = new Actions();
  }
  handleChange(e) {
    const celsius = this.props.scale === 'f' ? tryConvert(e.target.value, toCelsius) : e.target.value; // 获取摄氏度的值，去更新华氏温度
    this.action.add({scale: this.props.scale, celsius: celsius});
    
    this.setState({
      temperature: e.target.value
    })
  }
  componentDidMount() {
    this.action.getAll(); // 数据初始化
    // 监听用户输入change
    this.props.store.on('temp change', (data)=> {
      const obj = data['temp change'];
     // 判断来源
        if (this.props.scale !== obj.scale){
            this.props.scale === "c" ? this.setState({
                temperature: obj.celsius
            }): this.setState({
                temperature: tryConvert(obj.celsius, toFahrenheit)  //摄氏度转华氏温度
            });
        }
    })
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                   onChange={this.handleChange} />
        </fieldset>
    );
  }
}


// 华氏温度转摄氏温度
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 摄氏温度转华氏温度
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// 温度的数字化操作。
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
      return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default TemperatureInput
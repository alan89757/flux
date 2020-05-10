import React from 'react';

class BoilingVerdict extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        isboil : 'not'
    }
  }
  componentDidMount(){
    // 大于100度是开水
    this.props.store.on('temp change', (data)=> {
        const obj = data['temp change'];
        obj.celsius >= 100 ? this.setState({
            isboil : 'would'
        }) : this.setState({
            isboil : 'not'
        })
    })
  }
  render() {
    return <p>The water { this.state.isboil } boil.</p>;
  }
}

export default BoilingVerdict;
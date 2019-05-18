import React from 'react';
import PriceTicker from './PriceTicker';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {price:undefined}
    setInterval(()=>this.setState({price:Math.random()*20}),6000);
  }


  render(props){
    return <PriceTicker price={this.state.price}/>
  }
}

export default App;

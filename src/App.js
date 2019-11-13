import React from 'react';
import Child from './Child'
export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      unit:'kg'
    }
  }

  changeUnit(item){
    this.setState({
      unit:item
    })
  }
  render(){
    return(
      <div>
        <h1>Data pass child to parent</h1>
        <Child data={{
          unit:this.state.unit,
          changeUnit:this.changeUnit.bind(this)
        }}/>        
      </div>
    )
  }
}
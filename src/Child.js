import React from 'react';

export default class Child extends React.Component{
    render(){
        {console.log(this.props)}
        return(
            <div>
                <h3>{this.props.data.unit}</h3>
                <button onClick={()=>this.props.data.changeUnit("child unit applied")}>click</button>
            </div>
        )
    }
}
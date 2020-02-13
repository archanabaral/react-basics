import React from "react";

class event extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    //Any time you craete a class method where you want to use setState on you need to bind that method to your own class 
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick() {
    //anytime we want to change state we use method setState
    this.setState((prevState)=>{
       return{
           count:prevState.count + 1
       }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}> Change!</button>
      </div>
    );
  }
}
export default event;

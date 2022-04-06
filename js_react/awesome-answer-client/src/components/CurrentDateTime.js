import React, {Component} from 'react';

class CurrentDateTime extends Component {
  constructor(props) {
      super(props);
      this.state = {
          date: new Date()
      }
      console.log('1: constructor fired')
  }

  //gets triggered after a component re-renders
  componentDidMount(){
    console.log('3: componentDidMount');
  }


  render() {
    console.log('2: render fired')
      return (
          <div>
              CURRENT TIME: {this.state.date.toLocaleString()}
          </div>
      )
  }
}

export default CurrentDateTime;

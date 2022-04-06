import './App.css';
import React, {Component} from 'react';

import QuestionShowPage from './components/QuestionShowPage'
import QuestionIndexPage from './components/QuestionIndexPage'
import CurrentDateTime from './components/CurrentDateTime'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clocksCount: [1] //an array of something
    }
  }
  render(){
    return(
      <CurrentDateTime />
    )
  }
}

export default App;

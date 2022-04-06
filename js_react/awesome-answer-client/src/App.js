// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import CurrentDateTime from './components/CurrentDateTime'
import QuestionShowPage from './components/QuestionShowPage'
// import QuestionIndexPage from './components/QuestionIndexPage'
import { Session } from './requests'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // clocksCount: [1,5,9], // an array of something
      user: null
    }
  }

  //Hacky Sign In
  componentDidMount(){
    Session.create(
      {
        email: "admin@user.com",
        password: "123"
      }
    ).then(fetchedUser => {
      this.setState((state) => {
        return {
          user: fetchedUser
        }
      })
    })
  }

  render(){
    return(
      <QuestionShowPage/>
    )
  }
}

export default App;

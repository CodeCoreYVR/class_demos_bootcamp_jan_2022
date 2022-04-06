// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import CurrentDateTime from './components/CurrentDateTime'
import QuestionShowPage from './components/QuestionShowPage'
import QuestionIndexPage from './components/QuestionIndexPage'
import { Session } from './requests'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar'

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
      <BrowserRouter>
        <NavBar/>
        <Route exact path='/questions' component={QuestionIndexPage}/>
        <Route path='/questions/:id' component={QuestionShowPage} />
      </BrowserRouter>
    )
  }
}

export default App;

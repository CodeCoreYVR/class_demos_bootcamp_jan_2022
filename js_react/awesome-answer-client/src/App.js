// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import CurrentDateTime from './components/CurrentDateTime'
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
import { Session } from './requests';
import { User } from './requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewQuestionPage from './components/NewQuestionPage';
import SignInPage from './components/SignInPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // clocksCount: [1,5,9], // an array of something
      user: null
    }
  }

  componentDidMount(){
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current().then(user => {
      //This is the safe navigation operator
      //similar to user && user.id (user&.id)
      if (user?.id){
        this.setState(state => {
          return { user }
        })
      }
    })
  }

  render(){
    return(
      <BrowserRouter>
        <NavBar currentUser={this.state.user}/>
        <Switch>
          <Route exact path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps } onSignIn={this.getCurrentUser} />}
          >

          </Route>
          <Route exact path='/questions' component={QuestionIndexPage}/>
          <Route exact path='/questions/new' component={NewQuestionPage}></Route>
          <Route exact path='/questions/:id' component={QuestionShowPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

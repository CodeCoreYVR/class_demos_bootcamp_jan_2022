// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import CurrentDateTime from './components/CurrentDateTime'
import QuestionShowPage from './components/QuestionShowPage';
import QuestionIndexPage from './components/QuestionIndexPage';
// import { Session } from './requests';
import { User } from './requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewQuestionPage from './components/NewQuestionPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import UseStateHook from './components/UseStateHook';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clocksCount: true, // an array of something
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

  onSignOut = () => { this.setState( { user: null })}

  //Anytime we want to render a component that requires some props,
  // and that component is being rendered by a Route component
  //then the way to pass props is to use the "render" property
  //It takes a function as an argument and the function returns the component
  //with the props passed to it. "routeProps" represents all the routing props
  //Make sure to pass them to the component as well

  render(){
    return(
      <BrowserRouter>
        <NavBar currentUser={this.state.user} onSignOut={this.onSignOut} clocksCount={this.state.clocksCount}/>
        <Switch>
          <Route exact path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps } onSignIn={this.getCurrentUser} />}
          />
          <Route exact path='/sign_up' 
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />}/>
          <Route exact path='/questions' component={QuestionIndexPage}/>
          <AuthRoute isAuthenticated={!!this.state.user} exact path='/questions/new' component={NewQuestionPage}></AuthRoute>
          <Route exact path='/questions/:id' component={QuestionShowPage} />
          <Route path='/use_state' component={UseStateHook} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

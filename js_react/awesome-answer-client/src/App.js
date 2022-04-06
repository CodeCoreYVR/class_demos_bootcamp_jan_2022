import './App.css';
import React, {Component} from 'react';

// import QuestionShowPage from './components/QuestionShowPage'
// import QuestionIndexPage from './components/QuestionIndexPage'
import CurrentDateTime from './components/CurrentDateTime'
import { Session } from './requests'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clocksCount: [5,9,8], //an array of something
      user: null
    }
  }

  //Hacky sign in
  componentDidMount(){
    Session.create({
      email: 'admin@user.com',
      password: '123'
    })
    .then(user => {
      this.setState((state) => {
        return {
          user: user
        }
      })
    })
  }

  render(){
    return(
      <div>
      {
        this.state.clocksCount.map((c, i) => {
          return <CurrentDateTime key={i} shouldShowTime={true}/>
        })
      }
    </div>

    )
  }
}

export default App;

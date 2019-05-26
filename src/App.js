import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//importing components
import Navigation from './components/navigation/navigation'
import signInForm from './components/signin/signinfrom'
import signUpForm from './components/signup/signupform'
import Home from './components/home/home'
import About from './components/about/about'
import {robots} from '../src/robots'

class App extends React.Component {
  state = {
    inhome : true,
    robots : robots,
   
    post : {
      username : '',
      post : ''
    },
    posts : [
      {username : '#raj', post : 'get the things done by tomorrow, make a peace wherever you go.' },
      {username  :'avyas', post : 'dare to go away'}
  ],  
  }
  loadRobots = (robots) => {
    this.setState({robots : robots})
  }
  
  render(){
    
    return (
      <div>
       
        <Router>
          <h3 className='container'>goodbye to the dogma!!</h3>
          < Navigation inhome={this.state.inhome}/>
          <Switch>
            <Route path='/signin'exact component={signInForm}/>
            <Route path='/signup'exact component={signUpForm}/>
            <Route path='/about'exact 
            render={(props) => <About {...props} robots={this.state.robots} loadRobots={this.loadRobots}/>}/>
            <Route path='/' exact
            render = {(props)=> <Home {...props} robots={this.state.robots}/>} />
          </Switch>
        </Router>
        
      </div>
    );

  } 
}

export default App;

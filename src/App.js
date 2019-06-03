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
      title : '',
      description : '',
    },
    posts : [
      {title : '#raj', description : 'get the things done by tomorrow, make a peace wherever you go.' },
      {title  :'avyas', description : 'dare to go away'}
  ],  
  }
  loadRobots = (robots) => {
    this.setState({robots : robots})
  }
  loadPost = (title, description) =>{
    this.setState({post : {
      title : title,
      description : description,
    }})
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
            render={(props) => <About {...props} robots={this.state.robots} loadRobots={this.loadRobots} loadPost={this.loadPost}/>}/>
            <Route path='/' exact
            render = {(props)=> <Home {...props} robots={this.state.robots} state = {this.state}/>}/>
          </Switch>
        </Router>
        
      </div>
    );

  } 
}

export default App;

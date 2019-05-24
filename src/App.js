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
    robots : [],
    post : {
      title : '',
      desc : ''
    },
    posts : [
      {username : 'raj', post : 'get the things done by tomorrow' },
      {username : 'avyas', post :'travelling is the best feeling'},
      {username : 'suman', post : 'time to finsh th job'},
  ],  
  }
  componentDidMount = () =>{
    this.setState({robots : robots})
  }
  loadPost = (title, desc) =>{
    
    console.log('post in a app ',title, desc)
    this.setState({post : {
      title : title,
      desc: desc,
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
            render={(props) => <About {...props} loadPost={this.loadPost}/>}/>
            <Route path='/' exact
            render = {(props)=> <Home {...props} post = {this.state.post} posts={this.state.posts}/>} />
          </Switch>
        </Router>
        
      </div>
    );

  } 
}

export default App;

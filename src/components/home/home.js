import React from 'react';
import {NavLink} from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

//importing components

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            robots : [],
        }
    }
    componentWillMount(){
        this.setState({robots : this.props.robots})
    }
   
    render(){
        const {post, posts} =  this.props.state;
        const count = (posts.length);
        console.log(posts[count-1])
        
        if(post.title !== '' && post.title !== posts[count-1].title ){
            posts.push(post);
            console.log('posts after inserting', posts);
        }
        console.log('posts without inserting', posts);
        
    
        const columns = [
            {
                Header : 'Id',
                accessor : 'id',
                filterable : true,
                style : {
                    textAlign : 'center'
                },
                width :100,

            },
            {
                Header : 'Name',
                accessor :'name',
                style : {
                    textAlign : 'center'
                },
                
                
            },
            {
                Header : 'User Name',
                accessor : 'username',
                filterable : true,
                style : {
                    textAlign : 'center'
                },
                
            },
            {
                Header : 'Email',
                accessor : 'email',
                style : {
                    textAlign : 'center'
                },
                
            },
        ]
        return(
            <div className='container'>

                <div>
                    <h2><NavLink to='/'>Aira2018</NavLink></h2>
                    <h5>Nothing Like an Aira</h5>
                    <p>Smarter you are, and bacome more smarter by sharing!! sometimes sharing gives you more then u are contemplating
                        go with the flow, here with Aira.
                    </p>
                </div>
                {/* starting for the posts */}
                <h3>Recents Posts</h3>
                <div className = "recent-posts" style={{display :'flex'}}>
                    
                  <div className = "posts-left">
                  {
                      posts.map((post) => {
                        return(
                            <div style={{border : '2px solid', margin : '20px 5px ', padding : '5px', textAlign : 'center',
                            display : 'flex'}}>
                                 <div>
                                    <img src={`https://robohash.org/${post.description}`} alt="profile-pic" 
                                    style={{height : '100px', width : '100px', borderRadius : '20%', background : '#f4f4f4', margin : '20px'}}></img>
                                    <h4>{post.title}</h4>
                                 </div>
                                 <p>{post.description}</p>
                            </div>
                        )
                      } 
                    )
                  }
                  </div>
                  <div className="post-right" style = {{width : '50%', border : "2px solid", margin : '20px 5px', textAlign : 'center'}}>
                      <h4>testing for the floating</h4>
                        <h5>Title for the post</h5>

                        <p>every day gonna be the opportunity, if you really see hard, find your dream destination where your soul can leaps</p>
                        <img src= "http://robohash.org/curtailed" alt="" height = "260px"></img>
                      


                    
                </div>
                </div>
                {/* ending for the post */}
                <div>
                   {
                        <ReactTable columns = {columns}
                        data = {this.state.robots}
                        defaultPageSize = {10}>
                        </ReactTable>
                   }
                </div>

            </div> 
            // container div
        )
    }
}
export default Home;
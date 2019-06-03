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

                <div>
                  {
                      posts.map((post) => {
                        return(
                            <div style={{border : '2px solid', margin : '5px', padding : '5px',width : '20%', height : '200px'}}>
                                 <h3>Recents posts</h3>
                                 <h4>{post.title}</h4>
                                 <p>{post.description}</p>
                            </div>
                        )
                      } 
                    )
                  }
                    
                </div>
                <div>
                   {
                        <ReactTable columns = {columns}
                        data = {this.state.robots}
                        defaultPageSize = {10}>
                        </ReactTable>
                   }
                </div>

            </div>
        )
    }
}
export default Home;
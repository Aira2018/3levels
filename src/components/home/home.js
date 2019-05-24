import React from 'react';
import {NavLink} from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

//importing components
import { robots } from '..//../robots'


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : 'raj',
            robots : robots, 
        }
    }
    render(){
      const {posts} = this.props;
      console.log('posts in home', posts)
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
                <div style={{display :'flex'}}>
                    {
                        posts.map((user, ind)=> {
                            return(
                                <div style ={{border : '1px solid', width : '40%', margin : '5px', padding: '5px', textAlign :'center', }}>
                                    <h5>Recents</h5>
                                    <h6>{user.username}</h6>
                                    <p>{user.post}</p>
                                </div>
                            )
                        })
                       
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
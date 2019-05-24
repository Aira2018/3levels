import React from 'react';
import {NavLink} from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {robots} from '../../robots'
import {Redirect} from 'react-router-dom'


class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            robots : robots,
            redirecthome : false,
            
                title : '',
                desc : '',
        }
    }
    
    deleteRow = (id) => {
        
        var afterdel = this.state.robots.filter(robot => robot.id !== id)
        this.setState({robots : afterdel})
    }
    onChangeTitle =(event)=>{
        this.setState({
            title : event.target.value
        })
    }
    onChangeDesc =(event)=>{
        this.setState({
            desc : event.target.value
        })
    }
    submitPost =()=>{
        this.props.loadPost(this.state.title, this.state.desc)
         this.setState({redirecthome : true})
         
    }
    redirectHome = () => {
        if(this.state.redirecthome){
            return <Redirect to='/'/>
        }
    }
    
    
    render(){

        const columns = [
            {
                Header : '#',
                accessor : 'id',
                filterable : true,
                sortable :true,
                style : {
                    textAlign : 'center'
                },
                width : 100,
            },
            {
                Header : 'Name',
                accessor : 'name',
                filterable : true,
                sortable: true,
                style : {
                    textAlign : 'center'
                },
                
            },
            {
                Header : 'User Name',
                accessor : 'username',
                filterable : true,
                sortable : true,
                style : {
                    textAlign : 'center'
                },
               
            },
            {
                Header : 'Email',
                accessor : 'email',
                filterable : true,
                style : {
                    textAlign : 'center'
                },
               
            },
            {
                Header : 'Action',
                Cell : props => {
                    return(
                        <div>
                            <button
                            onClick={()=>this.deleteRow(props.original.id)}
                            >Detete</button>
                        </div>
                    )
                },
                width : 100,
            },
            
        ]
        return (
            <div className='container'>
                {this.redirectHome()}
                <div>
                    <h2><NavLink to='/'>Aira2018</NavLink></h2>
                    <h4>Aira2018/Mangers</h4>
                    <h5>get the most most supreme intellect goals</h5>
                    <p></p> 
                </div>
                <div>
                    {
                        <ReactTable 
                        columns={columns}
                        data = {this.state.robots }
                        defaultPageSize={10}>
                        </ReactTable>
                    }
    
                </div>
                <div className='post-manager'>
                    <h4>Create a post here!!</h4>
                    <div>
                        <div><label>Title</label></div>
                        <div><input type='text' placeholder='@title for the post'
                        onChange = {this.onChangeTitle}/></div>
                    </div>
                    <div>
                        <div><label>Description for the post</label></div>
                        <div><input type='text' placeholder='@discription for the posts'
                        onChange={this.onChangeDesc}/></div>
                        
                    </div>
                    <div>
                        <input type='submit' name='Post'
                        onClick={this.submitPost}/>
                    </div>
                </div>
            </div>
        )

    }
        
}      


export default About;
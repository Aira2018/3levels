import React from 'react';
import Reacthtmltabltoexccel from 'react-html-table-to-excel';

const exporttoexcel = ({users}) => {
    
    return (
        <div style={{border : '1px solid', textAlign : 'center', padding : '5px'}}>
            <h3>Export table into Excel</h3>
            <Reacthtmltabltoexccel 
            id="table-id"
            className = "table-class"
            table = "table-export"
            filename = {new Date()}
            sheet = "sheet1"
            buttonText = "EXPORT"/>
            <table id="table-export" hidden="true" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map((user)=>{
                           return(
                               <tr key = {user.id}>
                                   <td>{user.id}</td>
                                   <td>{user.name}</td>
                                   <td>{user.username}</td>
                                   <td>{user.email}</td>
                               </tr>
                           )
                       })
                   }
                </tbody>

            </table>
            
        </div>
    );
};

export default exporttoexcel;
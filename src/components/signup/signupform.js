import React from 'react'
import {NavLink} from 'react-router-dom'

const signUpForm =()=>{
    return(
        <div className='container'>
            <h2>Aira2018</h2>
            <h4>Sign up Here </h4>
            <div>
                <label>UserName  </label>
                <input type='text' name='name' id='name' placeholder='@aira' required/>
            </div>
            <div>
                <label>Address  </label>
                <input type='text' name='address' id='address' placeholder='25 st. Amstadam' required/>
            </div>
            <div>
                <label>Email  </label>
                <input type='email' name='email' id='email' placeholder='@aira@gmail.com' required/>
            </div>
            <div> 
                <label>Password  </label>
                <input type='password' name='password' id='password' placeholder='password' required/>
            </div>
            <div>
                <NavLink to='/signin'><input type='submit' value='Register'/></NavLink>
            </div>
            
        </div>

    )
}
export default signUpForm;
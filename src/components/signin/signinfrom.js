import React from 'react';
import {NavLink} from 'react-router-dom'

const signInForm = () => {
    return(
        <div className='container'>
            <h2>Aira2018</h2>
            <h4>Sign In </h4>
            <div className='class-form'>
            <div>
                <label>Email  </label>
                <input type='email' name='email' id='email' placeholder='@aira@gmail.com' required/>
            </div>
            <div> 
                <label>Password  </label>
                <input type='password' name='password' id='password' placeholder='password' required/>
            </div>
            <div>
                
                <NavLink to='/'><input type='submit' value='Sign In'/></NavLink>
            </div>
            </div>

        </div>
    )
}
export default signInForm;
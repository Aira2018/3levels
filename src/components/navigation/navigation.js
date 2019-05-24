import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
        return(
            <div className='containerlg'>
            <nav className='navstyle'
            style={{display : 'flex', justifyContent : 'flex-end'}}>
                <NavLink to='/'>Vistiors</NavLink>
                <NavLink to='/about'>Managers</NavLink>
                <NavLink to='/signin'>SignIn</NavLink>
                <NavLink to='/signup'>SignUp</NavLink>
            </nav>
        </div>
        )
}
export default Navigation;
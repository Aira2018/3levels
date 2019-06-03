import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
        return(
            <div className='containerlg'>
            <nav className='navstyle'
            style={{display : 'flex',justifyContent : 'flex-end', fontSize : '20px'}}>
                <NavLink to='/' className='nav-item'>Vistiors</NavLink>
                <NavLink to='/about' className='nav-item'>Managers</NavLink>
                <NavLink to='/signin' className='nav-item'>SignIn</NavLink>
                <NavLink to='/signup' className='nav-item'>SignUp</NavLink>
            </nav>
        </div>
        )
}
export default Navigation;
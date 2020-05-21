import React from 'react';
import { NavLink } from 'react-router-dom';

import '../stylesheets/layouts/header.scss';

const Header = () =>{
    return(
        <div className="header">
            <NavLink className='studio' to='/' exact>
                Mega model <p>studio</p>
            </NavLink>
            <div className='header-section'>
                <NavLink className='models'  to='/models' exact>
                    Models
                </NavLink>
                <NavLink className='contact' to='/contact' exact>
                    Contact
                </NavLink>
            </div>
            <div className='lang'>
                EN / <p>DE</p>
            </div>
        </div>
    )
}

export default Header;
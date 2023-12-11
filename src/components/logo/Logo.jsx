import React from 'react';
import logoImage from '../../assets/Logo.svg';
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <NavLink to={""}>
                <img src={logoImage} alt={'Logo'}/>
            </NavLink>
        </div>
    );
}

export default Logo;
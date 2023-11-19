import React from 'react';
import logoImage from '../../assets/Logo.svg';

const Logo = () => {
    return (
        <div>
            <a href={"#"}>
                <img src={logoImage} alt={'Logo'}/>
            </a>
        </div>
    );
}

export default Logo;
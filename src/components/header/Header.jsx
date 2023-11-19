import React from 'react';
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import styles from './Header.module.scss'

const Header = (props) => {
    return (
        <header className={styles.wrapper}>
            <Logo/>
            <Navigation/>
        </header>
    )
}

export default Header;
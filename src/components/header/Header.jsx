import React from 'react';
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import styles from './Header.module.scss'


const Header = (props) => {
    return (
        <header className={styles.coloring}>
            <div className={styles.wrapper}>
                <Logo/>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header;
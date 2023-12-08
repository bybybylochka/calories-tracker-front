import React from 'react';
import styles from './Footer.module.scss';
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

const Footer = () => {
    return (
        <footer className={styles.coloring}>
            <div className={styles.wrapper}>
                <Logo className={styles.logo}/>
                <div>
                    <h4>Сервис</h4>
                    <ul>
                        <li>Личный кабинет</li>
                        <li>Статьи</li>
                        <li>Рецепты</li>
                    </ul>
                </div>
                <div>
                    <h4>Информация</h4>
                    <ul>
                        <li>Контакты</li>
                        <li>Вопросы и ответы</li>
                        <li>Варианты оплаты</li>
                    </ul>
                </div>
                <p>© 2015–2023 On Balance</p>
                <p>© 2015–2023 On Balance</p>
                <p>Политика кофиденциальности</p>
            </div>
        </footer>
    )
}

export default Footer;
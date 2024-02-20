import React from 'react';
import promoImage from '../../assets/promoImage.svg';
import saleIcon from '../../assets/saleIcon.svg';
import styles from './Promo.module.scss';

const Promo = () => {
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <div className={styles.description}>
                    <p className={styles.text}>Сервис, рекомендуемый нутрициологами</p>
                    <h1 className={styles.title}>Держи свое питание on Balance</h1>
                    <p className={styles.text}>С помощью нашего сервиса вы можете вести дневник питания,
                        отслеживать активность и успешно снижать вес. Теперь считать
                        калории и терять килограммы очень легко!</p>
                    <button>Присоединиться</button>
                </div>
                <div>
                    {/*<div className={styles.sale}>*/}
                    {/*    <img src={saleIcon} alt={'sale'}/>*/}
                    {/*    <p>Скидка на 6 месяцев подписки</p>*/}
                    {/*</div>*/}
                    <img src={promoImage} alt={'promo'}/>
                </div>
            </div>
        </div>
    )

}

export default Promo;
import React from 'react';
import styles from './RecipesTracker.module.scss';

const ShopList = ({shopList}) => {

    const ShopList = Object.entries(shopList).map(([key, value])=>{
        return <div className={styles.shopListItem}>
            <p>{key}</p>
            <p>{value} г</p>
        </div>
    })

    return (
        <div className={styles.shopList}>
            <p className={styles.subtitle}>Список покупок</p>
            <div>{ShopList}</div>
        </div>
    )
}

export default ShopList;

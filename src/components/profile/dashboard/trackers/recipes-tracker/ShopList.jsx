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
            {Object.entries(shopList).length===0
                ?<p className={styles.subtitle}>Список покупок пуст, выберите рецепты</p>
                :<div>
                    <p className={styles.subtitle}>Список покупок</p>
                <div>{ShopList}</div>
                </div>
            }
        </div>
    )
}

export default ShopList;

import React from "react";
import Argument from "./argument/Argument";
import losingWeightImage from "../../assets/losingWeightImage.svg";
import healthyFoodImage from "../../assets/healthyFoodImage.svg";
import jktImage from "../../assets/jktImage.svg";
import styles from "./Needs.module.scss"

const Needs = () =>{
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Кому нужен сервис</h2>
                <div className={styles.argumentsContainer}>
                    <Argument title={'Корректирующим вес'}
                              text={'Сервис поможет контролировать питание и определять ' +
                                  'энергетическую ценность каждого продукта. В зависимости ' +
                                  'от ваших целей, On Balance определит суточную норму'}
                              image={losingWeightImage}
                    />
                    <Argument title={'Сторонникам здорового питания'}
                              text={'Сервис точно определит норму белков, жиров и углеводов' +
                                  ' для поддержания сбалансирован-ного питания с учетов ' +
                                  'вашего возраста, веса, роста и физической активности'}
                              image={healthyFoodImage}
                    />
                    <Argument title={'Людям с проблемами ЖКТ'}
                              text={'On Balance предложит огромный список рецептов, учитывая' +
                                  ' проблемы со здоровьем. Сервис поможет соблюдать лечебную' +
                                  ' диету и отказаться от нежелательных продуктов '}
                              image={jktImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Needs;
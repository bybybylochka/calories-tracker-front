import React, {useState} from 'react';
import styles from './WaterTracker.module.scss'
import waterTrackerImage from '../../../../../assets/water-tracker.svg';
import plus from '../../../../../assets/bluePlus.svg';
import AddingFood from "../../../../modal/addingFood/AddingFood";
import Modal from "../../../../modal/Modal";

const WaterTracker = ( ) => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className={styles.wrapper}>
            <div>
                <img src={waterTrackerImage} alt={"water tracker"} />
            </div>
            <p>
                Выпито 500 мл воды
            </p>
            <button className={styles.addingButton}>
                <img src={plus} alt={'plus'}/>
            </button>
            <Modal active={modalActive} setActive={setModalActive} backgroundColor={'.water'}>
                <p>water</p>
            </Modal>
        </div>
    )
}

export default WaterTracker;
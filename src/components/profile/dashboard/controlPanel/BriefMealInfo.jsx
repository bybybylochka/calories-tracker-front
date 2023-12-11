import React, {useState} from 'react';
import addIcon from '../../../../assets/addIcon.svg';
import styles from './ControlPanel.module.scss';
import Modal from "../../../modal/Modal";
import AddingFood from "../../../modal/addingFood/AddingFood";


const BriefMealInfo = ({mealName, consumed, norm}) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={styles.briefMealInfo}>
            <p>{mealName}</p>
            <p className={styles.tracker}>{consumed}/{norm}</p>
            <img src={addIcon} alt="add icon" onClick={()=>setModalActive(true)}/>
            <Modal active={modalActive} setActive={setModalActive} backgroundColor={'food'}>
                <AddingFood mealName={mealName} active={modalActive} setActive={setModalActive}/>
            </Modal>
        </div>
    )
}

export default BriefMealInfo;
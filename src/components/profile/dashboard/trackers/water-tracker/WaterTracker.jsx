import React, {useEffect, useState} from 'react';
import styles from './WaterTracker.module.scss'
import waterTrackerImage from '../../../../../assets/water-tracker.svg';
import plus from '../../../../../assets/bluePlus.svg';
import AddingFood from "../../../../modal/addingFood/AddingFood";
import Modal from "../../../../modal/Modal";
import WaterTrackerForm from "./WaterTrackerForm";
import CircleTracker from "../food-tracker/CircleTracker";
import {useDispatch, useSelector} from "react-redux";
import {
    addConsumedWater,
    deleteConsumedWater,
    getTodayConsumedWater
} from "../../../../../reducers/consumed-water-reducer";

const WaterTracker = ( ) => {
    const [modalActive, setModalActive] = useState(false);
    const [method, setMethod] = useState('');
    const consumedVolume = useSelector((state)=> state.consumedWater.totalVolume);
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        method==='add'
            ? dispatch(addConsumedWater(formData.volume))
            : dispatch(deleteConsumedWater(formData.volume))
    }
    useEffect(()=>{
        dispatch(getTodayConsumedWater())
    }, [])

    return (
        <div className={styles.wrapper}>
            <div>
                <img src={waterTrackerImage} alt={"water tracker"} />
            </div>
            <p>
                Выпито {consumedVolume} мл воды
            </p>
            <button className={styles.addingButton}>
                <img src={plus} alt={'plus'} onClick={()=>setModalActive(true)}/>
            </button>
            <Modal active={modalActive} setActive={setModalActive} backgroundColor={'water'}>
                <p className={styles.title}>Количество выпитой воды</p>
                <div className={styles.addingWater}>
                    <CircleTracker norm={1.5} consumed={consumedVolume/1000} color={'water'}/>
                    <WaterTrackerForm onSubmit={onSubmit} setMethod={setMethod}/>
                </div>
            </Modal>
        </div>
    )
}

export default WaterTracker;
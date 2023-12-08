import React, {useEffect} from 'react';
import Tracker from "./trackers/food-tracker/Tracker";
import verticalLine from "../../../assets/verticalLine.svg";
import styles from "./Dashboard.module.scss";
import ControlPanel from "./controlPanel/ControlPanel";
import personalDataReducer, {getPersonalData} from "../../../reducers/personalData-reducer";
import {useDispatch, useSelector} from "react-redux";
import {personalDataApi} from "../../../api/api";

const Dashboard = () =>{
    let dispatch = useDispatch();
    const name = useSelector((state)=>state.personalData.name);
    const norm = useSelector((state)=>state.personalData.norm);
    useEffect(()=>{
        dispatch(getPersonalData())
    }, [])
    return (
        <div className={styles.wrapper}>
            <Tracker norm={norm.kbju}/>
            <img src={verticalLine} alt={"vertical line"}/>
            <ControlPanel name={name} norm={norm}/>
        </div>
    )
}

export default Dashboard;
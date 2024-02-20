import React, {useEffect, useState} from 'react';
import EditingPersonalDataForm from "./EditingPersonalDataForm";
import styles from './EditingPersonalData.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getPersonalData, updatePersonalData} from "../../../reducers/personalData-reducer";
import {Navigate} from "react-router-dom";

const EditingPersonalData = () => {
    const personalData = useSelector((state)=>state.personalData);
    const [isUpdated, setIsUpdated]=useState(false);
    const dispatch = useDispatch();
    const onSubmit = (formData)=>{
        dispatch(updatePersonalData(formData));
        dispatch(getPersonalData(formData));
        setIsUpdated(true);
    }
    useEffect(()=>{
        dispatch(getPersonalData());
    }, [])
    if(isUpdated){
        return <Navigate replace to={'/profile'}></Navigate>
    }
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <div className={styles.formContainer}>
                    <p className={styles.title}>Редактирование персональных данных</p>
                    <EditingPersonalDataForm personalData={personalData} onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default EditingPersonalData
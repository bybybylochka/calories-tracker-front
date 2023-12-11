import React, {useState} from 'react';
import SurveyForm from "./SurveyFrom";
import styles from "./Survey.module.scss";
import {useDispatch} from "react-redux";
import {addPersonalData} from "../../reducers/personalData-reducer";
import {Navigate} from "react-router-dom";

const Survey = () => {
    const dispatch = useDispatch();
    const [isPersonalData, setIsPersonalData] = useState(false);
    const onSubmit = (formData) => {
        dispatch(addPersonalData(formData));
        setIsPersonalData(true);
    }
    if(isPersonalData){
        return <Navigate replace to={"/profile"}/>
    }
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <div className={styles.formContainer}>
                    <p className={styles.title}>Персональные данные</p>
                    <SurveyForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Survey;
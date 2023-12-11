import {useFormik} from "formik";
import React from "react";
import plusIcon from '../../../../../assets/plus.svg';
import minusIcon from '../../../../../assets/minus.svg';
import styles from './WaterTracker.module.scss';

const WaterTrackerForm = ({onSubmit, setMethod}) => {
    const formik = useFormik({
        initialValues: {
            volume: 100
        },
        onSubmit: (values) => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.waterTrackerForm}>
                <button className={styles.button} type="submit" name={'delete'} onClick={(e)=>{
                    setMethod(e.target.getAttribute('name'))
                }}>
                    <img src={minusIcon} alt={'minus'} name={'delete'}/>
                </button>
                <input id="volume"
                       name="volume"
                       placeholder="Объем"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.weight}
                />
                <button className={styles.button} type={"submit"} name={'add'} onClick={(e)=>{
                    setMethod(e.target.getAttribute('name'))
                }}>
                    <img src={plusIcon} alt={'plus'} name={'add'}/>
                </button>
            </div>
        </form>
    );
};

export default WaterTrackerForm;
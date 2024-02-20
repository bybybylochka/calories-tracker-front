import {useFormik} from "formik";
import React from "react";
import plusIcon from '../../../../../assets/plus.svg';
import minusIcon from '../../../../../assets/minus.svg';
import styles from './WaterTracker.module.scss';

const validate = values => {
    const errors = {};

    if (!values.volume) {
        errors.volume = 'Это поле обязательное';
    }
};
const WaterTrackerForm = ({onSubmit, setMethod}) => {
    const formik = useFormik({
        initialValues: {
            volume: 100
        },
        validate,
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
                       type="number"
                       min={1}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.volume}
                />
                <button className={styles.button} type={"submit"} name={'add'} onClick={(e)=>{
                    setMethod(e.target.getAttribute('name'))
                }}>
                    <img src={plusIcon} alt={'plus'} name={'add'}/>
                </button>
                {formik.errors.volume ? (
                    <div className={styles.errorText}>{formik.errors.volume}</div>
                ) : null}
            </div>
        </form>
    );
};

export default WaterTrackerForm;
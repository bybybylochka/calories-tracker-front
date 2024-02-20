import {useFormik} from "formik";
import styles from "../../survey/Survey.module.scss";
import React from "react";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Это поле обязательное';
    }
    if (!values.activityType) {
        errors.activityType = 'Это поле обязательное';
    }
    if (!values.goalType) {
        errors.goalType = 'Это поле обязательное';
    }
    if (!values.height) {
        errors.height = 'Это поле обязательное';
    }else if(values.height<100){
        errors.height = 'Слишком маленький рост';
    }
    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Это поле обязательное';
    }
    return errors;
};

const EditingPersonalDataForm = ({personalData, onSubmit}) => {
    const activityTypeMap = {
        'inactive': 'Малоактивный/сидячий образ жизни',
        'light': 'Физические нагрузки 1-2 раза в неделю',
        'average': 'Физические нагрузки 3-4 раза в неделю',
        'high': 'Физические нагрузки каждый день'
    };
    const goalTypeMap = {
        'losing weight': 'Снижение веса',
        'maintaining weight': 'Поддержание текущей формы',
        'mass gain': 'Набор массы'
    };

    let now = new Date();
    now.setFullYear(now.getFullYear()-12);
    const formik = useFormik({
        initialValues: {
            name: personalData.name,
            activityType: personalData.activityType,
            goalType: personalData.goalType,
            height: personalData.height,
            dateOfBirth: personalData.dateOfBirth
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label>
                Ваше имя:
                <input className={ formik.touched.name && formik.errors.name ? styles.errorField: '' }
                       id="name"
                       name="name"
                       placeholder="Имя"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name}
                />
            </label>
            {formik.touched.name && formik.errors.name ? (
                <div className={styles.errorText}>{formik.errors.name}</div>
            ) : null}
            <label>
                Уровень активности:
                <select className={ formik.touched.activityType && formik.errors.activityType ? styles.errorField: '' }
                        id="activityType"
                        name="activityType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.activityType}
                >
                    {Object.entries(activityTypeMap).map(([activityType, description]) => (
                        <option key={activityType} value={activityType}>
                            {description}
                        </option>
                    ))}
                </select>
            </label>
            {formik.touched.activityType && formik.errors.activityType ? (
                <div className={styles.errorText}>{formik.errors.activityType}</div>
            ) : null}
            <label>
                Цель использования нашего сервиса:
                <select className={ formik.touched.goalType && formik.errors.goalType ? styles.errorField: '' }
                        id="goalType"
                        name="goalType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.goalType}
                >
                    {Object.entries(goalTypeMap).map(([goalType, description]) => (
                        <option key={goalType} value={goalType}>
                            {description}
                        </option>
                    ))}
                </select>
            </label>
            {formik.touched.goalType && formik.errors.goalType ? (
                <div className={styles.errorText}>{formik.errors.goalType}</div>
            ) : null}
            <label>
                Ваш рост:
                <input className={ formik.touched.height && formik.errors.height ? styles.errorField: '' }
                       id="height"
                       name="height"
                       placeholder="Рост"
                       type="number"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.height}
                />  см
            </label>
            {formik.touched.height && formik.errors.height ? (
                <div className={styles.errorText}>{formik.errors.height}</div>
            ) : null}
            <label>
                Ваша дата рождения:
                <input disabled className={ formik.touched.dateOfBirth && formik.errors.dateOfBirth ? styles.errorField: '' }
                       id="dateOfBirth"
                       name="dateOfBirth"
                       placeholder="Дата рождения"
                       type="date"
                       min="1933-01-01" max={`${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.dateOfBirth}
                />
            </label>
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <div className={styles.errorText}>{formik.errors.dateOfBirth}</div>
            ) : null}

            <div className={styles.buttonContainer}>
                <button type="submit">Отредактировать</button>
            </div>
        </form>
    );
};

export default EditingPersonalDataForm;

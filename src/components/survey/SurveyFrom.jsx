import React from 'react';
import { useFormik } from 'formik';
import styles from './Survey.module.scss';

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Это поле обязательное';
    }
    if (!values.gender) {
        errors.gender = 'Это поле обязательное';
    }
    if (!values.activityType) {
        errors.activityType = 'Это поле обязательное';
    }
    if (!values.goalType) {
        errors.goalType = 'Это поле обязательное';
    }
    if (!values.weight) {
        errors.weight = 'Это поле обязательное';
    }else if(values.weight<30){
        errors.weight = 'Слишком маленький вес';
    }
    if (!values.desiredWeight) {
        errors.desiredWeight = 'Это поле обязательное';
    }else if(values.desiredWeight<30){
        errors.desiredWeight = 'Слишком маленький вес';
    }else if(values.desiredWeight!==values.weight&&values.goalType==='maintaining weight'){
        errors.desiredWeight = 'Желаемый вес должен совпадать с текущим';
    }else if(values.desiredWeight>values.weight&&values.goalType==='losing weight'){
        errors.desiredWeight = 'Желаемый вес должен быть меньше текущего';
    }else if(values.desiredWeight<values.weight&&values.goalType==='mass gain'){
        errors.desiredWeight = 'Желаемый вес должен быть больше текущего';
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

const SurveyForm = ({onSubmit}) => {
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
            name: '',
            gender: 'male',
            activityType: 'inactive',
            goalType: 'losing weight',
            weight: '70',
            height: '175',
            dateOfBirth: '',
            desiredWeight: '65'
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label>
                Введите ваше имя:
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
            <div className={styles.genderContainer}>
                <label>Укажите ваш пол:
                    <input className={ formik.touched.gender && formik.errors.gender ? styles.errorField: '' }
                           id="gender"
                           name="dender"
                           placeholder="Пол"
                           type="radio"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={'male'}
                           defaultChecked={true}
                    />
                    Мужской
                </label>
                <label>
                    <input className={ formik.touched.gender && formik.errors.gender ? styles.errorField: '' }
                           id="gender"
                           name="dender"
                           placeholder="Пол"
                           type="radio"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={'female'}
                    />
                    Женский
                </label>
                {formik.touched.gender && formik.errors.gender ? (
                    <div className={styles.errorText}>{formik.errors.gender}</div>
                ) : null}
            </div>
            <label>
                Выберите уровень активности:
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
                Выберите цель использования нашего сервиса:
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
                Укажите ваш текущий вес:
                <input className={ formik.touched.weight && formik.errors.weight ? styles.errorField: '' }
                       id="weight"
                       name="weight"
                       placeholder="Текущий вес"
                       type="number"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.weight}
                />  кг
            </label>
            {formik.touched.weight && formik.errors.weight ? (
                <div className={styles.errorText}>{formik.errors.weight}</div>
            ) : null}
            <label>
                Укажите ваш желаемый вес:
                <input className={ formik.touched.desiredWeight && formik.errors.desiredWeight ? styles.errorField: '' }
                       id="desiredWeight"
                       name="desiredWeight"
                       placeholder="Желаемый вес"
                       type="number"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.desiredWeight}
                />  кг
            </label>
            {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
                <div className={styles.errorText}>{formik.errors.desiredWeight}</div>
            ) : null}
            <label>
                Укажите ваш рост:
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
                Укажите вашу дату рождения:
                <input className={ formik.touched.dateOfBirth && formik.errors.dateOfBirth ? styles.errorField: '' }
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
                <button type="submit">Отправить</button>
            </div>
        </form>
    );
};

export default SurveyForm;
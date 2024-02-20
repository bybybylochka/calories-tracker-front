import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addEditors, getEditors} from "../../../reducers/editors-reducer";
import EditorsTable from "./EditorsTable";
import AddingEditorForm from "./AddingEditorForm";
import styles from './AdminEditors.module.scss'
import successImage from "../../../assets/tick.png";
import Modal from "../../modal/Modal";

const AdminEditors = () => {
    const [modalActive, setModalActive] = useState(false);
    const editors = useSelector((state)=>state.editors.editors);
    const dispatch = useDispatch();
    const onSubmit = (formData, resetForm) => {
        dispatch(addEditors(formData.fullname, formData.username, formData.password));
        resetForm();
        setModalActive(true);
    }
    useEffect(()=>{
        dispatch(getEditors());
    }, [])
    return (
        <div>
            <div className={styles.addingEditor}>
                <p>Добавление редактора:</p>
                <AddingEditorForm onSubmit={onSubmit}/>
            </div>
            <p>Статистика редакторов:</p>
            <EditorsTable editors={editors}/>
            <Modal active={modalActive} setActive={setModalActive} backgroundColor={'food'}>
                <p className={styles.successMessage}>Автор успешно добавлен!</p>
                <img className={styles.successImage} src={successImage} alt={'success'}/>
            </Modal>
        </div>
    )
}

export default AdminEditors;
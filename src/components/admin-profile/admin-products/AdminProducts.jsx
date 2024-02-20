import React, {useState} from 'react';
import AddingProductForm from "./AddingProductForm";
import styles from "../../editor-profile/editor-main/EditorMain.module.scss";
import successImage from "../../../assets/tick.png";
import Modal from "../../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, findProductByName} from "../../../reducers/product-reducer";
import EditingPersonalDataForm from "../../profile/editing-personal-data/EditingPersonalDataForm";

const AdminProducts = () => {
    const [modalActive, setModalActive] = useState(false);
    //const findingProducts = useSelector((state) => state.products.findingProducts);
    const dispatch=useDispatch();
    const onSubmit =(formData, resetForm) => {
        dispatch(addProduct(formData))
        setModalActive(true);
        resetForm();
    }

    // const findProduct = (formData) => {
    //     dispatch(findProductByName(formData.name));
    // }
    // const FindingProducts=findingProducts.map(product=>{
    //     return <p>{product.name}</p>
    // })
    return (
        <div>
            <p>Добавление нового продукта:</p>
             <AddingProductForm onSubmit={onSubmit}/>
            {/*<div>*/}
            {/*    <EditingPersonalDataForm onSubmit={findProduct}/>*/}
            {/*    <div className={styles.searchedProducts}>*/}
            {/*        {FindingProducts}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Modal active={modalActive} setActive={setModalActive} backgroundColor={'food'}>
                <p className={styles.successMessage}>Продукт успешно добавлен!</p>
                <img className={styles.successImage} src={successImage} alt={'success'}/>
            </Modal>
        </div>
    )
}

export default AdminProducts;
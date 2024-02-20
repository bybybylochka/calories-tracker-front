import React from 'react';
import styles from './AdminProfile.module.scss';
import {Route, Routes} from "react-router-dom";
import Navigation from "./admin-navigation/AdminNavigation";
import EditorMain from "../editor-profile/editor-main/EditorMain";
import AdminUsers from "./admin-users/AdminUsers";
import AdminEditors from "./admin-editors/AdminEditors";
import AdminProducts from "./admin-products/AdminProducts";


const AdminProfile = ({setAdminMenu}) => {
    return (
        <div className={styles.wrapper}>
            <Navigation setAdminMenu={setAdminMenu}/>
            <div className={styles.main}>
                <h3 className={styles.title}>Доступ администратора</h3>
                <Routes>
                    <Route path='/users' element={<AdminUsers setAdminMenu={setAdminMenu}/>}/>
                    <Route path='/editors' element={<AdminEditors/>}/>
                    <Route path='/products' element={<AdminProducts/>}/>
                </Routes>

            </div>
        </div>
    )
}

export default AdminProfile;
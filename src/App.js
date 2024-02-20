import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React, {useState} from 'react';
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import styles from './App.module.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {me} from "./reducers/auth-reducer";
import Survey from "./components/survey/Survey";
import Registration from "./components/registration/Registration";
import Recipes from "./components/recipes/Recipes";
import EditorProfile from "./components/editor-profile/EditorProfile";
import AdminProfile from "./components/admin-profile/AdminProfile";
import Article from "./components/articles/Article";
import Articles from "./components/articles/Articles";
import EditingPerdonalData from "./components/profile/editing-personal-data/EditingPerdonalData";
import EditingPersonalData from "./components/profile/editing-personal-data/EditingPerdonalData";

const App = () => {
    const role = useSelector((state)=>state.auth.role);
    const [editorMenu, setEditorMenu] = useState(false);
    const [adminMenu, setAdminMenu] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(me());
    }, []);
    return (
        <BrowserRouter>
            <div>
                {role==='ROLE_USER'||!role?<Header/>:null}
                {role==='ROLE_EDITOR'&&!editorMenu?<Navigate replace to={'/editorProfile/editorMain'}/>:null}
                {role==='ROLE_ADMIN'&&!adminMenu?<Navigate replace to={'/adminProfile/users'}/>:null}
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/survey' element={<Survey/>}/>
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='/recipes' element={<Recipes/>}/>
                    <Route path='/articles' element={<Articles/>}/>
                    <Route path='/profile/editPersonalData' element={<EditingPersonalData/>}/>
                    <Route path='/editorProfile/*' element={<EditorProfile setEditorMenu={setEditorMenu}/>}/>
                    <Route path='/adminProfile/*' element={<AdminProfile setAdminMenu={setAdminMenu}/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
export default App;

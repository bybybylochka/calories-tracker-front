import {BrowserRouter, Route, Routes} from "react-router-dom";
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

const App = () => {
    const role = useSelector((state)=>state.auth.role);
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(me())
    }, []);
    return (
        <BrowserRouter>
            <div>
                {role==='ROLE_USER'||!role?<Header/>:null}
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/survey' element={<Survey/>}/>
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='/recipes' element={<Recipes/>}/>
                    <Route path='/editorProfile/*' element={<EditorProfile/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

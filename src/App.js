import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import styles from './App.module.scss';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {me} from "./reducers/auth-reducer";
import Survey from "./components/survey/Survey";
import Registration from "./components/registration/Registration";

const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(me())
    }, []);
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/survey' element={<Survey/>}/>
                    <Route path='/registration' element={<Registration/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

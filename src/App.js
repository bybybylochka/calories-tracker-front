import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import styles from './App.module.scss';
import LoginForm from "./components/login/Login";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
      <BrowserRouter>
        <div>
          <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </div>
      </BrowserRouter>
      );
}

export default App;

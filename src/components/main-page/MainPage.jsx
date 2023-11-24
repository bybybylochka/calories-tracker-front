import React from 'react';
import Promo from "../promo/Promo";
import Advantages from "../advantages/Advantages";
import Needs from "../needs/Needs";
import Functionality from "../functionality/Functionality";
import UsefulArticles from "../useful-articles/UsefulArticles";

const MainPage = () => {
    return (
        <div>
            <Promo/>
            <Advantages/>
            <Needs/>
            <Functionality/>
            <UsefulArticles/>
        </div>
    )
}
export default MainPage;
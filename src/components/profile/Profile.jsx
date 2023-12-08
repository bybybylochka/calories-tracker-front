import React from 'react';
import Dashboard from "./dashboard/Dashboard";
import styles from "./Profile.module.scss";
import WaterTracker from "./dashboard/trackers/water-tracker/WaterTracker";
import RecipesTracker from "./dashboard/trackers/recipes-tracker/RecipesTracker";

const Profile = () =>{
    return(
    <div className={styles.coloring}>
        <div className={styles.wrapper}>
            <Dashboard/>
            <div className={styles.trackersWrapper}>
                <WaterTracker/>
                <RecipesTracker/>
            </div>
        </div>
    </div>
)
}

export default Profile;
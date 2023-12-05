import React from 'react';
import Dashboard from "./dashboard/Dashboard";
import styles from "./Profile.module.scss";
import WaterTracker from "./dashboard/trackers/water-tracker/WaterTracker";

const Profile = () =>{
    return(
    <div className={styles.coloring}>
        <div className={styles.wrapper}>
            <Dashboard/>
            <WaterTracker/>
        </div>
    </div>
)
}

export default Profile;
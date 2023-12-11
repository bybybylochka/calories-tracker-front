import styles from "../EditorProfile.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

const EditorNavigationItem = ({image, link, text}) => {
    return (
        <li className={styles.link}>
            <img src={image} alt={'navigation point'}/>
            <NavLink to={'/'+link}
                     className = { navData => navData.isActive
                         ? styles.activeLinkButton
                         : styles.inactiveLinkButton }>{text}</NavLink>
        </li>
    )
}

export default EditorNavigationItem;
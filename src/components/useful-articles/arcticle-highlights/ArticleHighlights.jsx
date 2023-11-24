import React from 'react';
import {NavLink} from "react-router-dom";

const ArticleHighlights = ({image, title, startText}) =>{
    return (
        <div>
            <img src={image} alt={"article"}/>
            <h3>{title}</h3>
            <p>{startText}</p>
            <NavLink to={"/articles"}>Читать полностью</NavLink>
        </div>
    )

}

export default ArticleHighlights;
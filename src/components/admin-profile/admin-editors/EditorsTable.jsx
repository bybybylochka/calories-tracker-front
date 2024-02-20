import React from 'react';
import styles from './AdminEditors.module.scss';

const EditorsTable =({editors})=> {
    console.log(editors);
    const Editors = editors.map((editor)=>{
        return (
            <tr>
                <td>{editor.fullName}</td>
                <td>{editor.recipesCount}</td>
                <td>{editor.articlesCount}</td>
                <td>{editor.totalRecipesLikesCount}</td>
                <td>{editor.weekActivity.toFixed(1)}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className={styles.editorsTable}>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Количество рецептов</th>
                    <th>Количество статей</th>
                    <th>Количество "Нравится"</th>
                    <th>Активность (публикаций/неделю)</th>
                </tr>
                </thead>
                {Editors}
            </table>
        </div>
    )
}

export default EditorsTable;
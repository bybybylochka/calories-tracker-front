import React from 'react';
import styles from './AdminUsers.module.scss'

const UsersTable =({statistic})=> {
    const Statistic = Object.entries(statistic).map(([date, count])=>{
        return (
            <tr>
                <td>{date}</td>
                <td>{count}</td>
            </tr>
        )
    })
    return (
        <div>
            <p>Статистика регистрации пользователей:</p>
            <table className={styles.usersTable}>
                <thead>
                <tr>
                    <th>Дата</th>
                    <th>Количество пользователей</th>
                </tr>
                </thead>
                {Statistic}
            </table>
        </div>
    )
}

export default UsersTable;
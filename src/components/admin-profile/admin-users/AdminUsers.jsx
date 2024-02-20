import React, {useEffect} from 'react';
import styles from './AdminUsers.module.scss';
import userIcon from '../../../assets/user.png';
import UsersTable from "./UsersTable";
import {useDispatch, useSelector} from "react-redux";
import {getRegistrationStatistics, getTodayUsersCount, getTotalUsersCount} from "../../../reducers/users-reducer";

const AdminUsers =({setAdminMenu} ) => {
    const totalUsersCount = useSelector((state)=>state.users.totalCount);
    const todayUsersCount = useSelector((state)=>state.users.todayCount);
    const registrationStatistic = useSelector((state)=>state.users.registrationStatistic);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTotalUsersCount());
        dispatch(getTodayUsersCount());
        dispatch(getRegistrationStatistics());
    }, [])
    useEffect(()=>{
        setAdminMenu(true);
    })
    return (
        <div>
            <p className={styles.title}>Статистика пользователей</p>
            <div className={styles.usersCount}>
                <div>
                    <p>Общее количество пользователей системы:</p>
                    <div className={styles.usersCountBlock}>
                        <img src={userIcon} alt={'user'}/>
                        <p>{totalUsersCount}</p>
                    </div>
                </div>
                <div>
                    <p>Количество новых пользователей за сегодня:</p>
                    <div className={styles.usersCountBlock}>
                        <img src={userIcon} alt={'user'}/>
                        <p>{todayUsersCount}</p>
                    </div>
                </div>
            </div>
            <UsersTable statistic={registrationStatistic}/>
        </div>
    )
}

export default AdminUsers;
import {usersApi} from "../api/api";

const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_USERS_TODAY_COUNT = 'SET_USERS_TODAY_COUNT';
const SET_REGISTRATION_STATISTIC='SET_REGISTRATION_STATISTIC';

const initialState = {
    totalCount: 0,
    todayCount: 0,
    registrationStatistic: {}
}

const UsersReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_USERS_COUNT:
            return {
                ...state,
                ...action.payload
            }
        case SET_USERS_TODAY_COUNT:
            return {
                ...state,
                ...action.payload
            }
        case SET_REGISTRATION_STATISTIC:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}

export const getTotalUsersCount = () => async (dispatch) => {
    let response = await usersApi.getTotalUsersCount();
    if(response){
        dispatch(setTotalUsersCount(response))
    }
}
export const getTodayUsersCount = () => async (dispatch) => {
    let response = await usersApi.getTodayUsersCount();
    if(response){
        dispatch(setTodayUsersCount(response))
    }
}
export const getRegistrationStatistics = () => async (dispatch) => {
    let response = await usersApi.getRegistrationStatistics();
    if(response){
        dispatch(setRegistrationStatistic(response.registeredByDate))
    }
}

export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_USERS_COUNT,
        payload: {totalCount}
    }
}
export const setTodayUsersCount = (todayCount) => {
    return {
        type: SET_USERS_TODAY_COUNT,
        payload: {todayCount}
    }
}
export const setRegistrationStatistic = (registrationStatistic) => {
    return {
        type: SET_REGISTRATION_STATISTIC,
        payload: {registrationStatistic}
    }
}
export default UsersReducer;
import axios from 'axios'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {logger } from 'redux-logger'

const GET_CAMPUSES = 'GET_CAMPUSES'
const SET_CAMPUSES = 'SET_CAMPUSES'
const initialState = []

const campusesReducer = (state=initialState,action)=> {
    switch (action.type){
        case SET_CAMPUSES:
            return action.campuses
    
    default: 
    return state
}
}

//action creator 
export const setCampuses = (campuses)=> {
    return {
        campuses,
        type: SET_CAMPUSES,
        
    }
}
export const getCampuses = ()=> {
    return async (dispatch)=> {
        const {data: campuses} = await axios.get('/campuses')
        console.log(campuses)
        dispatch(setCampuses(campuses))
    }
}
const root = combineReducers({
    campuses: campusesReducer
})


const store = createStore(root, applyMiddleware(thunk,logger))



export default store 

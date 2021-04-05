import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const SET_CAMPUSES = "SET_CAMPUSES";
const GET_CAMPUS = "GET_CAMPUS";
const SET_STUDENTS = "SET_STUDENTS";
const initialState = {
  campuses: [],
  students: [],
};

const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return { ...state, campuses: action.campuses };

    default:
      return state;
  }
};
const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return { ...state, students: action.students };

    default:
      return state;
  }
};

//action creator
export const setCampuses = (campuses) => {
  console.log(campuses);
  return {
    campuses,
    type: SET_CAMPUSES,
  };
};
export const setStudents = (students) => {
  return {
    students,
    type: SET_STUDENTS,
  };
};
export const getCampuses = () => {
  return async (dispatch) => {
    const { data: campuses } = await axios.get("/campuses");
    console.log(campuses);
    dispatch(setCampuses(campuses));
  };
};
export const getCampus = () => {
  return async (dispatch) => {
    const { data: campus } = await axios.get("/campuses/:id");
    console.log(campus);
    dispatch(setCampuses(campus));
  };
};
export const getStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/students");
    console.log(students);
    dispatch(setStudents(students));
  };
};

const root = combineReducers({
  campusesReducer,
  studentsReducer,
});

const store = createStore(root, applyMiddleware(thunk, logger));

export default store;

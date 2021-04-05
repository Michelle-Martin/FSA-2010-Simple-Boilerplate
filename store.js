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
    type: LOAD_CAMPUSES,
    campuses,
  };
};
const _createCampus = (campus) => {
  type: CREATE_CAMPUS, campus;
};
const _deleteCampus = (campus) => ({
  type: DELETE_CAMPUS,
  campus,
});

const _setStudents = (students) => {
  return {
    students,
    type: SET_STUDENTS,
  };
};

//reducers
const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CAMPUSES:
      state = action.campuses;
      break;
    case CREATE_CAMPUS:
      state = [...state, action.campus];
      break;
    case DELETE_CAMPUS:
      state = state.filter((campus) => campus.id !== action.campus.id);
      break;
  }
  return state;
};

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      state = action.students;
      break;
  }
  return state;
};

const root = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
});

//effects
const loadCampuses = () => {
  return async (dispatch) => {
    const campuses = (await axios.get("/campuses")).data;
    dispatch(_loadCampuses(campuses));
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
    dispatch(_setStudents(students));
  };
};

const root = combineReducers({
  campusesReducer,
  studentsReducer,
});

const store = createStore(root, applyMiddleware(thunk, logger));

export default store;

export { loadCampuses, getStudents, deleteCampus, createCampus };

import axios from "axios";
import SERVER from '../serverUrl'

export const getStudentsList = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${SERVER}/api/students`);
      dispatch({
        type: "GET_STUDENTS",
        payload: data.students,
        loading: false,
      });
    } catch (error) {
      console.log("Ошибка получения данных");
    }
  };
};

export const updateStudent = (user, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `${SERVER}/api/students/${id}`,
        user
      );
      dispatch({ type: "UPDATE_STUDENT", payload: data });
    } catch (error) {
      console.log("Ошибка обновления данных");
    }
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `${SERVER}/api/students/${id}`
      )
      dispatch({ type: "DELETE_STUDENT", payload: id });
    } catch (error) {
      console.log("Ошибка удаления данных");
    }
  };
};

export const addStudent = (user) => {
  return async (dispatch) => {
    console.log(user);
    try {
      const { data } = await axios.post(
        `${SERVER}/api/students/`,
        user
      );
      dispatch({ type: "ADD_STUDENT", payload: data });
    } catch (error) {
      console.log("Ошибка добавления данных");
    }
  };
};

const initialState = {
  students: [],
  loading: true,
};
const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STUDENTS":
      return { ...state, students: action.payload };
    case "UPDATE_STUDENT":
      return {
        ...state,
        students: state.students.map((el) => {
          return el._id === action.payload._id ? action.payload : el;
        }),
      };
    case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((el) => el._id !== action.payload),
      };
    default:
      return state;
  }
};

export default studentsReducer;

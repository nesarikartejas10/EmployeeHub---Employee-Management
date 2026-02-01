import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../features/popup/popup.slice";
import employeeReducer from "../features/employee/employee.slice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    employee: employeeReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEmployees,
  getEmployees,
  postEmployees,
  updateEmployee,
} from "./employee.thunk";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get employees
    builder.addCase(getEmployees.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.employees = action.payload;
      state.loading = false;
    });

    builder.addCase(getEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    //post employee
    builder.addCase(postEmployees.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(postEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = [...state.employees, action.payload];
    });

    builder.addCase(postEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    //delete employee
    builder.addCase(deleteEmployees.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(deleteEmployees.fulfilled, (state, action) => {
      state.loading = false;

      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload.id,
      );
    });

    builder.addCase(deleteEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    //update employee
    builder.addCase(updateEmployee.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = state.employees.map((employee) => {
        if (employee.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return employee;
        }
      });
    });

    builder.addCase(updateEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
  },
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;

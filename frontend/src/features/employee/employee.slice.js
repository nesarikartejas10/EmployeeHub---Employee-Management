import { createSlice } from "@reduxjs/toolkit";
import { getEmployees, postEmployees } from "./employee.thunk";

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

    //post employees
    builder.addCase(postEmployees.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(postEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.employees = [...state.employees, action.payload];
    });

    builder.addCase(postEmployees.rejected, (state, _) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
  },
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;

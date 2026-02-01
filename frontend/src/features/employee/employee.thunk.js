import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/axiosInstance";

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employee");
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(
          error.response.statusText || "Failed to fetch employees",
        );
      }

      return rejectWithValue("Network error. Please check your connection.");
    }
  },
);

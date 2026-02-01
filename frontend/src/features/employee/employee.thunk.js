import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/axiosInstance";

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("api/v1/employee");
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

export const postEmployees = createAsyncThunk(
  "employee/postEmployees",
  async (details, { rejectWithValue }) => {
    try {
      const response = await api.post("api/v1/employee", details);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(
          error.response.statusText || "Failed to create employee",
        );
      }
      return rejectWithValue("Network error. Please check your connection.");
    }
  },
);

export const deleteEmployees = createAsyncThunk(
  "employee/deleteEmployees",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`api/v1/employee/${id}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(
          error.response.statusText || "Failed to delete employee",
        );
      }
      return rejectWithValue("Network error. Please check your connection.");
    }
  },
);

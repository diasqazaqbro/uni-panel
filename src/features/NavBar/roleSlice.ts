"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRole {
  userRole: "student" | 'teacher';
}

const initialState: IRole = {
  userRole: "teacher",
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    roleFC: (state, action: PayloadAction<any>) => {
      state.userRole = action.payload; 
    },
  },
});

export const { roleFC} = roleSlice.actions;

export default roleSlice.reducer;

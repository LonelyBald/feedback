import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedbackData: [],
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback: (state, action) => {
      state.feedbackData.push(action.payload);
    },
  },
});
export const { addFeedback } = feedbackSlice.actions;

export const store = configureStore({
  reducer: {
    feedback: feedbackSlice.reducer,
  },
});

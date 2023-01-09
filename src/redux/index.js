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
    // removeTodo: (state, action) =>
    //   void (state.todos = state.todos.filter(
    //     ({ id }) => id !== action.payload.id
    //   )),
    // setToggleCheckBox: (state, action) => {
    //   if (action.payload.toggleCheckBox === false) {
    //     return true;
    //   }
    // },
  },
});
export const { addFeedback } = feedbackSlice.actions;

export const store = configureStore({
  reducer: {
    feedback: feedbackSlice.reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const quizzSlice = createSlice({
  name: "quizz",
  initialState: {
    category: null,
    mode: null,
    room: null,
    opponent: null,
    score: 0,
  },
  reducers: {
    setQuizz: (state, action) => {
      const { category, mode, room, opponent } = action.payload;
      state.category = category;
      state.mode = mode;
      state.room = mode == "solo" ? null : room;
      state.opponent = mode == "solo" ? null : opponent;
    },
    addScore: (state) => {
      state.score += 1;
    },
    quizzDone: (state, action) => {
      state.category = null;
      state.mode = null;
      state.room = null;
      state.opponent = null;
    },
  },
});

export const { setQuizz, quizzDone, addScore } = quizzSlice.actions;

export default quizzSlice.reducer;

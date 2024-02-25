import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "sessions",
  initialState: {
    morningSessions: [],
    lunchSession: [],
    afterNoonSessions: [],
  },

  reducers: {
    updateMorningSessions(state, action) {
      state.morningSessions = action.payload;
    },
    updateLunchSession(state, action) {
      state.lunchSession = action.payload;
    },
    updateAfterNoonSessions(state, action) {
      state.afterNoonSessions = action.payload;
    },
  },
});

export const {
  updateMorningSessions,
  updateLunchSession,
  updateAfterNoonSessions,
} = sessionSlice.actions;

export default sessionSlice.reducer;

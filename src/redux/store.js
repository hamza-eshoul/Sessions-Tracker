import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "./features/sessionSlice";

export default configureStore({
  reducer: {
    session: sessionSlice,
  },
});

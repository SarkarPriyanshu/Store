import { createSelector } from "reselect";

// Input Selector
const SelectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [SelectUser],
  (user) => user.currentUser
);

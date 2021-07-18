import { createSelector } from "reselect";

const selectAuth = state => state.auth;

export const selectUserId = createSelector(
    [selectAuth],
    auth => auth.userId
)
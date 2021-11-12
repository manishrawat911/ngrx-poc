import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";

export const selectUsers = createFeatureSelector<Array<string>>("users");

// export const selectAllUsers = createSelector(
//     selectUsers,
//     (users)
// )

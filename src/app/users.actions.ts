import { createAction, props } from "@ngrx/store";
import { User } from "./shared/user.model";


export const addUser = createAction(
  '[Users] Add User',
  props<{userId: string}>()
)

export const deleteUser = createAction(
  '[Users] Delete User'
  // props<{}>()
)

export const retrieveUsers = createAction(
  '[Users] Get All Users'
)

export const addUserObject = createAction(
  '[Users] Add User',
  props<{user: User}>()
)

export const deleteUserObject = createAction(
  '[Users] Delete User',
  props<{user: string}>()
)

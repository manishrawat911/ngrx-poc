import { createReducer, on } from "@ngrx/store";
import { User } from "./shared/user.model";
import { addUser, addUserObject, deleteUserObject, retrieveUsers } from "./users.actions";

export const inititalState: Array<string> = [];
export const initialObjState: Array<User> = [];

export const usersReducer = createReducer(
  inititalState,
  on(addUser, (state , {userId }) => {

    if (state.indexOf('') > -1 ) return state;
    return [...state, userId]
  }),
  on(retrieveUsers, state => {return state})
)

export const usersObjReducer = createReducer(
  initialObjState,
  on(addUserObject, (state, {user}) =>{
    return [...state, user]
  })
  ,
  on(deleteUserObject, (state, {user}) =>{
    return state.filter(elem => elem.userId != user)
  })
)

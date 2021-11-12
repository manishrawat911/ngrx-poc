import { User } from "./shared/user.model";


export interface AppState{
  users: Array<string>;
  usersObj: Array<User>;
}

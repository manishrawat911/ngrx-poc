import { AgUser } from "./ag-user.model";
import { User } from "./user.model";

export class UserUitilty {

  public static userToAgData(users: Array<User>){

    let data: AgUser[] = [];

    data = users.map(element => {
      return {
        userId: element.userId,
        name: element.firstName.concat(" ").concat(element.lastName),
        age: element.age,
        gender: element.gender,
        role: element.role,
        yoe: element.yearsOfExperience
      }
    })

    return data;

  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef } from 'ag-grid-community';
import { CellRendererComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';
import { AppState } from '../app.state';
import { User } from '../shared/user.model';
import { UserUitilty } from '../shared/users.utility';
import { deleteUser, deleteUserObject, retrieveUsers } from '../users.actions';
import { DelCellRenderer } from './del-cell-renderer.component';

@Component({
  selector: 'app-demo-main',
  templateUrl: './demo-main.component.html',
  styleUrls: ['./demo-main.component.css']
})
export class DemoMainComponent implements OnInit {

  users: Array<string> = ["Abc", "DEF", "GHI"];
  usersList: Array<User> = [];


  frameworkComponents: any;
  agColumnsDef: ColDef[] = [
    {
      field: "userId", headerName: "Edit",
      cellRenderer: 'delCellRenderer',
      cellRendererParams: {
        clicked: function (field: any) {
          // alert(`${field} was clicked`);
          // this.deleteCurrentUser(`${field}`);

          // this.store.dispatch(deleteUserObject({ user: `${field}` }));
        }
        // clicked: deleteCurrentUser(field)
      },
      maxWidth: 75
    },
    { field: "name", headerName: "CustomName Header" },
    { field: "gender" },
    { field: "age" },
    { field: "role" },
    { field: "yoe", headerName: "Years of Experience" },
  ];


  // agData = [
  //   { name: "Manish", gender: "Male", age: 22, role: "Front End", yoe: 4}
  // ]

  agData = UserUitilty.userToAgData(this.usersList);

  constructor(private store: Store<AppState>) {
    this.frameworkComponents = this.frameworkComponents = {
      delCellRenderer: DelCellRenderer
    };
  }

  ngOnInit(): void {
    // this.users =
    // this.users = this.store.s;
    this.store.subscribe(state => this.users = state.users);
    this.store.subscribe(state => {
      this.usersList = state.usersObj;
      this.agData = UserUitilty.userToAgData(this.usersList);
    })
    this.store.subscribe(state => console.log(state.usersObj))

  }

  deleteCurrentUser(userId: string) {
    this.store.dispatch(deleteUserObject({ user: userId }));
  }

}

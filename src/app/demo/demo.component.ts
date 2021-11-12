import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { User } from '../shared/user.model';
import { addUser, addUserObject } from '../users.actions';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  email: string = 'defult';
  user: any = {};

  constructor(private store: Store<AppState>) {
    // this.email = "custom text";
   }

  ngOnInit(): void {
  }

  myFunction(): void{
    console.log(this.user);
    this.user.userId = this.user.firstName+this.user.lastName;
    this.store.dispatch(addUserObject({user: this.user}));
    this.user = {};
  }

  sayHi(){
    console.log('Hi');
    this.store.dispatch(addUser({userId: this.email}))
    // console.log(this.store.subscribe());
    this.store.subscribe( state => console.log(state));
    this.store.subscribe(state => console.log(state.usersObj))
  }

}

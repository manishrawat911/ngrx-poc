import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { usersObjReducer, usersReducer } from './users.reducer';
import { DemoComponent } from './demo/demo.component';
import { DemoMainComponent } from './demo-main/demo-main.component';
import { AgGridModule } from 'ag-grid-angular';
import { DelCellRenderer } from './demo-main/del-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoMainComponent,
    DelCellRenderer
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {users: usersReducer,
      usersObj: usersObjReducer}
    ),
    FormsModule,
    AgGridModule.withComponents([DelCellRenderer])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

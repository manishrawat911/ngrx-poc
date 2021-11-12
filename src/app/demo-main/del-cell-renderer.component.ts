import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRenderer, ICellRendererParams } from "ag-grid-community";
import { AppState } from "../app.state";
import { deleteUserObject } from "../users.actions";

@Component({
  selector: 'del-cell-rederer',
  template: `<button (click)="btnClickedHandler($event)">Delete</button>`
})
export class DelCellRenderer implements ICellRendererAngularComp{

  constructor(private store: Store<AppState>){}

  // ngOnDestroy(): void {
  //   // throw new Error("Method not implemented.");
  // }
  private params: any;
  refresh(params: ICellRendererParams): boolean {
    // throw new Error("Method not implemented.");
    return false;
  }
  agInit(params: any): void {
    this.params =params;
    // throw new Error("Method not implemented.");
  }

  btnClickedHandler(event:any) {
    // this.params.clicked(this.params.value);
    console.log(this.params)
    this.store.dispatch(deleteUserObject({user: this.params.value}));
  }

}

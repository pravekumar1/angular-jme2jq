import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
accounts = [
  {
    name: 'Master Account',
    status: 'Active'
  },
  {
    name: 'Test Account',
    status: 'Active'
  },
  {
    name: 'Hidden Account',
    status: 'Active'
  }
];

constructor() {}

onAccountAdded(newAccount: {name: string, status: string}) {
this.accounts.push(newAccount);
}

onStatusChnaged(updateInfo: {id: number, newStatus: string}) {
this.accounts[updateInfo.id].status = updateInfo.newStatus;
}

}

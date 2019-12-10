import { Component, OnInit } from '@angular/core';

import {AccountsService} from './accounts.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
accounts: {name: string, status: string}[]= [];
constructor(private accountsService: AccountsService) {}

onAccountAdded(newAccount: {name: string, status: string}) {
this.accounts.push(newAccount);
}

ngOnInit() {
  this.accounts = this.accountsService.accounts;
}
onStatusChnaged(updateInfo: {id: number, newStatus: string}) {
this.accounts[updateInfo.id].status = updateInfo.newStatus;
}

}

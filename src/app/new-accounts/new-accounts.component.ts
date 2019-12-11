import { Component, OnInit, } from "@angular/core";

import { LoggingService } from "../logging.service";
import {AccountsService} from '../accounts.service';

@Component({
  selector: "app-new-accounts",
  templateUrl: "./new-accounts.component.html",
  styleUrls: ["./new-accounts.component.css"]
})
export class NewAccountsComponent implements OnInit {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  ngOnInit() {}

  onCreateAccount(accountName: string, accountStatus: string) {
  this.accountsService.addAccount(accountName, accountStatus);
  }
}

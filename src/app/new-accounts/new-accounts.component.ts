import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-accounts",
  templateUrl: "./new-accounts.component.html",
  styleUrls: ["./new-accounts.component.css"]
})
export class NewAccountsComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  constructor(private loggingService: LoggingService) {}

  ngOnInit() {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }
}

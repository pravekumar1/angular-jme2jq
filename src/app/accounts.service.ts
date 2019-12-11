import { Injectable } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "Active"
    },
    {
      name: "Test Account",
      status: "In Active"
    },
    {
      name: "Hidden Account",
      status: "Hidden"
    }
  ];
  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}

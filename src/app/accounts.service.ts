import { Injectable } from "@angular/core";

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: "Master Account",
      status: "Active"
    },
    {
      name: "Test Account",
      status: "Active"
    },
    {
      name: "Hidden Account",
      status: "Active"
    }
  ];
  constructor() {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
  }
}

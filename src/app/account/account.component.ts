import { Component, OnInit, Input } from '@angular/core';

import { LoggingService } from "../logging.service";
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit() {
  }

  setStatusTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }

}
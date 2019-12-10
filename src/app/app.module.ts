import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewAccountsComponent } from './new-accounts/new-accounts.component';
import { AccountComponent } from './account/account.component';
import { LoggingService } from './logging.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NewAccountsComponent, AccountComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoggingService]
})
export class AppModule { }

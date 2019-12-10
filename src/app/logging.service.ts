import { Injectable } from '@angular/core';

// @Injectable()
export class LoggingService {

  constructor() { }
logStatusChange(status: string)  {
    console.log('A Server status is changed to new statu: ' + status);

}
}
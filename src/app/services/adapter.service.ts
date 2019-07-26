import { Injectable } from '@angular/core';
import { IAdapter } from '../interfaces/adapter.interface';

@Injectable({
  providedIn: 'root'
})
export class AdapterService implements IAdapter {
  constructor() {}

  mapModeltoApi() {
    //TODO
  }
}

import { Injectable } from '@angular/core';
import { IAdapter } from '../interfaces/adapter.interface';
import { Asset } from '../models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class AdapterService implements IAdapter<Asset> {
  constructor() {}

  mapModelToApi(item: any): Asset {
    return new Asset(
      item.title,
      item.thumbnail
    );
  }
}

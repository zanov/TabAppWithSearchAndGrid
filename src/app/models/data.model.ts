import { IAssetItem } from '../interfaces/iasset-item.interface';
import { IDataModel } from '../interfaces/data.interface';

export class DataModel implements IDataModel {
  tabId: number;
  data: IAssetItem[];

  constructor(tabId: number, data: IAssetItem[]) {
    this.tabId = tabId;
    this.data = data;
  }
}

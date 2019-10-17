import { Injectable } from '@angular/core';
import { DataModel } from '../models/data.model';
import { IAssetItem } from '../interfaces/iasset-item.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataModelService {
  private subject = new BehaviorSubject<any>([]);
  dataModel$: Observable<DataModel[]> = this.subject.asObservable();

  constructor() {}

  getDataModel(): Observable<DataModel[]> {
    return this.dataModel$;
  }

  getDataModelLength(): number {
    const dataModel = this.cloneModelData();
    return dataModel.length;
  }

  addTabToDataModel() {
    const dataModel = this.cloneModelData();
    dataModel.push(this.createTab(this.getDataModelLength()));
    this.subject.next(dataModel);
  }

  setDataToDataModel(index: number, assetItem: IAssetItem[]) {
    const dataModel = this.cloneModelData();
    dataModel.filter(item => {
      if (item.tabId === index) {
        item.data = assetItem;
      }
    });
    this.subject.next(dataModel);
  }

  removeTabAndData(index: number) {
    const dataModel = this.cloneModelData();
    dataModel.splice(index, 1);
    this.subject.next(dataModel);
  }

  private createTab(index: number): DataModel {
    return new DataModel(index, []);
  }

  private cloneModelData() {
    return [...this.subject.getValue()];
  }
}

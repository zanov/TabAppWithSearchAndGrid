import { IAssetItem } from '../interfaces/iasset-item.interface';

export class Asset implements IAssetItem {
  public Title: string;
  public Thumbnail: string;

  constructor(title: string, thumbnail: string) {
    this.Title = title;
    this.Thumbnail = thumbnail;
  }
}

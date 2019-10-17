import { Injectable } from '@angular/core';
import { IAdapter } from '../interfaces/adapter.interface';
import { Asset } from '../models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class AdapterService implements IAdapter<Asset> {
  constructor() {}

  mapModelToApi(response: any): Asset[] {
    const preparedResponse = this.prepareResponse(response);
    const assets: Asset[] = [];
    preparedResponse.map(el => {
      const newAsset = new Asset(
        this.prepareTitle(el),
        this.prepareThumbnail(el)
      );
      assets.push(newAsset);
    });
    return assets;
  }

  private prepareResponse(res) {
    let result = [];
    if (res.length > 0) {
      res.map(el => {
        if (el.items.length > 0) {
          el.items.map(r => (result = [...result, r]));
        }
      });
    }
    return result;
  }

  private prepareTitle(assetInputs: any): string {
    let title;
    if (assetInputs.snippet.title) {
      title = assetInputs.snippet.title;
    } else {
      title = assetInputs.title;
    }
    return title;
  }

  private prepareThumbnail(assetInputs: any): string {
    let thumb;
    if (assetInputs.pagemap && assetInputs.pagemap.cse_image) {
      thumb = assetInputs.pagemap.cse_image[0].src;
    } else if (assetInputs.snippet.thumbnails) {
      thumb = assetInputs.snippet.thumbnails.high.url;
    }
    return thumb;
  }
}

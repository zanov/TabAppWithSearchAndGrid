import { Component, Input } from '@angular/core';
import { IAssetItem } from '../../interfaces/iasset-item.interface';

@Component({
  selector: 'app-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.scss']
})
export class AssetItemComponent {
  @Input() assetItemInputs: IAssetItem;
  constructor() {}
}

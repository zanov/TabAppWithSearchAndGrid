import { Component } from '@angular/core';
import { AssetsService } from '../../services/assets.service';
import { IAssetItem } from '../../interfaces/iasset-item.interface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  assetsResult: IAssetItem;
  constructor(private _assetsService: AssetsService) {}

  onSubmit(event: any) {
    this._assetsService.getAssets(event.target.value).subscribe(results => {
      this.assetsResult = results[0].items;
    });
  }
}

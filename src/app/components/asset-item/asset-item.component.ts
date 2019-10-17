import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAssetItem } from '../../interfaces/iasset-item.interface';
import { AssetModalComponent } from '../asset-modal/asset-modal.component';

@Component({
  selector: 'app-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetItemComponent implements OnInit {
  @Input() assetItemInputs: IAssetItem;
  assetItem: IAssetItem = {};

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.assetItem = {
      Title: this.assetItemInputs.Title,
      Thumbnail: this.assetItemInputs.Thumbnail
    };
  }

  openModal(): void {
    this.dialog.open(AssetModalComponent, {
      width: '50%',
      data: this.assetItem
    });
  }
}

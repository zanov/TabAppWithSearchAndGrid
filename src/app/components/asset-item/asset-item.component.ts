import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { IAssetItem } from '../../interfaces/iasset-item.interface';
import { AssetModalComponent } from '../asset-modal/asset-modal.component';

@Component({
  selector: 'app-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetItemComponent implements OnInit {
  @Input() assetItemInputs: any;
  assetItem: IAssetItem = {};

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.assetItem.Title = this.assetItemInputs.title;
    this.assetItem.Thumbnail = this.assetItemInputs.pagemap.cse_image
      ? this.assetItemInputs.pagemap.cse_image[0].src
      : null;
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AssetModalComponent, {
      width: '50%',
      data: this.assetItem
    });
  }
}

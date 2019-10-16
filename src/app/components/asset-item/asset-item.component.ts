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
import { DataModelService } from '../../services/data-model.service';

@Component({
  selector: 'app-asset-item',
  templateUrl: './asset-item.component.html',
  styleUrls: ['./asset-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetItemComponent implements OnInit {
  @Input() assetItemInputs: any;
  assetItem: IAssetItem = {};

  constructor(public dialog: MatDialog, private dataModel: DataModelService) {}

  ngOnInit() {
    this.setAssetProperties(this.assetItemInputs);
  }

  setAssetProperties(assetInputs: any) {
    let title;
    if (assetInputs.snippet.title) {
      title = assetInputs.snippet.title;
    } else {
      title = assetInputs.title;
    }
    this.assetItem = {
      Title: title,
      Thumbnail: this.prepareThumbnail(assetInputs)
    };
  }

  private prepareThumbnail(assetInputs: any) {
    let thumb;
    if (assetInputs.pagemap && assetInputs.pagemap.cse_image) {
      thumb = assetInputs.pagemap.cse_image[0].src;
    } else if (assetInputs.snippet.thumbnails) {
      thumb = assetInputs.snippet.thumbnails.high.url;
    }
    return thumb;
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AssetModalComponent, {
      width: '50%',
      data: this.assetItem
    });
  }
}

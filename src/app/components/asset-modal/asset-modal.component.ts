import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { IAssetItem } from '../../interfaces/iasset-item.interface';

@Component({
  selector: 'app-asset-modal',
  templateUrl: './asset-modal.component.html',
  styleUrls: ['./asset-modal.component.scss']
})
export class AssetModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AssetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAssetItem
  ) {}

  ngOnInit() {}

  onClose(): void {
    this.dialogRef.close();
  }
}

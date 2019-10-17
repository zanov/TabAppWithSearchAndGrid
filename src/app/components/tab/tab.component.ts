import { Component, OnInit, Input } from '@angular/core';
import { AssetsService } from '../../services/assets.service';
import { DataModelService } from '../../services/data-model.service';
import { IAssetItem } from '../../interfaces/iasset-item.interface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  assetsResult: IAssetItem[] = [];
  @Input() tabIndex: number;
  constructor(
    private assetsService: AssetsService,
    private dataModelService: DataModelService
  ) {}

  ngOnInit() {}

  onSubmit(event: any) {
    this.assetsResult.length = 0;
    this.assetsService.getAssets(event.target.value).subscribe(res => {
      if (res.length > 0) {
        res.map(r => (this.assetsResult = [...this.assetsResult, r]));
        this.setDataByTabIndex(this.tabIndex, this.assetsResult);
      }
    });
  }

  private setDataByTabIndex(index: number, assets: IAssetItem[]) {
    this.dataModelService.setDataToDataModel(index, assets);
  }
}

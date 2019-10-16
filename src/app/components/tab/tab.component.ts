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
  assetsResult: any[] = [];
  @Input() tabIndex: number;
  constructor(private assetsService: AssetsService, private dataModelService: DataModelService) {}

  ngOnInit() {}

  setDataByIndex(index: number) {
    this.dataModelService.setDataToDataModel(index, this.assetsResult);
  }

  assignItemsToAssets(res) {
    if (res.length > 0) {
      res.forEach(el => {
        el.items.map(r => this.assetsResult = [...this.assetsResult, r]);
      });
    }
  }

  onSubmit(event: any) {
    this.assetsResult.length = 0;
    this.assetsService.getAssets(event.target.value).subscribe(res => {
      this.assignItemsToAssets(res);
      this.setDataByIndex(this.tabIndex);
      console.log(this.dataModelService.getDataModel());
    });
  }
}

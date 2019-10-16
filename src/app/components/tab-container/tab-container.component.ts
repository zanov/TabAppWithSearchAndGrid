import { Component, OnInit } from '@angular/core';
import { DataModelService } from '../../services/data-model.service';
import { DataModel } from '../../models/data.model';

@Component({
  selector: "app-tab-container",
  templateUrl: "./tab-container.component.html",
  styleUrls: ["./tab-container.component.scss"]
})
export class TabContainerComponent implements OnInit {
  tabs: DataModel[] = [];
  constructor(private dataModelService: DataModelService) {}

  ngOnInit() {
    this.dataModelService.getDataModel().subscribe(res => {
      this.tabs = res;
    });
  }

  addTab() {
    this.dataModelService.addTabToDataModel();
  }

  removeTab(index: number) {
    this.dataModelService.removeTabAndData(index);
  }
}

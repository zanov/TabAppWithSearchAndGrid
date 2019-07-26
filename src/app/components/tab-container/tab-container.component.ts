import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  tabs: any = [];
  constructor() {}

  ngOnInit() {}

  addTab() {
    this.tabs.push('Tab');
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

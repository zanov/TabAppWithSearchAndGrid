import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private _fb: FormBuilder, private _assetsService: AssetsService) {
    this.searchForm = this._fb.group({
      keyword: [null]
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.searchForm
      .get('keyword')
      .valueChanges.pipe(debounceTime(500))
      .subscribe(val => {
        this._assetsService.getAssets(val).subscribe(results => {
          console.log(results);
          return results;
        });
      });
  }
}

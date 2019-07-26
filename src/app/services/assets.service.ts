import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAssetItem } from '../interfaces/iasset-item.interface';
import { AdapterService } from './adapter.service';

@Injectable()
export class AssetsService {
  private _apiKey: string = 'AIzaSyDbI73JCc4vVmsSzxL0t6HeEaZ98y2TD28';
  private _searchEngineId: string = '003043046789438244932:yhvbny6kqqi';
  private _googleApiUrl: string = 'https://www.googleapis.com/customsearch/v1';
  private _youTubeApiUrl: string = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDbI73JCc4vVmsSzxL0t6HeEaZ98y2TD28&part=snippet,contentDetails,statistics,status';

  constructor(
    private _http: HttpClient,
    private _adapterService: AdapterService
  ) {}

  getAssets(name: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('key', this._apiKey);
    params = params.append('cx', this._searchEngineId);
    params = params.append('q', name);

    let googleApiRequest = this._http
      .get(this._googleApiUrl, {
        params: params
      })
      .pipe(catchError(error => of(error)));

    let youTubeApiRequest = this._http
      .get(this._youTubeApiUrl)
      .pipe(catchError(error => of(error)));

    return forkJoin([googleApiRequest, youTubeApiRequest]);
  }
}

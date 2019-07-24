import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AssetsService {
  private _apiKey: string = 'AIzaSyDbI73JCc4vVmsSzxL0t6HeEaZ98y2TD28';
  private _searchEngineId: string = '003043046789438244932:yhvbny6kqqi';
  private _googleApiUrl: string = 'https://www.googleapis.com/customsearch/v1';
  private _youTubeApiUrl: string = 'https://swapi.co/api/people/1';

  constructor(private _http: HttpClient) {}

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
      .get(this._youTubeApiUrl, {
        params: params
      })
      .pipe(catchError(error => of(error)));

    return forkJoin([googleApiRequest]);
  }
}

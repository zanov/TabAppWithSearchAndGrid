import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, Subscription, of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IAssetItem } from '../interfaces/iasset-item.interface';
import { AdapterService } from './adapter.service';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  private googleApiKey = 'AIzaSyDbI73JCc4vVmsSzxL0t6HeEaZ98y2TD28';
  private googleSearchEngineId = '003043046789438244932:yhvbny6kqqi';
  private googleApiUrl = 'https://www.googleapis.com/customsearch/v1';

  private youTubeId = '7lCDEYXw3mM';
  private youTubeKey = 'AIzaSyDbI73JCc4vVmsSzxL0t6HeEaZ98y2TD28';
  private youTubeApiUrl =
    'https://www.googleapis.com/youtube/v3/videos?order=date&type=video&part=snippet';

  constructor(
    private http: HttpClient,
    private adapterService: AdapterService
  ) {}

  private prepareGoogleParams(name: string) {
    let paramsGoogle = new HttpParams();
    paramsGoogle = paramsGoogle.set('key', this.googleApiKey);
    paramsGoogle = paramsGoogle.set('cx', this.googleSearchEngineId);
    paramsGoogle = paramsGoogle.set('q', name);
    return paramsGoogle;
  }

  private prepareYouTubeParams(name: string) {
    let paramsYouTube = new HttpParams();
    paramsYouTube = paramsYouTube.set('id', this.youTubeId);
    paramsYouTube = paramsYouTube.set('key', this.youTubeKey);
    paramsYouTube = paramsYouTube.set('q', name);
    return paramsYouTube;
  }

  private prepareRequest(apiUrl: string, paramsHttp: HttpParams) {
    return this.http.get(apiUrl, { params: paramsHttp }).pipe(map(res => res));
  }

  getAssets(name: string): Observable<IAssetItem[]> {
    const googleApiRequest = this.prepareRequest(
      this.googleApiUrl,
      this.prepareGoogleParams(name)
    );
    const youTubeApiRequest = this.prepareRequest(
      this.youTubeApiUrl,
      this.prepareYouTubeParams(name)
    );

    return forkJoin([googleApiRequest, youTubeApiRequest])
      .pipe(map(res => this.adapterService.mapModelToApi(res)))
      .pipe(catchError(error => of(error)));
  }
}

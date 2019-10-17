export interface IAdapter<T> {
  mapModelToApi(response: any): T[];
}

export interface IAdapter<T> {
  mapModelToApi(item: any): T;
}

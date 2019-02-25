export class PagingInfo {

  private _first: number;
  private _pageSize: number;
  private _currentPage: number;
  private _count: number;

  constructor() {
    this._first = 0;
    this._pageSize = 5;
    this._currentPage = 0;
  }

  get first(): number {
    return this._first;
  }

  set first(value: number) {
    this._first = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    this._currentPage = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }
}

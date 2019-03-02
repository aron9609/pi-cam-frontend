export class PagingResponseInfo {

  private _data: Array<any>;
  private _count: number;
  private _lastIndex: number;

  constructor() {
  }

  get data(): Array<any> {
    return this._data;
  }

  set data(value: Array<any>) {
    this._data = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get lastIndex(): number {
    return this._lastIndex;
  }

  set lastIndex(value: number) {
    this._lastIndex = value;
  }
}

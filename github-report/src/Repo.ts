export class Repo {
  public get forkCount(): number {
    return this._forkCount;
  }
  public set forkCount(value: number) {
    this._forkCount = value;
  }
  public get size(): number {
    return this._size;
  }
  public set size(value: number) {
    this._size = value;
  }
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  constructor(
    private _name: string,
    private _description: string,
    private _url: string,
    private _size: number,
    private _forkCount: number
  ) {}
}

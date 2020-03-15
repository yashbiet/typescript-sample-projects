import { Repo } from "./Repo";

export class User {
  private _repos: Repo[] = [];

  public getrepos(): Repo[] {
    return this._repos;
  }
  public setrepos(value: Repo[]) {
    this._repos = value;
  }

  public getfollowerCount(): number {
    return this._followerCount;
  }
  public setfollowerCount(value: number) {
    this._followerCount = value;
  }
  public getrepoCount(): string {
    return this._repoCount;
  }
  public setrepoCount(value: string) {
    this._repoCount = value;
  }
  public getfullName(): string {
    return this._fullName;
  }
  public setfullName(value: string) {
    this._fullName = value;
  }
  public getlogin(): string {
    return this._login;
  }
  public setlogin(value: string) {
    this._login = value;
  }
  constructor(
    private _login: string,
    private _fullName: string,
    private _repoCount: string,
    private _followerCount: number
  ) {}
}

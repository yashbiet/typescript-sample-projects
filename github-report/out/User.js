"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(_login, _fullName, _repoCount, _followerCount) {
        this._login = _login;
        this._fullName = _fullName;
        this._repoCount = _repoCount;
        this._followerCount = _followerCount;
        this._repos = [];
    }
    User.prototype.getrepos = function () {
        return this._repos;
    };
    User.prototype.setrepos = function (value) {
        this._repos = value;
    };
    User.prototype.getfollowerCount = function () {
        return this._followerCount;
    };
    User.prototype.setfollowerCount = function (value) {
        this._followerCount = value;
    };
    User.prototype.getrepoCount = function () {
        return this._repoCount;
    };
    User.prototype.setrepoCount = function (value) {
        this._repoCount = value;
    };
    User.prototype.getfullName = function () {
        return this._fullName;
    };
    User.prototype.setfullName = function (value) {
        this._fullName = value;
    };
    User.prototype.getlogin = function () {
        return this._login;
    };
    User.prototype.setlogin = function (value) {
        this._login = value;
    };
    return User;
}());
exports.User = User;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(_name, _description, _url, _size, _forkCount) {
        this._name = _name;
        this._description = _description;
        this._url = _url;
        this._size = _size;
        this._forkCount = _forkCount;
    }
    Object.defineProperty(Repo.prototype, "forkCount", {
        get: function () {
            return this._forkCount;
        },
        set: function (value) {
            this._forkCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Repo;
}());
exports.Repo = Repo;

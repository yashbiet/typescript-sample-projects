"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var User_1 = require("./User");
var Repo_1 = require("./Repo");
var OPTIONS = {
    headers: {
        "User-Agent": "request"
    },
    json: true
};
var GitHubAPIService = /** @class */ (function () {
    function GitHubAPIService() {
    }
    GitHubAPIService.prototype.getUserInfo = function (userName, cb) {
        var uri = "https://api.github.com/users/" + userName;
        // console.log("uri::" + uri);
        request.get(uri, OPTIONS, function (error, response, body) {
            if (error)
                console.log(error);
            //if (response) console.log(response);
            if (body) {
                var user = new User_1.User(body.login, body.name, body.public_repos, body.followers);
                cb(user);
            }
        });
    };
    GitHubAPIService.prototype.getRepos = function (userName, cb) {
        var uri = "https://api.github.com/users/" + userName + "/repos";
        request.get(uri, OPTIONS, function (error, response, body) {
            if (error)
                console.log(error);
            if (body) {
                var repos = body.map(function (repo) {
                    return new Repo_1.Repo(repo.name, repo.description, repo.html_url, repo.size, repo.forks);
                });
                cb(repos);
            }
        });
    };
    return GitHubAPIService;
}());
exports.GitHubAPIService = GitHubAPIService;

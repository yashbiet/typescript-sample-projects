"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubAPIService_1 = require("./GitHubAPIService");
var _ = __importStar(require("lodash"));
var service = new GitHubAPIService_1.GitHubAPIService();
if (process.argv.length < 3)
    console.log("Please pass username as an argument");
else {
    var userName_1 = process.argv[2];
    service.getUserInfo(userName_1, function (user) {
        service.getRepos(userName_1, function (repos) {
            var repoArr = _.sortBy(repos, [function (repo) { return repo.size * -1; }]);
            user.setrepos(_.take(repoArr, 3));
            console.log(user);
        });
    });
}

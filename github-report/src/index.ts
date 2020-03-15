import { GitHubAPIService } from "./GitHubAPIService";
import * as _ from "lodash";
import { User } from "./User";
import { Repo } from "./Repo";

let service = new GitHubAPIService();
if (process.argv.length < 3) console.log("Please pass username as an argument");
else {
  let userName = process.argv[2];
  service.getUserInfo(userName, (user: User) => {
    service.getRepos(userName, (repos: Repo[]) => {
      let repoArr = _.sortBy(repos, [(repo: Repo) => repo.size * -1]);
      user.setrepos(_.take(repoArr, 5));
      console.log(user);
    });
  });
}

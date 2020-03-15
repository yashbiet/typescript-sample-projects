import * as request from "request";
import { User } from "./User";
import { Repo } from "./Repo";

const OPTIONS = {
  headers: {
    "User-Agent": "request"
  },
  json: true
};
export class GitHubAPIService {
  getUserInfo(userName: string, cb: (user: User) => any) {
    let uri = `https://api.github.com/users/${userName}`;
    // console.log("uri::" + uri);
    request.get(uri, OPTIONS, (error: any, response: any, body: any) => {
      if (error) console.log(error);
      //if (response) console.log(response);
      if (body) {
        let user = new User(
          body.login,
          body.name,
          body.public_repos,
          body.followers
        );
        cb(user);
      }
    });
  }

  getRepos(userName: string, cb: (repos: Repo[]) => any) {
    const uri = `https://api.github.com/users/${userName}/repos`;
    request.get(uri, OPTIONS, (error: any, response: any, body: any) => {
      if (error) console.log(error);
      if (body) {
        let repos = body.map(
          (repo: any) =>
            new Repo(
              repo.name,
              repo.description,
              repo.html_url,
              repo.size,
              repo.forks
            )
        );
        cb(repos);
      }
    });
  }
}

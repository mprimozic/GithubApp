import { GITHUB_BASE_URL } from "../helpers/constants/githubapi";
import { IRepo } from "../helpers/interfaces/IRepo";

export const getRepo = async (username: string) => {
    const repositories: Array<IRepo> = []

    const repoData = await fetch(GITHUB_BASE_URL + username + '/repos')
                            .then(response => response.json())
                            .catch(err => console.error(err));
    for (const repo of repoData) {  
        repositories.push({
            id: repo.id,
            name: repo.name
        });                 
    }
    return repositories;
}
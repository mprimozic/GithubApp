import { GITHUB_BASE_URL } from "../helpers/constants/githubapi";
import { IUser } from "../helpers/interfaces/IUser";

export const getUser = async (username: string): Promise<any> => {
    const user: IUser = {
        avatar_url: '',
        name: '',
        location: '',
        bio: ''
      };
    const userData = await fetch( GITHUB_BASE_URL + username)
                    .then(response => response.json())
                    .catch(err => console.error(err));

    if(userData) {
        user.avatar_url = userData.avatar_url;
        user.name = userData.name;
        user.location = userData.location;
        user.bio = userData.bio;
    }

    return user;
}
   

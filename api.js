const token = 'API TOKEN';

class GithubCall{

    async gettingData(inputValue){
        // fetching user data
        const fetching = await fetch(`https://api.github.com/users/${inputValue}`, {
            headers: {
                Authorization: `token ${token}`
            }
        });
        const response = await fetching.json();

        // fetching repos
        const fetchingRepos = await fetch(`https://api.github.com/users/${inputValue}/repos`, {
            headers: {
                Authorization: `token ${token}`
            }
        });
            const responseRepos = await fetchingRepos.json();
    
            return {
                response,
                responseRepos
            };
    }
}
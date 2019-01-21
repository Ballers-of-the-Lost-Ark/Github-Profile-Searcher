// I only did this because I did not want to set up a server and a database to secure the token in a back
// channel. I will not do this is a real application.

const token = '3df6b3bc404dab3d418c294a8a4a76d46c29ad04';


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
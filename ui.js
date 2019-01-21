class Ui{
    displayingData(data, input){
        // Image insertion
        const profile = document.querySelector('.profile-img');
        const profileBtn = document.getElementById('profile-btn');

        if(profile.firstElementChild.className === 'inserted-img'){
            profile.firstElementChild.remove();
            
            const img = document.createElement('img');
            img.className = 'inserted-img';
            img.setAttribute('src', `${data.response.avatar_url}`);
            img.setAttribute('alt', `${input}'s profile picture`);
            profile.insertBefore(img, profileBtn);
        }else{
            const img = document.createElement('img');
            img.className = 'inserted-img';
            img.setAttribute('src', `${data.response.avatar_url}`);
            img.setAttribute('alt', `${input}'s profile picture`);
            profile.insertBefore(img, profileBtn);
        }

        // View profile insertion
        profileBtn.setAttribute('href', `${data.response.html_url}`);
        profileBtn.setAttribute('target', '_blank');

        // Adding box1 info
        const box1 = document.querySelector('.box1');

        box1.firstElementChild.innerHTML = `Followers: ${data.response.followers}`;
        box1.children[1].innerHTML = `Public Gists: ${data.response.public_gists}`;
        box1.children[2].innerHTML = `Public Repos: ${data.response.public_repos}`;

        // Adding box2 info
        const box2 = document.querySelector('.box2');

        box2.firstElementChild.innerHTML = `Member since: ${data.response.created_at}`;
        box2.children[1].innerHTML = `Company: ${data.response.company}`;
        box2.children[2].innerHTML = `Location: ${data.response.location}`;

        // Latest posts
        const latestPost = document.querySelector('.latest-posts');
        document.querySelector('.bottom-box').style.display = 'block';

        let output;
        data.responseRepos.forEach((x) => {
            output +=    
                `<div class="box3">
                        <div class=box5>
                        <a class="latest-a" href="${x.html_url}" target="_blank">${x.name}</a>
                        <p>${x.description}</p>
                        </div>
                            <div class="box4">
                                <h5>Stars: ${x.stargazers_count}</h5>
                                <h5>Forks: ${x.forks}</h5>
                                <h5>Has downloads: ${x.has_downloads}</h5>
                            </div>
                 
                </div>`; 
        });
        latestPost.innerHTML = output;
        document.querySelector('.latest-posts').firstChild.remove();


        // Showing DOM elements
        document.getElementById('blank').style.display = 'grid';
        document.getElementsByTagName('footer')[0].style.position = 'relative';
    } 

    alertError(){
        this.clearAlert();

        const div = document.createElement('div');
        const container = document.querySelector('.container');
        const heading = document.querySelector('.heading');
        div.className = 'error';
        div.appendChild(document.createTextNode('User does not exist'));
        container.insertBefore(div, heading);

        setTimeout(() => {
            this.clearAlert();
        }, 2500);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.error');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    hidingUI(){
        document.getElementById('blank').style.display = "none";
        document.querySelector('.bottom-box').style.display = "none";
    }
}
const input = document.getElementById('search-field');

const newRequest = new GithubCall;
const newUI = new Ui;

input.addEventListener('keyup', () => {
   const inputValue = input.value;
   if(inputValue === ''){
    document.getElementById('blank').style.display = "none";
    document.querySelector('.bottom-box').style.display = "none";
   }else{
    newRequest.gettingData(inputValue)
     .then((data) => {
         if(data.response.message != 'Not found'){
            newUI.displayingData(data, inputValue);
         }else{
             newUI.alertError();
             newUI.hidingUI();
         }
     })
     .catch(() => {
        newUI.alertError();
        newUI.hidingUI();
     });
   }


});


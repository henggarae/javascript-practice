const form = document.querySelector(".js-form"),
input = form.querySelector("input")
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
    SHOING_CN = "showing";
function paintGreeting(text){
    greeting.innertext = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {

    } else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
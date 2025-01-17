const loginBtn = document.querySelector("#login-btn");
const registerBtn = document.querySelector("#register-btn");
const loginIconBtn = document.querySelector("#login-icon-btn");
const registerIconBtn = document.querySelector("#register-icon-btn");

const loginForm = document.querySelector(".login-container");
const registerForm = document.querySelector(".register-container");

const fluid = document.querySelector("#fluid");

function viewLogin()
{
    loginForm.style.left =0;
    registerForm.style.left = "100%";

    loginForm.style.opacity =1;
    registerForm.style.opacity = 0;
}
function viewRegister(){
    loginForm.style.left = "-100%";
    registerForm.style.left ="0";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
}
registerBtn.addEventListener('click',viewRegister);
loginBtn.addEventListener('click',viewLogin);
registerIconBtn.addEventListener('click',viewRegister);
loginIconBtn.addEventListener('click',viewLogin);
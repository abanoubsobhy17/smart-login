const signUpName =document.querySelector("#signUpName");
const signUpEmail =document.querySelector("#signUpEmail");
const signUpPass =document.querySelector("#signUpPass");
const signUpBtn =document.querySelector("#signUpBtn");
const emailExist =document.querySelector("#emailExist")
let users =[]
 if (localStorage.getItem('usersInfo')!=null) {
    users=JSON.parse(localStorage.getItem('usersInfo'))
 }

function signUp() {

    if (signUpName.value =='' ||signUpEmail.value ==''||signUpPass.value ==''  ) {
        emailExist.innerHTML= `<span class='text-danger my-3'>all inputs are requiret</span>`
    }
    else
{
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() ==signUpEmail.value.toLowerCase()) {
            emailExist.innerHTML= `<span class='text-danger my-3'>email and user name all ready exist</span>`
            return false
        }
    }
    getUsersData()
            emailExist.innerHTML= `<span class='text-success my-3'>all inputs are success</span>`
}}

function getUsersData() {
    let user= 
    {
        name :signUpName.value,
        email:signUpEmail.value,
        pass :signUpPass.value,
    }
    users.push(user)
    localStorage.setItem('usersInfo',JSON.stringify(users)    )
    location.href =`index.html`
    
}

// events
signUpBtn?.addEventListener('click' , function(){
    signUp()
})

//sign in
const signInEmail =document.querySelector("#signInEmail");
const signInPass =document.querySelector("#signInPass");
const logBtn =document.querySelector("#logBtn");
const checkInput =document.querySelector("#checkInput");

function signIn() {
    for (let i = 0; i < users.length; i++) {
        if (signInEmail.value.toLowerCase() ==users[i].email.toLowerCase() && signInPass.value==users[i].pass) {
            checkInput.innerHTML= `<span class='text-success my-3'>all inputs are success</span>`
            localStorage.setItem('userName' ,JSON.stringify(users[i].name))
            location.href='/home.html'
            return
        }
        
        
    }
    if (signInEmail.value=='' ||signInPass.value =='') {
        checkInput.innerHTML= `<span class='text-danger my-3'>all inputs are requiret</span>`
    }
    else
    {
        checkInput.innerHTML= `<span class='text-danger my-3'>you should sign up </span>`
    }
    
}

logBtn?.addEventListener("click" , function () {
    signIn()
})


const homePage = document.querySelector('#homeUser')
let loggedUser =localStorage.getItem('userName' )
homePage.innerHTML =`<h2>welcome${loggedUser}</h2>`


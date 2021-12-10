let NAME = document.querySelector("#NAME")
let SURNAME = document.querySelector("#SURNAME")
let EMAIL = document.querySelector("#EMAIL")                       /* Fill up area */
let PASSWORD = document.querySelector("#PASSWORD")
let CPASSWORD = document.querySelector("#CPASSWORD")


let nameError = document.querySelector(".name-err");
let surnameError = document.querySelector(".surname-err");
let emailError = document.querySelector(".email-err");
let passwordEmpty = document.querySelector(".ps-empty-err");        /* Error area */
let passwordLength = document.querySelector(".ps-length-err");
let cPasswordEmpty = document.querySelector(".cp-empty-err");
let cPasswordSame = document.querySelector(".cp-same-err");


let submit = document.querySelector(".submit");                 /* Button area */



submit.onclick = function () {
    if (NAME.value.trim() && SURNAME.value.trim() && EMAIL.value.trim() && PASSWORD.value.trim()
        && PASSWORD.value.trim().length >= 8 && CPASSWORD.value.trim() && CPASSWORD.value.trim() == PASSWORD.value.trim()) {
        window.location.reload();
    }
    if(!NAME.value.trim()){
        nameError.classList.remove("d-none")
    }
    else(
        nameError.classList.add("d-none")
    )
    if (!SURNAME.value.trim()) {
        surnameError.classList.remove("d-none")
    }
    else{
        surnameError.classList.add("d-none")
    }
    if (!EMAIL.value.trim()) {
        emailError.classList.remove("d-none")
    }
    else{
        emailError.classList.add("d-none")
    }
    if (!PASSWORD.value.trim()) {
        passwordEmpty.classList.remove("d-none")
    }
    else{
        passwordEmpty.classList.add("d-none")
    }
    if(PASSWORD.value.trim() && PASSWORD.value.trim().length < 8){
        passwordLength.classList.remove("d-none")
    }
    else{
        passwordLength.classList.add("d-none")
    }
    if (!CPASSWORD.value.trim()) {
        cPasswordEmpty.classList.remove("d-none")
    }
    else{
        cPasswordEmpty.classList.add("d-none")
    }
    if (PASSWORD.value.trim() && CPASSWORD.value.trim() && CPASSWORD.value.trim() != PASSWORD.value.trim()) {
        cPasswordSame.classList.remove("d-none")
    }
    else{
        cPasswordSame.classList.add("d-none")
    }
}
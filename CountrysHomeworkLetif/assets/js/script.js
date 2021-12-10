let amsBtn=document.querySelector(".box-amsterdam");
let ams=document.querySelector(".amsterdam");
let frcBtn=document.querySelector(".box-france");
let frc=document.querySelector(".france");
let usaBtn=document.querySelector(".box-america");
let usa=document.querySelector(".america");
let lesotBtn=document.querySelector(".box-lesotho");
let lesot=document.querySelector(".lesotho");


amsBtn.onclick=function() {
    ams.classList.remove("d-none")
    frc.classList.add("d-none")
    usa.classList.add("d-none")
    lesot.classList.add("d-none")
}
frcBtn.onclick=function(){
    ams.classList.add("d-none")
    frc.classList.remove("d-none")
    usa.classList.add("d-none")
    lesot.classList.add("d-none")
}
usaBtn.onclick=function(){
    ams.classList.add("d-none")
    frc.classList.add("d-none")
    usa.classList.remove("d-none")
    lesot.classList.add("d-none")
}
lesotBtn.onclick=function(){
    ams.classList.add("d-none")
    frc.classList.add("d-none")
    usa.classList.add("d-none")
    lesot.classList.remove("d-none")
}
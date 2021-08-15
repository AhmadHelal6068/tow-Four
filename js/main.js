const ulAp = document.querySelector(".ul");
const menuAp = document.querySelector(".menu");
menuAp.onclick=function(){
    ulAp.classList.toggle("active");
}
window.onscroll=function(){
    ulAp.classList.remove("active");
}
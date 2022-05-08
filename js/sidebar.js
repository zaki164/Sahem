let mytog = document.getElementsByClassName('mytoggler')[0];
let myside = document.getElementsByClassName('side')[0];
let lis =  Array.from(document.querySelectorAll(".side ul li"));
let mynav = document.getElementsByClassName("mynav")[0];
let myheader = document.querySelector(".page");
document.onclick = function () {
    if (myside.classList.contains("open")) {
        myside.classList.toggle("open");
        mynav.style.opacity = "1";
        mytog.style.visibility = "visible";
    }
}
myside.onclick = function (e) {
    e.stopPropagation(); 
}
mytog.onclick = function (e) {
    e.stopPropagation();
    myside.classList.toggle("open");
    mynav.style.opacity = "0.2";
    mytog.style.visibility = "hidden";
}

lis.forEach(function (ele) {
    ele.onclick = function () {
        lis.forEach(function (ele) {
            ele.classList.remove("active");
        })
        this.classList.add("active");
        myheader.textContent = this.textContent + " /";
    }
})
$(function() {  
    $(".side").niceScroll({
        cursorcolor: "#366D9F",
        cursorwidth: "7px",
    });
});
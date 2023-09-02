
/* this js for the todays deal's scroll bar*/
const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener("click", function (event) {
    console.log("done");
    const content = document.querySelector(".product-slide");
    content.scrollLeft += 1100;
    event.preventDefault();

});
leftbtn.addEventListener("click", function (event) {
    console.log("done");
    const content = document.querySelector(".product-slide");
    content.scrollLeft -= 1100;
    event.preventDefault();

});
/* this js for the home decoration scroll bar*/

const leftbtn2 = document.querySelector(".l-btn-2");
const rightbtn2 = document.querySelector(".r-btn-2");


rightbtn2.addEventListener("click", function (event) {
    console.log("done");
    const content = document.querySelector(".product-slide-2");
    content.scrollLeft += 1100;
    event.preventDefault();

});
leftbtn2.addEventListener("click", function (event) {
    console.log("done");
    const content = document.querySelector(".product-slide-2");
    content.scrollLeft -= 1100;
    event.preventDefault();

});

/* this js for women dresses scroll bar*/
const leftbtn3 = document.querySelector(".l-btn-3");
const rightbtn3 = document.querySelector(".r-btn-3");


rightbtn3.addEventListener("click", function (event) {
    console.log("done");
    const content = document.querySelector(".product-slide-3");
    content.scrollLeft += 1100;
    event.preventDefault();

});
leftbtn3.addEventListener("click", function (event) {
    console.log("done");
    const content = document.querySelector(".product-slide-3");
    content.scrollLeft -= 1100;
    event.preventDefault();

});

/* this js for the popular electronics scroll bar*/
const leftbtn4 = document.querySelector(".l-btn-4");
const rightbtn4 = document.querySelector(".r-btn-4");


rightbtn4.addEventListener("click", function (event) {
    console.log("done");
    const content = document.querySelector(".product-slide-4");
    content.scrollLeft += 1100;
    event.preventDefault();

});
leftbtn4.addEventListener("click", function (event) {
    console.log("done");
    const content = document.querySelector(".product-slide-4");
    content.scrollLeft -= 1100;
    event.preventDefault();

});

/*this javascript is written for the back to top of the site */
const backtop=document.getElementsByClassName(".back-to-top");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})
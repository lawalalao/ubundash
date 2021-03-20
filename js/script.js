// SIDEBAR TOGGLE
var sidebar , toggle;

sidebar = document.querySelector(".sidebar__wrap");
toggle =  document.querySelector(".sidebar__toggle");

toggle.addEventListener("click", function(){
    sidebar.classList.toggle("active");
    toggle.classList.toggle("active");
})

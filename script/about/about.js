var menu_first = document.getElementById("first-social-menue");
var menu_second = document.getElementById("second-social-menue");
var menu_third = document.getElementById("third-social-menue");
var menu_forth = document.getElementById("forth-social-menue");
var icon_fisrt = document.getElementById("first-icon-change");
var icon_second = document.getElementById("second-icon-change");
var icon_third = document.getElementById("third-icon-change");
var icon_forth = document.getElementById("forth-icon-change");
var icon_fifth = document.getElementById("fifth-icon-change");
var icon_sixth = document.getElementById("sixth-icon-change");
var icon_seventh = document.getElementById("seventh-icon-change");
var icon_eight = document.getElementById("eight-icon-change");
var first_span = document.getElementById("my-span");
var second_span = document.getElementById("label-input");
function toggleMenu_first() {
menu_first.classList.toggle("open");
icon_fisrt.classList.toggle("d-none");
icon_second.classList.toggle("d-none");
}
function toggleMenu_second(){
menu_second.classList.toggle("open");
icon_third.classList.toggle("d-none");
icon_forth.classList.toggle("d-none");
}
function toggleMenu_third(){
menu_third.classList.toggle("open");
icon_fifth.classList.toggle("d-none");
icon_sixth.classList.toggle("d-none");
}
function toggleMenu_forth(){
menu_forth.classList.toggle("open");
icon_seventh.classList.toggle("d-none");
icon_eight.classList.toggle("d-none");
}
function toggleSwitch(){
first_span.classList.toggle("toggle-color");
second_span.classList.toggle("toggle-color");
}
x = 10;
y = 0;
let para = document.getElementById('para');
let para2 = document.getElementById('para2');
let para3 = document.getElementById('para3');
let para4 = document.getElementById('para4');
let para5 = document.getElementById('para5');
let para9 = document.getElementById('para9');



// Assignment 4
function assignment4() {
    let math = Math.floor(Math.random() * 10);
    let arr = ["Inside which HTML element do we put the JavaScript?", "Which of the following is NOT a valid JavaScript variable name?", "What is the correct way to declare a JavaScript array?", "Which keyword is used to define a function in JavaScript?", "How do you check if a variable is an array in JavaScript?", "What does the 'this' keyword refer to in JavaScript?", "Which method is used to remove the last element from an array in JavaScript?", "What is the purpose of the 'addEventListener' method in JavaScript?", "Which of the following is NOT a JavaScript data type?", "How do you declare a constant variable in JavaScript?",];
    math
    para4.innerText = arr[math]
}
setInterval(assignment4, 5000)


// Assignment 1
setInterval(function assignment1() {
    para.innerHTML += "Hello World ";
}, 2000);


// Assignment 2
function assignment2() {
    if (x == 0) {
        clearInterval(a)
    } else {
        para2.innerHTML = --x;
    }
}
a = setInterval(assignment2, 1000)


// Assignment 3
function assignment3() {
    y = y + 10;
    if (y == 200) {
        clearInterval(b)
    } else {
        para3.style.marginLeft = y + "px";
    }
}
b = setInterval(assignment3, 100)


// Assignment 5
let color = ["red","blue","yellow","pink","black","white","bisque","chocolate","cyan"];
setInterval(function assignment5(){
    let math = Math.floor(Math.random() * 10);
    para5.style.backgroundColor = color[math];
}, 3000);


// Assignment 9
setInterval(function assignment5(){
    let math = Math.floor(Math.random() * 101);
    para9.innerHTML = math;
}, 500);




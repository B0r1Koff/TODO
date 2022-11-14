"use strict"

const item = {
    text: '',
    difficulty: 0,
    priority: 0,
    date: ''
}

let f = 1;
function aaa(){
    f = 1;
}
function aaa1(){
    f = 2;
}
function aaa2(){
    f = 3;
}

document.querySelector("#addButton").onclick = function(){
    let text = document.querySelector("#Input").value;
    if(text === ""){
        text = "nothing";
    }
    let color = 0;
    if(document.getElementById('rb1').checked){
        color = 1;
    }
    else if(document.getElementById('rb2').checked){
        color = 2;
    }
    else if(document.getElementById('rb3').checked){
        color = 3;
    }
    else{
        color = 1;
    }
    alert(text + "\n" + color + "\n" + f);
    item.text = text;
    item.difficulty = color;
    item.priority = f;
    item.date = document.querySelector("#date").value;
    localStorage.setItem(localStorage.length, JSON.stringify(item));
}

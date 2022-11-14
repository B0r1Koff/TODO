"use strict"

document.querySelector("#allButton").onclick = function(){
    getItems();
}

document.querySelector("#todayButton").onclick = function(){
    getTodaysNotes();
}

document.querySelector("#tomorrowButton").onclick = function(){
    getTomorrowsNotes();
}

function deleteEmptyNotes(){
    let keys = Object.keys(localStorage);
    for(let key in keys){
        const item = JSON.parse(localStorage.getItem(key));
        if(item.text === "nothing"){
            localStorage.removeItem(key);
        }
    }
}

function getItems(){
    // localStorage.clear();
    deleteEmptyNotes();
    let keys = Object.keys(localStorage);
    let html = '';
    for(let key in keys){
        const item = JSON.parse(localStorage.getItem(key));
        let priority = '';
        if(item.priority === 1){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            `;
        }
        if(item.priority === 2){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            `;
        }
        if(item.priority === 3){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            `;
        }
    html += `
        <li class="task">

        <p class="textOfTask type${item.difficulty}">${item.text}</p>

        <div class="difficultyLevel">

        ${priority}

        </div>

        </li>
    `;

    let box = document.getElementById('tasks');
    box.innerHTML = html;
    }
}

function getTodaysNotes(){
    let keys = Object.keys(localStorage);
    let html = '';
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let todaysDate = yyyy + "-" + mm + "-" + dd;
    console.log(todaysDate);
    for(let key in keys){
        const item = JSON.parse(localStorage.getItem(key));
        if(item.date === todaysDate){
        let priority = '';
        if(item.priority === 1){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            `;
        }
        if(item.priority === 2){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            `;
        }
        if(item.priority === 3){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            `;
        }
    html += `
        <li class="task">

        <p class="textOfTask type${item.difficulty}">${item.text}</p>

        <div class="difficultyLevel">

        ${priority}

        </div>

        </li>
    `;

    }
    let box = document.getElementById('tasks');
    box.innerHTML = html;
}
}

function getTomorrowsNotes(){
    let keys = Object.keys(localStorage);
    let html = '';
    let today = new Date();
    let dd = String(today.getDate()+1).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let todaysDate = yyyy + "-" + mm + "-" + dd;
    console.log(todaysDate);
    for(let key in keys){
        const item = JSON.parse(localStorage.getItem(key));
        if(item.date === todaysDate){
        let priority = '';
        if(item.priority === 1){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            `;
        }
        if(item.priority === 2){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/whiteFlash.png" class="img" alt="">
            `;
        }
        if(item.priority === 3){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            `;
        }
    html += `
        <li class="task">

        <p class="textOfTask type${item.difficulty}">${item.text}</p>

        <div class="difficultyLevel">

        ${priority}

        </div>

        </li>
    `;

    }
    let box = document.getElementById('tasks');
    box.innerHTML = html;
}
}
function getItems(){
    for(let i = 0; i < localStorage.length; i++){
        const item = JSON.parse(localStorage.getItem(i));
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
        if(item.priority === 1){
            priority += `
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            <img src="./img/blueFlash.png" class="img" alt="">
            `;
        }
        let html = '';
    html += `
        <li class="task">

        <p class="textOfTask type2" class="type${item.difficulty}">${item.text}</p>

        <div class="difficultyLevel">

        ${priority}

        </div>

        </li>
    `;

    let box = document.getElementById('tasks');
    box.innerHTML = html;
    }
}

console.log(JSON.parse(localStorage.getItem(0)));
const block = document.querySelector(`.block`)


block.style.top = (window.innerHeight-block.offsetHeight) / parseInt(`2`)+`px`
block.style.left = (window.innerWidth-block.offsetWidth) / parseInt(`2`)+`px`

const teemoSmile = `url(img/teemoSmile.png)`
const teemoCry = `url(img/teemoCry.png)`

document.addEventListener('keydown', moveDown);
document.addEventListener('keydown', moveUp);
document.addEventListener('keydown', moveRight);
document.addEventListener('keydown', moveLeft);
document.addEventListener('keydown', jump);
document.addEventListener('keydown', sit);

function sit(e) {
    if(`${e.code}` === "ControlLeft"){
        block.style.height = 100*0.6 +`px`
        block.style.width = 100*1.25 +`px`
        block.style.top = block.offsetTop + 100*0.6 +`px`
        setTimeout(()=>{
            block.style.height = 100 +`px`
            block.style.width = 100 +`px`
            block.style.top = block.offsetTop - 100*0.6 +`px`
        },500)
    }
}
function jump(e) {
    if(`${e.code}` === "Space"){
        block.style.top = block.offsetTop - 100 +`px`;
        // block.style.height = 50 + `px`
        setTimeout(()=>{
            // block.style.height = 100 + `px`
            block.style.top = block.offsetTop + 100 +`px`;
        },500)
        if(block.offsetTop < 0){
            block.textContent = `БЭМС!`;
            block.style.top = block.offsetTop + block.offsetHeight + `px`;
            block.style.backgroundImage = teemoCry
            setInterval(()=>{
                block.textContent = ``;
                block.style.backgroundImage = teemoSmile
            },1000)
        }
    }
}
function moveDown(e) {
    if(`${e.code}` === "ArrowDown"){
        // console.dir(block.offsetTop)
      block.style.top = block.offsetTop + 50 + `px`;
        if(block.offsetTop > window.innerHeight-block.offsetHeight){
            block.textContent = `БЭМС!`;
            block.style.top = block.offsetTop - `100` + `px`;
            block.style.backgroundImage = teemoCry
            setTimeout(()=>{
                block.style.backgroundImage = teemoSmile
                block.textContent = ``;
            },1000)
        }
    }
    // block.textContent = ` ${e.code}`;
}

function moveUp(e) {
    if(`${e.code}` === "ArrowUp"){
        // console.dir(block)
        block.style.top = block.offsetTop - 10 + `px`;
        if(block.offsetTop < `0`){
            block.textContent = `БЭМС!`;
            block.style.top = block.offsetTop + 20 + `px`;
            block.style.backgroundImage = teemoCry
            setTimeout(()=>{
                block.textContent = ``;
                block.style.backgroundImage = teemoSmile
            },1000)
        }
    }
    // block.textContent = ` ${e.code}`;
}
function moveRight(e) {
    if(`${e.code}` === "ArrowRight"){
        block.style.left = block.offsetLeft + 10 + `px`;
        if(block.offsetLeft > window.innerWidth-block.offsetWidth){
            block.textContent = `БЭМС! `;
            block.style.left = block.offsetLeft - 20 + `px`;
            block.style.backgroundImage = teemoCry
            setTimeout(()=>{
                block.textContent = ``;
                block.style.backgroundImage = teemoSmile
            },1000)
        }
    }
    // block.textContent = ` ${e.code}`;
}
function moveLeft(e) {
    if(`${e.code}` === "ArrowLeft"){
        // console.dir(block.offsetLeft)
        block.style.left = block.offsetLeft - 10 + `px`;
        if(block.offsetLeft < 0){
            block.textContent = `БЭМС! `;
            block.style.left = block.offsetLeft + 20 + `px`;
            block.style.backgroundImage = teemoCry
            setTimeout(()=>{
                block.textContent = ``;
                block.style.backgroundImage = teemoSmile
            },1000)
        }
    }
    // block.textContent = ` ${e.code}`;
}


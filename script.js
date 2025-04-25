const containerDiv = document.querySelector(".container");
const controls = document.querySelector(".controls");
const title = document.createElement("h2");
title.textContent = "Etch-a-Sketch";
controls.appendChild(title);

const buttonCustomise = document.createElement("button");
buttonCustomise.textContent = "Make your own !"
controls.appendChild(buttonCustomise);

const buttonRainbow = document.createElement("button");
buttonRainbow.setAttribute("id", "rainbow_button");
buttonRainbow.textContent = "Rainbow";
controls.appendChild(buttonRainbow);

const buttonGridMode = document.createElement("button");
buttonGridMode.textContent = "Grid Mode";
controls.appendChild(buttonGridMode);

const buttonReset = document.createElement("button");
buttonReset.textContent = "Reset";
controls.appendChild(buttonReset);

//function to create grid
function createGrid(num) {
    containerDiv.textContent = "";
    const total = num ** 2;
    const size = 500 / num;

        for(let i=0; i<total; i++) {
            const cell = document.createElement("div");
            cell.style.width = `${size}px`;
            cell.style.height = `${size}px`;
            cell.classList.add("grid");
            containerDiv.appendChild(cell);    
        }

        //event listener for "hover" effect
        document.querySelectorAll(".grid").forEach(cell => {
            cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
            const currentOpacity = cell.style.opacity;
                if(currentOpacity) {
                    cell.style.opacity = Number(currentOpacity) + 0.1;
                }
                else {
                    cell.style.opacity = 0.2;
                }
        })
    })
} 

createGrid(16);

//option for user to create own grid
buttonCustomise.addEventListener("click", () => {
    containerDiv.textContent = "";
    const input = prompt("Please enter the number of squares per side for your new grid. This should be a number between 1-100.");
    if(input > 0 && input <= 100) {
        createGrid(input);
    }
    else {
        alert("Wrong input. Please enter a number between 1-100.");
    }

})

//option for rainbow colors on hover
buttonRainbow.addEventListener('click', ()=>{
    containerDiv.querySelectorAll("div").forEach(div => {
        div.addEventListener('mouseover', () => {
            div.classList.add("rainbow");
            const color = Math.floor(Math.random()*16777215).toString(16);
            div.style.backgroundColor=`#${color}`;
            const currentOpacity = div.style.opacity;
                if(currentOpacity) {
                    div.style.opacity = Number(currentOpacity) + 0.1;
                }
                else {
                    div.style.opacity = 0.3;
                }
            })
        })
    })

//option for grid-like canvas
buttonGridMode.addEventListener('click', ()=>{
    containerDiv.querySelectorAll("div").forEach(div => {
        div.style.border = "1px solid black";
    })
})

//reset all
buttonReset.addEventListener('click', ()=>{
    createGrid(16);
})

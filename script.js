const containerDiv = document.querySelector(".container");


//add function to create 16x16 grid instead of manualy copy and paste divs in html
function createDivs(num) {

    for(let i=0; i<num; i++) {
        const singleDiv = document.createElement("div");
        singleDiv.classList.add("single");
        containerDiv.appendChild(singleDiv);
    }
    addHoverEffect();
}

createDivs(256);

//add event listeners for "hover" effect
function addHoverEffect() {
    const allDivs = document.querySelectorAll("div");
    allDivs.forEach(elem => {
        elem.addEventListener("mouseover", () => {
            elem.style.backgroundColor = "black";
        })
        elem.addEventListener("mouseout", () => {
            elem.style.backgroundColor = "white";
        })
    })
}

//add option for user to create own grid
const body = document.querySelector("body");
const promptButton = document.createElement("button");
promptButton.textContent = "Make your own !"
body.appendChild(promptButton);
body.insertBefore(promptButton, containerDiv)

promptButton.addEventListener("click", () => {
    const input = prompt("Please enter the number of squares per side for your new grid. This should be a number between 1-100");
    const square = Math.pow(input, 2);

    if(input >= 1 && input <= 100) {
        containerDiv.textContent = "";
        createDivs(square);
        addHoverEffect();
    }
    else {
        prompt("Please enter a number between 1-100");
    }

})


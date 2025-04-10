const containerDiv = document.querySelector(".container");


function createDivs(num) {

    for(let i=0; i<num; i++) {
        const singleDiv = document.createElement("div");
        singleDiv.classList.add("single");
        containerDiv.appendChild(singleDiv);
    }
    
}

createDivs(256);

const allDivs = document.querySelectorAll("div");

allDivs.forEach(elem => {
    elem.addEventListener("mouseover", () => {
        elem.style.backgroundColor = "black";
    })
    elem.addEventListener("mouseout", () => {
        elem.style.backgroundColor = "white";
    })
})

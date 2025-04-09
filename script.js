const containerDiv = document.querySelector(".container");


function createDivs(num) {

    for(let i=0; i<num; i++) {
        const singleDiv = document.createElement("div");
        singleDiv.classList.add("single");
        containerDiv.appendChild(singleDiv);
    }
    
}

createDivs(256);

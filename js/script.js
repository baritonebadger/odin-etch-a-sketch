const etchGrid= document.querySelector("#etchGrid");
const clearGridButton = document.querySelector("#clearGridButton");
const changeGridSizeButton = document.querySelector("#changeGridSizeButton");
const toggleColorfulPenButton = document.querySelector('#colorfulPen');
let gridDivs = etchGrid.querySelectorAll(".square");
let row= document.createElement("div");
let square = document.createElement("div");
let gridSquares=16;
let colorfulPen=false;

let toggleSquare = function (gridDivs){
    switch (colorfulPen){
        case true:
            let randomNumber= Math.floor(Math.random()*7+1);
            console.log(randomNumber);
            switch (randomNumber){
                case 1:
                    gridDivs.style.backgroundColor="#b0cece";
                    break;
                case 2:
                    gridDivs.style.backgroundColor="#0c2543";
                    break;
                case 3:
                    gridDivs.style.backgroundColor="#6c9d87";
                    break;
                case 4:
                    gridDivs.style.backgroundColor="#e1ab30";
                    break;
                case 5:
                    gridDivs.style.backgroundColor="#7035fd";
                    break;
                case 6:
                    gridDivs.style.backgroundColor="#e18891";
                    break;
                case 7:
                    gridDivs.style.backgroundColor="#d44719";
                    break;
            }
            break;
        case false:
            gridDivs.style.backgroundColor='black';
            break;
    }
}
let createGrid = function (gridSquares){
    for (let i=0;i<gridSquares;i++){
    row = document.createElement("div");
    etchGrid.appendChild(row);
    row.classList.add("row");
        for (j=0;j<gridSquares;j++){
            square = document.createElement("div");
            row.appendChild(square);
            square.classList.add("square");
        }
    }
}

let removeGrid = function (){
    //need way to remove grid
    for (let i=0;i<gridSquares;i++){
        rowAll = etchGrid.querySelectorAll(".row");
        rowAll.forEach(rowAll => {
            rowAll.remove();
        })
    }
}

let addSquareListeners = function (){
    gridDivs = etchGrid.querySelectorAll(".square");
    gridDivs.forEach(gridDivs => {
        gridDivs.classList.add("square");
        gridDivs.addEventListener('mouseover', () => {
            toggleSquare(gridDivs);
        })
    });
}

let clearGrid = function (){
    removeGrid();
    createGrid(gridSquares);
    addSquareListeners();
}

let changeGridSize = function(){
    removeGrid(); 
    gridSquares=prompt("Enter number of squares");
    createGrid(gridSquares);
    addSquareListeners();
}

let toggleColorfulPen = function() {
    switch(colorfulPen){
        case true:
            colorfulPen = false;
            break;
        case false:
            colorfulPen = true;
            break;
    } 
}
let addButtons = function (){
    clearGridButton.addEventListener('click', () => {clearGrid()});
    changeGridSizeButton.addEventListener('click', () => {changeGridSize()});  
    toggleColorfulPenButton.addEventListener('click' , () => {toggleColorfulPen()})
}
//Starts webpage with default grid
createGrid(gridSquares);
addSquareListeners();
addButtons();
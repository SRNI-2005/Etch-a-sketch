let domSketch = document.querySelector(".sketch");
let domClear = document.querySelector(".clear");
let domChangeSize = document.querySelector(".change-sketch");
let domSelect = document.querySelector(".select");
let domRandom = document.querySelector(".random");


let color;
let random = false;

let size = 480;
let pixels = 48;

function changePixels(n){
    clearSketch();
    let pixelSize = size/n;





    for (let i=0; i<n; i++){
        let row = document.createElement("div");
        row.classList.add("row");
    
        row.style.height = pixelSize + "px";
        row.style.width = size + "px";

        for (let j=0; j<n; j++){
            let col = document.createElement("div");
            col.classList.add("col");

            col.style.height = pixelSize + "px";
            col.style.width = pixelSize + "px";

            row.appendChild(col);
        }
       
        domSketch.appendChild(row);
    }


}
function clearSketch(){
    domSketch.innerHTML = '';
}
domSketch.addEventListener("mouseover", function(event){
    if (event.target.classList.contains("col")){
        if (random){
            event.target.style.backgroundColor = getRandomColor();
        } else {
            event.target.style.backgroundColor = color;
        }
    }
});
domClear.addEventListener("click", function(){
    changePixels(pixels);
});
domChangeSize.addEventListener("click", function(){
    pixels = parseInt(prompt("Enter new number of pixels: "));
    while (pixels>100 || pixels<1){
        pixels = parseInt(prompt("Enter new number of pixels: "));
    }
    changePixels(pixels);
});
domSelect.addEventListener("click", function(){
    color = document.querySelector("#hex").value;
    random = false;
});
domRandom.addEventListener("click", function(){
    random = true;
});
function getRandomColor(){
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);

    return "rgb("+red+","+blue+","+green+")";
}

changePixels(pixels);
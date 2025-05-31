/* Loop 16 times to create 16 divs, and 16 times in a nested loop */
function creategrid(dim) {
    
    document.body.removeChild(maingrid);
    maingrid = document.createElement("div");
    maingrid.setAttribute("id", "maingrid");
    document.body.appendChild(maingrid);

    for (let i = 0; i < dim; i++) {
        const pixelrow = document.createElement("div");
        pixelrow.style.flex = "1";
        pixelrow.style.display = "flex";
        maingrid.appendChild(pixelrow)

        for (let j = 0; j < dim; j++) {
            const pixel = document.createElement("div");
            pixel.style.flex = "1";
            pixelrow.appendChild(pixel)

            /* Use mouse (mouseenter and mouseleave) event to change the color of a pixel */
            pixel.addEventListener("mouseenter", () => {
                pixel.style.backgroundColor = "red"
            })
            pixel.addEventListener("mouseleave", () => {
                pixel.style.backgroundColor = "white"
            })
        }
    }
}

/* Query selector to select main grid */
const gridsize = 960;
let input = 16;
let maingrid = document.querySelector("#maingrid");
let pixelsize = (gridsize / input);
creategrid(input);


/* Button with click event that triggers popup asking for grid resolution (max 100) */
const changegrid = document.querySelector("#changegrid");
changegrid.addEventListener("click", function(e) {
    while (true) {
        input = parseInt(prompt("Enter the resolution (Max 100)", "16"));
        if (input <= 100) { break; }
    }
    creategrid(input);
})

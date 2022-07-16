let box1 = document.querySelector("#div1")
let box2 = document.querySelector("#div2")
let box3 = document.querySelector("#div3")
let box4 = document.querySelector("#div4")
let colorGlobal = "";
document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        colorGlobal = "purple";
    } else if (event.key === "s") {
        colorGlobal = "orange";
    } else if (event.key === "d") {
        colorGlobal = "black";
    }

    changeColor(box1, colorGlobal);
    changeColor(box2, colorGlobal);
    changeColor(box3, colorGlobal);
    changeColor(box4, colorGlobal);
});

let changeColor = (element, color) => {
    element.addEventListener("click", () => {
        element.style.backgroundColor = color;
    });
};
function pintar(element, color="green"){
    console.log("element ->", element);
    element.style.backgroundColor = color
}
let color = "yellow"
let ele = document.getElementById("ele1");
pintar(ele)
ele.addEventListener("click",() =>{
    pintar(ele, color);
} );
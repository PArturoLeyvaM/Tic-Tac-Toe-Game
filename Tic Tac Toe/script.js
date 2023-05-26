let caracter ="X";

document.querySelectorAll(".grid div").forEach(element => {
    element.addEventListener("click", () => {
        if(element.innerHTML ===""){
            element.innerHTML = caracter;
            caracter = caracter ==="X" ? "O" : "X";
        }        
    });
});

function reset() {
    document.querySelectorAll(".grid div").forEach((element) => {
      element.innerHTML = "";
    });
  }
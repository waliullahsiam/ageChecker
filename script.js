
let inpAge = document.querySelector("#ageVal");

let submit = document.querySelector("#submit");

let card1 = document.querySelector("#child");

let card2 = document.querySelector("#man");




inpAge.addEventListener("input", () => {






    if (inpAge.value >= 18) {
        card1.style.visibility = 'hidden';
        card2.style.visibility = "visible";
    }
    else if (inpAge.value >= 0 && inpAge.value < 18) {

        card1.style.visibility = 'visible';
        card2.style.visibility = 'hidden';
    }









})


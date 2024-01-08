
let inpAge = document.querySelector("#ageVal");

let card1 = document.querySelector("#child");

let card2 = document.querySelector("#man");




inpAge.addEventListener("input", () => {





  if (inpAge.value === "") {
        card1.style.display = "block";
        card2.style.display = "block";
    } else {
        let age = parseInt(inpAge.value);

        if (age >= 18) {
            card2.style.display = "block";
            card1.style.display = "none";
        } else {
            card2.style.display = "none";
            card1.style.display = "block";
        }

    }
    









})


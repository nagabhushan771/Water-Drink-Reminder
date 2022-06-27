const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, index) => {
    cup.addEventListener("click", () => highlightCups(index));
});

function updtaeBigcup() {
    let fullCups = document.querySelectorAll(".cup-small.full").length;
    let totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }
    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
        remained.style.visibility = "visible";
    }
}

updtaeBigcup();

function highlightCups(index) {
    if (
        index === smallCups.length - 1 &&
        smallCups[index].classList.contains("full")
    )
        index--;
    else if (
        smallCups[index].classList.contains("full") &&
        !smallCups[index].nextElementSibling.classList.contains("full")
    )
        index--;
    smallCups.forEach((cup, localIndex) => {
        if (localIndex <= index) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });
    updtaeBigcup();
}

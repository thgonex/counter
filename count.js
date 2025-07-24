const numberText = document.querySelector(".number")
const addBtn = document.querySelector("#add")
const reduceBtn = document.querySelector("#reduce")
const resetBtn = document.querySelector("#reset")

let counter = Number(localStorage.getItem("counter"))

if (isNaN(counter)) {
  counter = 0
}

numberText.textContent = counter

addBtn.addEventListener("click", () => {
    counter++
    numberText.textContent = counter
    localStorage.setItem("counter", counter)
})

reduceBtn.addEventListener("click", () => {
    counter--
    numberText.textContent = counter
    localStorage.setItem("counter", counter)
})

resetBtn.addEventListener("click", () => {
    counter = 0
    numberText.textContent = counter
    localStorage.setItem("counter", counter)
})
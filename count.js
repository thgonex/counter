const numberText = document.querySelector(".number")
const addBtn = document.querySelector("#add")
const reduceBtn = document.querySelector("#reduce")
const resetBtn = document.querySelector("#reset")

let counter = 0 

addBtn.addEventListener("click", () => {
    counter++
    numberText.textContent = counter
})

reduceBtn.addEventListener("click", () => {
    counter--
    numberText.textContent = counter
})

resetBtn.addEventListener("click", () => {
    counter = 0
    numberText.textContent = counter
})
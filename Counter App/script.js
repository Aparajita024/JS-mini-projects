let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let reset = document.getElementById("reset")
let count = 0

increment.addEventListener("click", () => {
    count++;
    document.getElementById('count').innerHTML = count
})

decrement.addEventListener("click", () => {
    if (count > 0) {
        count--
        document.getElementById('count').innerHTML = count
    }
    else {
        count = 0
    }
})

reset.addEventListener("click", () => {
    count = 0
    document.getElementById('count').innerHTML = count
})
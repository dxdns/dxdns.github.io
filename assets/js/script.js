var closeModalBtn = document.getElementById("closeModalBtn")
var modal = document.getElementById("myModal")
var modalPreference = localStorage.getItem("modalPreference")

// if (modalPreference !== "closed") {
//     modal.style.display = "block"
// } else {
//     modal.style.display = "none"
// }

var countdown = 10

closeModalBtn.addEventListener("click", function () {
    if (countdown <= 0) {
        modal.style.display = "none"
        localStorage.setItem("modalPreference", "closed")
    }
})

closeModalBtn.disabled = true

var countdownInterval = setInterval(function () {
    countdown--

    if (countdown >= 0) {
        closeModalBtn.innerText = countdown
    } else {
        clearInterval(countdownInterval)
        closeModalBtn.innerText = "×"
        closeModalBtn.disabled = false
    }
}, 1000)
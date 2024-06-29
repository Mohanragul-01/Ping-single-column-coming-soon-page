const form = document.querySelector(".form");
const email = document.querySelector(".email");
const btn = document.querySelector(".btn");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const msg = "Please provide a valid email address";

const error = document.createElement("p");
error.classList.add("err-txt");
error.textContent = msg;

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.value.match(emailRegex)) {
        form.classList.remove("error");
        form.removeChild(error);
    } else {
        form.classList.add("error");
        form.insertBefore(error, btn);
    }
})

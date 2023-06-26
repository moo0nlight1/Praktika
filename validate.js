const input = document.getElementById("email");
const submit = document.getElementById("submitEmail");

const validateEmail = (email) => {
    const validate = email.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (validate != null) {
        document.getElementById("incorrectEmail").classList.add("hidden");
    } else {
        document.getElementById("incorrectEmail").classList.remove("hidden");
    }
};

submit.addEventListener("click", () => {
    validateEmail(input.value);
});

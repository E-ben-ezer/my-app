function validateName() {

    const name = document.getElementById("customer-name").value.trim();

    if (name === "") {

        document.getElementById("name-error").innerHTML =
            "Name is required";

        return false;

    }

    document.getElementById("name-error").innerHTML = "";

    return true;

}

function validateEmail() {

    const email = document.getElementById("customer-email").value.trim();

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        document.getElementById("email-error").innerHTML =
            "Email is required";

        return false;

    }

    if (!pattern.test(email)) {

        document.getElementById("email-error").innerHTML =
            "Invalid email address";

        return false;

    }

    document.getElementById("email-error").innerHTML = "";

    return true;

}

function validatePhone() {

    const phone = document.getElementById("customer-phone").value.trim();

    const pattern = /^[0-9]{10,15}$/;

    if (phone === "") {

        document.getElementById("phone-error").innerHTML =
            "Phone number is required";

        return false;

    }

    if (!pattern.test(phone)) {

        document.getElementById("phone-error").innerHTML =
            "Enter a valid phone number";

        return false;

    }

    document.getElementById("phone-error").innerHTML = "";

    return true;

}

function validateForm() {

    return validateName()
        && validateEmail()
        && validatePhone();

}


document
    .getElementById("customer-name")
    .addEventListener("blur", validateName);

document
    .getElementById("customer-email")
    .addEventListener("blur", validateEmail);

document
    .getElementById("customer-phone")
    .addEventListener("blur", validatePhone);
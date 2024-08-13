
function validateForm() {
    // get the field items
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // get all span using id
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    // set the span content as empty
    emailError.textContent = "";
    passwordError.textContent = "";
    console.log(emailError)

    let isValid = true;

    //  check if the field is empty
    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
            console.log(emailError)
        isValid = true;
    }

    if (password === "" || password.length < 3) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = true;
    }

    if( email == "nithin@123" && password == "123") {
        document.getElementById("modalMessage").textContent = "Login successful!";
            $('#myModal').modal('show');

        // alert("Login successfully");
        // window.location = "gameboard.html";
        isValid = false;
    }


    // Set the modal message and show the modal
    
    

    return isValid;
}
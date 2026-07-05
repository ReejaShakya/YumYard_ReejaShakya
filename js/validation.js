document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;

    if (name === "") {
        document.getElementById('nameError').textContent = "Full name is required.";
        isValid = false;
    } else if (name.length < 3) {
        document.getElementById('nameError').textContent = "Name must be at least 3 characters long.";
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById('emailError').textContent = "Email address is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please provide a valid email structure.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    const phonePattern = /^[0-9]{10}$/; 
    if (phone === "") {
        document.getElementById('phoneError').textContent = "Phone number is required.";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number must contain exactly 10 digits.";
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = "";
    }

    if (message === "") {
        document.getElementById('messageError').textContent = "Message field cannot be left blank.";
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').textContent = "Message must be at least 10 characters long.";
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = "";
    }

    const successSummary = document.getElementById('successSummary');
    if (isValid) {
        successSummary.textContent = `Thank you, ${name}! Your inquiry has been verified and successfully submitted.`;
        document.getElementById('contactForm').reset();
    } else {
        successSummary.textContent = "";
    }
});
// Greeting
let userName = prompt("Please enter your name:");
if (userName !== null && userName !== "") {
    document.getElementById("username").innerText = userName;
}

// Form Validation
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("userMessage").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields must be filled out!");
        return;
    }

    if (!email.includes("@")) {
        alert("Invalid email format!");
        return;
    }

    if (isNaN(phone)) {
        alert("Phone number must be numeric!");
        return;
    }

    document.getElementById("result").innerHTML = `
        <h3>Submitted Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    this.reset();
});

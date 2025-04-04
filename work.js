function login() {
    const username = document.getElementById("admin-id").value;
    const password = document.getElementById("admin-password").value;

    // Replace with your desired credentials
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        window.location.href = "https://gen-ai-inventory.onrender.com/";
    } else {
        alert("Invalid ID or Password");
    }
}
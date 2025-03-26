function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("users.json")
        .then(response => response.json())
        .then(data => {
            const user = data.find(u => u.username === username && u.password === password);

            if (user) {
                alert("Login berhasil!");
                window.location.href = "dashboard.html";
            } else {
                alert("Akun tidak terdaftar!");
            }
        })
        .catch(error => console.error("Error loading database:", error));
}

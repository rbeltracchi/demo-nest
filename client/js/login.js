async function validateLogin(e) {

    let user = {
        "name": document.getElementById("username").value,
        "password": document.getElementById("password").value
    }

    let respuesta = await fetch('/login/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    if (await respuesta.json()) {
        window.sessionStorage.setItem("userLogged", true);
        window.sessionStorage.setItem("user", user);
        window.location.href = "http://localhost:3000";
    }
    //mostrar cartel de datos erroneos
}

document.getElementById("login-button")
    .addEventListener("click", validateLogin);
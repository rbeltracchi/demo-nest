let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);

let compras = [];

//#########################################

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);

    let renglon = {
        "producto": producto,
        "precio": precio
    }
    compras.push(renglon);

    mostrarTablaCompras();

}

//#########################################

function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if (max < r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML =
        "<p>Total: $" + total + "</p>" +
        "<p>Maximo: $" + max + "</p>"
}

let obj = {
    "functions": { "sumar": sumar }
}

//#########################################

function mostrarTablaCompras() {
    let html = "";
    for (let r of compras) {
        html += `
        <tr>
        <td>${r.nombreProducto}</td>
        <td>${r.precio}</td>
        </tr>
        `;
    }
    document.querySelector("#tblCompras").innerHTML = html;
}

async function load() {
    let container = document.querySelector("#use-ajax");
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Loading';
    container.appendChild(h1);
    try {
        let response = await fetch('/productos');
        if (response.ok) {
            let t = await response.json();
            console.log(t);
            compras = [...compras, ...t];
        }
        else
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
    }
    catch (response) {
        console.log(response);
        container.innerHTML = "<h1>Connection error</h1>";
    };
    h1.parentNode.removeChild(h1);
    mostrarTablaCompras();
}

load();
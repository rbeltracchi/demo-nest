n
function processParams(){
    let paramstr = window.location.search.substr(1);
    let paramarr = paramstr.split("&");
    let params = [];
    for (let i = 0; i < paramarr.length; i++) {
        let tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params
}


async function load() {
    let container = document.querySelector("#use-ajax");
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Loading';
    container.appendChild(h1);
    try {
        let params = processParams();
        let response = await fetch(`/productos/${params["index"]}`);
        console.log(response);
        if (response.ok) {
            let t = await response.json();
            document.querySelector("#nombre").innerHTML = t['nombreProducto'];
            document.querySelector("#precio").innerHTML = t['precio'];
        }
        else
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
    }
    catch (response) {
        console.log(response);
        container.innerHTML = "<h1>Connection error</h1>";
    };
    h1.parentNode.removeChild(h1);
}

load();
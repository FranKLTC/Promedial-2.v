function showToastOkay(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // duración del toast
}
function showToastError(message) {
    const toast = document.getElementById("toast-error");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000); // duración del toast
}


function calcular(){
    const numero1 = Number(document.getElementById('cut1').value)
    const numero2 = Number(document.getElementById('cut2').value)
    const numero3 = Number(document.getElementById('cut3').value)
    const numero4 = Number(document.getElementById('cut4').value)

    let suma = 0

    const porcentajes = [0.20, 0.20, 0.20, 0.40];
    

    let numeros = [numero1, numero2, numero3, numero4];
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i] * porcentajes[i];
    }

    document.getElementById('result-content-prod').innerHTML = suma.toFixed(2);
    
    if (suma >= 3.0) {
        showToastOkay("Felicitaciones, pasaste la materia", "#2DBD4E");
    }   else {  
        showToastError("No pasaste la materia", "#FF4C4C");
    }
}

function limpiar(){
    document.getElementById('cut1').value = "";
    document.getElementById('cut2').value = "";
    document.getElementById('cut3').value = "";
    document.getElementById('cut4').value = "";
    document.getElementById('result-content-prod').innerHTML = "0.0"
}
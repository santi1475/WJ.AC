
// ABRIR Y CERRAR POP UPS

const btnContable = document.querySelector("#contable");
const btnConsultoria = document.querySelector("#consultoria");

const popUpContable = document.querySelector(".popUpContable");
const popUpConsultoria = document.querySelector(".popUpConsultoria");

const btnCerrarPopUp = document.querySelectorAll(".popUp__btnCerrar");

btnContable.addEventListener("click", ()=>{
    popUpContable.style.display = "flex";
    setTimeout(()=>{
        popUpContable.classList.add("popUpAnimacion");
    }, 100)
})

btnConsultoria.addEventListener("click", ()=>{
    popUpConsultoria.style.display = "flex";
    setTimeout(()=>{
        popUpConsultoria.classList.add("popUpAnimacion");
    }, 100)
})

for (let i=0; i<btnCerrarPopUp.length; i++) {
    btnCerrarPopUp[i].addEventListener("click", ()=>{
        let padre = btnCerrarPopUp[i].parentNode.parentNode;
        padre.classList.remove("popUpAnimacion");
        setTimeout(()=>{
            padre.style.display = "none";
        }, 500)
    })
}

// DESPLEGAR DROPDOWN

const dropdowns = document.querySelectorAll(".dropdown__fondo");

dropdowns.forEach(elemento => {
  elemento.addEventListener("click", ()=>{


    let height = 0;
    let collapse = elemento.parentNode.querySelector(".dropdown__collapse");
    let contenedor = elemento.parentNode.querySelector(".dropdown__desplegable");

    if (!elemento.children[0].classList.contains("dropdown__item--desplegado")) {
      height = contenedor.scrollHeight;

    }

    collapse.style.height = `${height}px`;

    // Animacion del fondo

    if (!elemento.children[0].classList.contains("dropdown__item--desplegado")) {
        elemento.style.background = "#E7E7E7";
        
        elemento.style.transition = "0s";
  
    } else {
        setTimeout(()=>{
            elemento.style.background = "transparent";
            elemento.style.transition = "0.2s";
        }, 300)
        
    }

    // Añadimos la clase

    elemento.children[0].classList.toggle("dropdown__item--desplegado");
    elemento.querySelector(".dropdown__circulo").classList.toggle("dropdown__circulo--rotado");

  })
});

// ! MOVER DE SISTEMAS ADMINISTRATIVOS DE IGV

const sistemaContenedor = document.querySelector(".sistema__contenedor");
const sistemaLi = document.querySelectorAll(".sistema__li");

function mover(elemento, posicion) {
    sistemaContenedor.style.marginLeft = `-${posicion}%`;
    sistemaLi.forEach(element => {
        element.classList.remove("sistema__li--activo");
    });
    elemento.classList.add("sistema__li--activo");
}


// ! CALCULADORA 

const input = document.querySelectorAll(".calculadora__numero--input");

input.forEach((elemento, index) => {
    elemento.addEventListener("keyup", ()=>{
        let valor = parseFloat(elemento.value);
        let igv = elemento.parentNode.parentNode.querySelector(".igv");
        let precio = elemento.parentNode.parentNode.querySelector(".precio");
        let administracion = elemento.parentNode.parentNode.querySelector(".administracion");
        let total = elemento.parentNode.parentNode.querySelector(".total");
        
        if (isNaN(valor)) {
            igv.innerHTML = "0.00";
            precio.innerHTML = "0.00";
            administracion.innerHTML = "0.00";
            total.innerHTML = "0.00";

        } else {
            igv.innerHTML = formatearNumero(0.18 * valor);
            precio.innerHTML = formatearNumero(valor + (0.18 * valor));

            if (index == 0) {
                administracion.innerHTML = formatearNumero(0.12 * (valor + (0.18 * valor)));
                total.innerHTML = formatearNumero((valor + (0.18 * valor)) - (0.12 * (valor + (0.18 * valor))));
            }
            else if (index == 1) {
                administracion.innerHTML = formatearNumero(0.02 * (valor + (0.18 * valor)));
                total.innerHTML = formatearNumero((valor + (0.18 * valor)) + (0.02 * (valor + (0.18 * valor))));
                
            } else if (index == 2) {
                administracion.innerHTML = formatearNumero(0.03 * (valor + (0.18 * valor)));
                total.innerHTML = formatearNumero((valor + (0.18 * valor)) - (0.03 * (valor + (0.18 * valor))));
            }
            
        }
    })
});

function formatearNumero(numero) {
    // Verificar si el número es entero
    if (Number.isInteger(numero)) {
        // Si es entero, agregar .00 al final
        return numero.toFixed(2);
    } else {
        // Redondear a 2 decimales y convertir a cadena con punto como separador decimal
        return parseFloat(numero.toFixed(2)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}
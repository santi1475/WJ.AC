
// ABRIR Y CERRAR POP UPS

const btnContable = document.querySelector("#contable");
const btnConsultoria = document.querySelector("#consultoria");

const popUpContable = document.querySelector(".popUpContable");
const popUpConsultoria = document.querySelector(".popUpConsultoria");

const btnCerrarPopUp = document.querySelectorAll(".popUp__btnCerrar");

btnContable.addEventListener("click", () => {
  popUpContable.style.display = "flex";
  setTimeout(() => {
    popUpContable.classList.add("popUpAnimacion");
  }, 100)
})

btnConsultoria.addEventListener("click", () => {
  popUpConsultoria.style.display = "flex";
  setTimeout(() => {
    popUpConsultoria.classList.add("popUpAnimacion");
  }, 100)
})

for (let i = 0; i < btnCerrarPopUp.length; i++) {
  btnCerrarPopUp[i].addEventListener("click", () => {
    let padre = btnCerrarPopUp[i].parentNode.parentNode;
    padre.classList.remove("popUpAnimacion");
    setTimeout(() => {
      padre.style.display = "none";
    }, 500)
  })
}

// DESPLEGAR DROPDOWN

const dropdowns = document.querySelectorAll(".dropdown__fondo");

dropdowns.forEach(elemento => {
  elemento.addEventListener("click", () => {


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
      setTimeout(() => {
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
  elemento.addEventListener("keyup", () => {
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


//


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu__a");

  function highlightNavLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

    navLinks.forEach((link) => {
      link.classList.remove("menu__a--active");

    })
    navLinks[index].classList.add("menu__a--active");
  }

  window.addEventListener("scroll", highlightNavLink);
});

const heroBars = document.querySelector("#hero__bars");
const menuButton = document.querySelector(".menu__button");
const menu = document.querySelector(".menu");

heroBars.addEventListener("click", () => {
  menu.classList.add("menu--active")
})

menuButton.addEventListener("click", () => {
  menu.classList.remove("menu--active")
})

const whatsappButton = this.document.querySelector(".whatsapp-button-container");

this.window.addEventListener("scroll", function () {
  whatsappButton.style.transform = 'scale(0)';

});

this.window.addEventListener("scrollend", function () {
  whatsappButton.style.transform = 'scale(1)';
});


document.addEventListener("DOMContentLoaded", () => {

  const cardDinamica = document.querySelectorAll(".cardDinamica");



  for (let i = 0; i < cardDinamica.length; i++) {
    let cardDinamicaBackground = cardDinamica[i].querySelectorAll(".cardDinamica__background");

    let cardDinamica__i = cardDinamica[i].querySelector(".cardDinamica__i");

    cardDinamica__i.style.transform = `translateY(${cardDinamica[i].scrollHeight / 2}px)`

    console.log(`${cardDinamica[i].scrollHeight}`);

    cardDinamica[i].addEventListener('mouseleave', function mouseleave() {
      cardDinamica__i.style.transform = `translateY(${cardDinamica[i].scrollHeight / 2}px)`

      cardDinamica__i.style.color = `var(--blanco)`

      for (let f = 0; f < cardDinamicaBackground.length; f++) {
        cardDinamicaBackground[f].style.background = `#000`;
        cardDinamicaBackground[f].style.height = `${cardDinamica[i].scrollHeight}px`;
      }
    });

    cardDinamica[i].addEventListener('mouseenter', function mouseenter() {
      cardDinamica__i.style.transform = `translateY(0px)`
      cardDinamica__i.style.color = `var(--negro)`;
      for (let f = 0; f < cardDinamicaBackground.length; f++) {
        cardDinamicaBackground[f].style.background = `linear-gradient(135deg, rgba(209,36,31,1) 0%, rgba(32,65,103,1) 90%)`;
        cardDinamicaBackground[f].style.height = `${cardDinamica[i].scrollHeight}px`;
      }
    });

  }
})

const btnFormulario = document.getElementById("button");

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btnFormulario.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_bbtrfld';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btnFormulario.value = 'Comunicarme con un asesor';
        alert('¡Enviado!');
      }, (err) => {
        btnFormulario.value = 'Comunicarme con un asesor';
        alert(JSON.stringify(err));
      });
  });
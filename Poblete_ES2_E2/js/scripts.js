let ventana = null
const styles = getComputedStyle(document.documentElement);

function createAlert(message, type) {
  const alertPlaceholder = document.getElementById('alertPlaceholder')
  const wrapper = document.createElement('div')
  while (alertPlaceholder.firstChild) {
    alertPlaceholder.removeChild(alertPlaceholder.firstChild);
  }
  let icon = ""
  switch (type) {
    case "info":
        icon = "fa fas fa-info-circle"
        break;
  
    case "success":
        icon = "fa fa-check-circle"
        break;

    default:
        icon = "fa fa-exclamation-triangle"
        break;
  }

  wrapper.innerHTML = [
    `<div class="alert alert-${type} live-alert d-flex align-items-center alert-dismissible" role="alert">`,
    `   <i class="${icon}"></i>`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  
  
  alertPlaceholder.append(wrapper)

  const alert = wrapper.querySelector('.alert');
  alert.classList.add('fade');
  setTimeout(() => {alert.classList.add('show')}, 10);

}


function form1Validation() {
    const formulario = document.getElementById("form1")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const select = document.getElementById("genero")
    const reqCheck = document.getElementById("terminos")

    let alertMsg = ""
    let error = false

    if (email.value == "") {
        alertMsg += "Por favor, Ingrese un Correo Electrónico.<br>"
        error = true
    }

    else if (!(email.value.includes("@")) || !(email.value.includes("."))) {
        alertMsg += "Por favor, Ingrese un Correo Electrónico Válido.<br>"
        error = true
    };

    if (password.value == "") {
        alertMsg += "Por favor, Ingrese una Contraseña.<br>"
        error = true
    }
    else if (password.value.length < 8) {
        alertMsg += "La contraseña debe tener por lo menos 8 caracteres.<br>"
        error = true
    };

    if (select.value == "") {
        alertMsg += "Por favor, Ingrese seleccione su género.<br>"
        error = true
    }

    if (!reqCheck.checked) {
        alertMsg += "Debe aceptar los términos y condiciones."
        error = true
    }

    if (error) {createAlert(alertMsg, "danger")}
    else {
        formulario.submit()
    }
}

function form2Validation() {
  const date1 = document.getElementById("date1")
  const date2 = document.getElementById("date2")
  let valid = true

  if (date1.value == "" || date2.value == "") {
    createAlert("Ingrese ambas fechas para continuar.", "danger")
    valid = false
    }

  let fecha1 = new Date(date1.value)
  let fecha2 = new Date(date2.value)

  if (fecha2 < fecha1) {
    createAlert("La fecha final no puede ser antes que la fecha inicio.", "danger")
    valid = false
  }

  if (valid) {
    if (!ventana || ventana.closed) {
    var opciones="left=100,top=100,width=650,height=450,toolbar=yes,menubar=yes";
    ventana = window.open('','Fechas',opciones);
    let contenido = "<html><head>"
    contenido += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">`
    contenido += `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>`
    contenido += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`
    contenido += `<script type="text/javascript" src="js/scripts.js"></script>`
    contenido += `<link rel="stylesheet" href="css/style.css">`
    contenido += "<title>¡Fechas Validadas</title>"
    contenido += "</head><body>"
    contenido += `<div class="space"><h1>Formularios | Evaluación Sumativa 2</h1></div>`
    contenido += `<div class="seccion-forms">`
    contenido += `<div id="alertPlaceholder"></div>`
    contenido += `<div class="form-container mb-3">`
    contenido += "Fecha Inicio: " + date1.value + "<br>Fecha Fin: " + date2.value
    contenido += `<script> window.onload = function() { createAlert("¡Éxito!", "success");}</script>`
    ventana.document.write(contenido)
    ventana.document.close()
    }
  }
}

// function openCalendar(calendarID) {
//     const calendar = document.getElementById(calendarID);
//     const calText  = document.getElementById("text-" + calendarID)
//     calendar.focus();
//     calendar.click();
// 
//     calText.value = calendar.value
// }


function colorLoad() {

    const btnColor = styles.getPropertyValue('--btn-color').trim();
    const btnColorHover = styles.getPropertyValue('--btn-color-hover').trim();

    let docBtnColor = document.getElementById("btncolor");
    let docBtnColorHover = document.getElementById("btncolorhover");

    docBtnColor.value = btnColor
    docBtnColorHover.value = btnColorHover
}

function form3Change() {

    // Cambiar Fondo
    const activeItem = document.querySelector('.carousel-item.active');
    const img = activeItem.querySelector('img');
    const imageUrl = img.getAttribute('src');

    // Cambiar Fuente
    const font = document.getElementsByName("fonts");
    let valid = true

    // Cambiar Colores
    const colorBtn = document.getElementById("btncolor").value;
    const colorBtnHover = document.getElementById("btncolorhover").value;

    let fuente = ""
    let fontName = font[0].value
    if (fontName !== "") {
        switch (fontName) {
            case "arial":
                fuente = `"Arial",Helvetica Neue,Helvetica,sans-serif`
                break;

            case "calibri":
                fuente = `"Calibri",Candara,Segoe,Segoe UI,Optima,Arial,sans-serif`
                break;

            case "corben":
                fuente = `"Corben", serif;`
                break;

            case "georgia":
                fuente = `"Georgia",Times,Times New Roman,serif`
                break;

            case "lucida":
                fuente = `"Lucida Grande",Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-serif`
                break;

            case "optima":
                fuente = `"Optima",Segoe,Segoe UI,Candara,Calibri,Arial,sans-serif`
                break;

            case "perpetua":
                fuente = `"Perpetua",Baskerville,Big Caslon,Palatino Linotype,Palatino,URW Palladio L,Nimbus Roman No9 L,serif`
                break;

            case "rockwell":
                fuente = `"Rockwell",Courier Bold,Courier,Georgia,Times,Times New Roman,serif`
                break;

            case "segoe-ui":
                fuente = `"Segoe UI",Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif`
                break;

            case "times-new-roman":
                fuente = `"TimesNewRoman",Times New Roman,Times,Baskerville,Georgia,serif`
                break;

        }
        createAlert("Fuente cambiada a " + fontName, "info")
        document.documentElement.style.setProperty("--fuente", fuente)
    }
        
    document.querySelector('.seccion-forms').style.backgroundImage = `url(${imageUrl})`;
    document.documentElement.style.setProperty("--btn-color", colorBtn);
    document.documentElement.style.setProperty("--btn-color-hover", colorBtnHover);
}   
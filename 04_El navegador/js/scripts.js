
/***************************************|
|          OBJETO WINDOW                |                                       
****************************************/
//todos estos son metodos que existen el en objeto global window
//alert('holamundo')
//confirm() -> no se le pueden dar estilos
// let userRespond = confirm('estas seguro')
// if (userRespond) {
//     alert('el usuario esta seguro')
// }else {
//     alert('el usuario  NO esta seguro')
// }

// let userAge = prompt('cual estu edad')
// alert(`la edad del usuario es ${userAge}`)

//open()
//window.open('https://ed.team', 'EDteam', 'width=200,height=400');

// const form = document.getElementById('responsive-tester-form');

// if (form) {
//     form.addEventListener('submit', () => {
//         let width = form.querySelector('#width'),
//             height = form.querySelector('#height'),
//             url = form.querySelector('#url')
//             if (width && height && url) {
//                 width = width.value;
//                 height = height.value;
//                 url = url.value;
//             }
//             window.open(url, url, `width=${width},height=${height}`)
//     })
// }

/***************************************|
|          OBJETO LOCATION              |                                       
 ****************************************/
// const urlPage = location.href,//nos devuelve la url de la pagina
//       hostPage = location.host,//dominio + puerto
//       hostPortName = location.hostname,//dominio
//       protocolPage = location.protocol,//protocolo
//       originPage = location.origin,//protocolo + dominio
//       portPage = location.port,//puerto
//       hashPage = location.hash,//#nosmuestraelhash
//       pathnamePage = location.pathname;//ruta interna luego del dominio
// console.log(urlPage, hostPage, hostPortName, protocolPage, originPage, portPage, hashPage, pathnamePage)

const links = document.links;
console.log(links);

for (let link of links) {
    if (link.href.includes(location.hash)) {//lo pinta de amarillo si el href de los enlaces contiene un hash 
        link.style.background = 'yellow'    //que coincida con el url dela pagina
    } 
}

//location.reload()//recarga la pagina
//location.assign('https://www.google.com')//navega a la url que le pasemos
//location.replace('https://www.google.com')//navega a la url que le pasemos pero no guarda en el history
//location.href -> asi leemos la url de la pagina
//location.href ='https://www.google.com'// esta instruccion sirve como lectura y como escritura

/***************************************|
|          OBJETO HISTORY               |                                       
****************************************/
//history->contiene el historial de navegacion de la pestana
// history.back() -> va una navegacion atras 
// history.forward() -:> va una navegacion adelante
// history.go(-1)//-1 ->back 1 -> forward pueden ser muchos mas numeros

/***************************************|
|          OBJETO NAVIGATOR             |                                       
****************************************/

//detectar navegador -> ya no es bueno detectar el navegador si soporta ciertos estilos css
//hoy en dia es mejor detectar caracteristicas
//para detectar caracteristicas puede ser por css, javascrit, o librerias como modernizer
//on javascri0pt podriamos usar el operador in

/***************************************|
|          TIMERS                       |                                       
****************************************/

// setTimeout(callback,ms) -> se ejecuta despues de cierto tiempo
// setInterval(calback, ms); -> se ejecuta despues de cierto tiempo y repetitivas veces

// setTimeout(() => {
//     alert('holamundo')
    
// }, 3000);

// let contador = 0;
// let intervalo = setInterval(() => {
//     contador++;
//     if (contador === 5) {  
//         clearInterval(intervalo)
//     }
//     console.log(`hola ${contador} vez`)
// }, 3000);

//haciendo reloj

// console.log(new Date().toLocaleTimeString())

// setInterval(() => {
//     const clock = document.getElementById('clock')
//     if (clock) clock.textContent = new Date().toLocaleTimeString();
// }, 1000);

/***************************************|
|          DATE                         |                                       
****************************************/

// const now = new Date()//empieza desde la fecha actual
// console.log(now)
// const now1 = new Date(1997,3,5)//empieza desde la fecha indicada
// console.log(now1)




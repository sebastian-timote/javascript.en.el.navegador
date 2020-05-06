function holaMundo() {
    alert('hola mundo');
}
const title = document.getElementById('title');
// //title.addEventListener('eventName', eventHandler)
// title.addEventListener('click', () => {
//     alert('hola perros')
// })
// const holamundo = () => alert('hola compa');
// title.addEventListener('click', holamundo)
    
//const holamundo = e => console.log(e.target.textContent);
// title.addEventListener('click', e =>{
//     holamundo(e);
// })

/********MOUSE EVENT **********/
// document.querySelector('button').addEventListener('click', e =>{
//     holamundo(e);
// })
// title.addEventListener('dblclick', e => {//doble click
//     holamundo(e);
// })
//estos eventos es igual a hoover en css
// title.addEventListener('mouseenter', e => {//cuando el mouse entra al elemen que oye
//     holamundo(e);
// })
// title.addEventListener('mouseleave', e => {//cuando el mouse sale al elemen que oye
//     holamundo(e);
// })

const createMenu = (e) => { 
    const menu = document.createElement('div')
    menu.id = 'context-menu'
    menu.textContent = 'soy un menu contextual';
    const prevMenu = document.getElementById('context-menu')
    if (prevMenu) document.body.removeChild(prevMenu)
    document.body.appendChild(menu)
    menu.style.padding = '1em'
    menu.style.background = '#eee'
    menu.style.position = 'fixed'
    menu.style.top = `${e.pageY}px`//atrapa en cual lugar del element hace click
    menu.style.left = `${e.pageX}px`
}
// title.addEventListener('contextmenu', e => {//captura el click derecho
//     //holamundo(e);
//     createMenu(e);
//     e.preventDefault()
// })
// title.addEventListener('mousedown', e => {//captura cuando se mentiene presionado el click
//     holamundo(e);
//     // createMenu(e);
//     // e.preventDefault()
// })

// title.addEventListener('mouseup', e => {//captura cuando suelto el click
//     holamundo(e);
//     // createMenu(e);
//     // e.preventDefault()
// })

// title.addEventListener('mousemove', e => {//captura cuando el mouse se mueva en el elemento
//     holamundo(e);
//     //createMenu(e);
//     //e.preventDefault()
// })

/********EVENTOS DE TECLADO *******/
//const holamundo = e => console.log(e);

// document.querySelector('input').addEventListener('keyup', e => {//cuando dejamos de presionar
//     holamundo(e);
//     console.log(e.key);
//     console.log(e.code);
//     console.log(e.ctrlKey);
//     console.log(e.altKey);
//     //e.preventDefault();con keyup no funciona el prevent default
// })
// addEventListener('keydown', e => {//escucha todo el documento
//     
//     if (e.key === 'a' && e.ctrlKey === true ) {
//         e.preventDefault;
//         alert('control A');
//     }
// })
// let x=0,y=0;
// addEventListener('keyup', e => {//escucha todo el documento
//     const ball = document.getElementById('ball');
//     const move = direction => {
//         switch (direction) {
//             case 'up':
//                 y--
//                 break;
//             case 'down':
//                 y++
//                 break;
//             case 'left':
//                 x--
//                 break;
//             case 'right':
//                 x++
//                 break;
                
//             default:
//                 break;
//         }
//         ball.style.transform = `translate(${x*10}px,${y*10}px)`
//     }
    
//     switch (e.key) {
//         case 'ArrowUp':
//             move('up');
//             break;
//         case 'ArrowDown':
//             move('down');
//             break;
//         case 'ArrowLeft':
//             move('left');
//             break;
//         case 'ArrowRight':
//             move('right');
//             break;
//         default:
//             break;
//     }
    
// })

/*******EVENTOS DEL FORM *********/
// addEventListener('DOMContentLoaded', () => {//espera hasta que cargue todos los elementos html
//     const form = document.getElementById('form');
//     const rememberPassword = document.getElementById('remember-password');
//     const name = document.getElementById('name');
//     const age = document.getElementById('age');
//     form.addEventListener('submit', () => {//es el submit de todo el formulario
//         console.log('ha enviado el form');
//     })
//     rememberPassword.addEventListener('change', e => {
//         if (e.target.checked) {
//             console.log('el usuario quiere recordar su contrasena');
//         }else {
//             console.log('el usuario NO quiere recordar su contrasena')
//         }
//     })
//     age.addEventListener('blur', () => {//cuando sale del focus del element
//         //console.log(e);
//         if (isNaN(age.value)) {
//             alert('no es una edad valida');
//             age.focus();//selecciona foco del elemnet 
//             age.value = '';//borro el dato errado
//         }else{
//             console.log('es numero :)');

//         }

//     })

//     name.addEventListener('focus', () => {//cuando entro al elemento o tengo la seleccion focus
//         //console.log(e);
//         name.value = '';//reseteo el input

//     })
// })

/******EVENTOS DEL DOM*******/
//DOMContentLoaded -> este evento espera hasta que cargue todos el dom y luego ejecuta lo que esta adentro
//espera hasta qu ecargue todas los elementos del DOM para evitar errores
//se usa porque muchas veces llamamos a un elemento antes de que exista
/******EVENTOS DEL NAVEGADOR ******/
//load -> que ocurre cuando carga toda la pagina incluyendo fotos y videos
//scroll-> ocurre cuando se hace scroll
// addEventListener('scroll', e => {
//     console.log(scrollX, scrollY)
// })
//resize
// addEventListener('resize', e => {//ocurre cuando redimensionamos la pagina web
//     //e.target = window
//     console.log(innerWidth, innerHeight);//es el viewport la parte visible de la pagina 
//     console.log(outerWidth, outerHeight);//este valor es de cuando redimensionamos toda laventana del navegador
// })
/********EVENTOS MULTIMEDIA */

// const video = document.getElementById('video'),
//       playButton = document.getElementById('play'),
//       pauseButton = document.getElementById('pause');

// playButton.addEventListener('click',() =>{
//     video.play();
// })
// pauseButton.addEventListener('click',() => {
//     video.pause();//estos eventos se estan ejecutando no se estan escuchando
//     //playButton.click();//este evento se esta ejecutando
// })
// video.addEventListener('play',(e) => {//este evento se esta escuchando
//     console.log(e);
//     console.log('undi play');
// })
// video.addEventListener('pause',() => {//para escuchar le habilitamos el controls en html
//     console.log('undi pause');
// })

/********PROPAGACION DE EVENTOS ***********/
//propagacion -> eventos que suceden en el hijo y que por ende suceden en el padre

const div1= document.getElementById('div-1'),
      div2= document.getElementById('div-2'),
      div3= document.getElementById('div-3')

// div1.addEventListener('click', (e) => {
//     console.log(e.target.id);
// })
// div2.addEventListener('click', (e) => {
//     console.log(e.target.id);
// })
// div3.addEventListener('click', (e) => {
//     console.log(e.target.id);
// })
// document.querySelectorAll('div').forEach( el =>{
//     el.addEventListener('click', e => {
//         console.log(`hiciste click en el div${e.target.id}`)
//         e.stopPropagation();//este evita la propagacion 
//     })
// })
/********DELEGACION DE EVENTOS ***********/

// document.querySelectorAll('div').forEach( el =>{//se podria hacer esto en la galleria pero consumiria mucha memoria
//     el.addEventListener('click', e => {
//         console.log(`hiciste click en el div${e.target.id}`)
//         e.stopPropagation();//este evita la propagacion 
//     })
// })
//ejemplo de delegacion de eventos
const gallery = document.getElementById('gallery')
gallery.addEventListener('click', e => {
    const t = e.target,//captura el elemento al que se le hace click
          images = Array.from(gallery.querySelectorAll('img')),//array de todaslas imagenes
          i = images.indexOf(t);
    console.log(`hiciste click en la imagen ${i + 1}`);
})







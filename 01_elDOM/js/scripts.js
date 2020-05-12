//seleccion de nodos
//console.log(document.getElementById('title'));
//document.getElementById('title') -> solo devuelve un unico elemento y solo puede acceder al elemnto document
//document.querySelector('#title') -> trabaja con selectores css devuelve un unico elemento y se acceder a elemntos hijos
//element.querySelector('#title')
//document.querySelectorAll('ul li ') -> igual que query selector pero este trae una lista de 
//elementos igual si traemos solo un elemento nos lo devuelve en una lista
// const title = document.getElementById('title'),
//     title2 = document.querySelector('#title'),
//     listItems = document.querySelectorAll(' ul li'),//obtenemos todos los li
//     list = document.getElementById('list');

// //const listItems = document.querySelectorAll(' ul li:nth-child(2)');//obtenemosel li de la posicion 2 pero lo devuelve en una nodelist

// //title.style.background = 'yellow';
// //console.log(document.getElementById('title'));//trabaja con el id 
// console.log(title2);//trabaja con selectores de css
// console.log(title);//accedemos al id del h1 pero no es buena practica 
// console.log(listItems[0]);//accedemos ala posicion de una lista del element
// console.log(list.querySelector('li:last-child'));//el query selector puede funciona con un elemento hijo por ejemplo list

/*******COLECCIONES*********/

// const title2 = document.querySelector('ul');//no son arrays
// const title = document.querySelectorAll('li');//lo que devuelven no son arrays
// // console.log(title2);
// // console.log(title);
// const nodelist = document.querySelectorAll('li');//devuelve lista de nodos
// const elementList = document.getElementsByTagName('li');//devuelve lista de elements

//const nodelist = [...document.querySelectorAll('li')];//lo convertimos a array con spread operator
//const nodelist = Array.from(document.querySelectorAll('li'));//otra forma de conversion a array con el prototipo
//nodelist.map( el => el.style.background = 'yellow')//.map() solo funciona con array
// nodelist.map( el => {//lo recorre
//     if (el.textContent.trim().toUpperCase() === 'OBJECT'){
//         el.remove();
//     }
// })

//const list = document.querySelector('ul');
// console.log(list.children);//devuelve los hijos 
// console.log(list.childNodes);// es muy raro

// for (const node of list.childNodes) {
//     console.log(node);
// }

/*******atributos*********/
/*****get****/
//const list = document.querySelector('ul');
//const title = document.getElementById('title');
//console.log(title.getAttribute('id'));//obtenemos id
//console.log(title.getAttribute('class'));//da null no tenemos
//console.log(title.getAttribute('value'));//obtenemos ids
//console.log(list.getAttribute('id'));

/*****set****/
// const setAtri =document.querySelector('h2');
// //setAtri.setAttribute('id', 'miid');// hace lo mismo
// setAtri.id = 'miid';//hace lo mismo
// setAtri.classList.add('main-title', 'title-front-page');//anade clases
// setAtri.classList.remove('titulo');//anade clases
// setAtri.classList.toggle('hola');//si no esta la anade y si esta la quita

// console.log(setAtri);//obtenemos id
// console.log(setAtri.classList);//obtenemos una lista de las clases que tiene el elemento

/*******text content******** */
//sirven como lectura y escritura
// const title = document.querySelector('h1');
// //lectura
// console.log(title.textContent);//solo muestra texto plano
// console.log(title.innerHTML);//muestra el contenido con etiquetas html hijas
// console.log(title.outerHTML);//me imprime con etiquetas html pero como strings
// console.log(title.innerText);//es igual al textcontent pero el textcontent es mas standard
// //escritura
// title.textContent = 'hola muchachos como van';//solo le seteamos texto plano no sirve con etiquetas html
// title.innerHTML = `hola <em>muchachos</em> como van`;//solo le seteamos texto plano no sirve con etiquetas html

/*******crear elementos en el DOM******* */

// const profesor = document.createElement('p')//creamos elemento
// const containerProfesor = document.getElementById('teacher')
// profesor.textContent = 'alexys lozada'//seteamos contenidio
// profesor.classList.add('teacher')//colocamos clase
// //document.body.appendChild(profesor)//appendchild siempre lo va a colocar de ultimo elemento
// console.log(profesor)
// if(containerProfesor && containerProfesor.querySelector('span')){
//     containerProfesor.querySelector('span').appendChild(profesor);//appendchild es el que lo muestra en el dom
// }

 function holamundo(){
    alert('holamundo');
}


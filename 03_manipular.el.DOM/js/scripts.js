//const parent = document.getElementById('parent')
/***************************************|
|          HIJOS/CHILD                  |                                       
****************************************/

//console.log(parent.children);//esta me devuelve un html collection con solo los hijos sin los nietos
//console.log(parent.querySelectorAll('div'))//esta me devuelve un nodelist con con hijos y nietos
//console.log(parent.childNodes);//devuelve un nodelist consolo los hijos
//console.log(parent.lastChild)//devuelve nodo o element
//console.log(parent.firstElementChild)// devuelve un el primer elemento hijo
//console.log(parent.hasChildNodes())//este metodo devuelve boolean pero si el element tiene hijos
//para que devuelva false tiene que estar la etiqueta html sin nada de enter o espacios ya que los cuenta como hijos 

/***************************************|
|          HERMANOS/SIBLING             |                                       
****************************************/


// const grandson2 = document.getElementById('grandson_2')
// console.log(grandson2.previousElementSibling)// el anterior hermano
// console.log(grandson2)//el hermano actual
// console.log(grandson2.nextElementSibling)//el hermano siguiente
// console.log(grandson2.parentElement)// en este caso el padre de grandson2 es el hijo 2
// console.log(grandson2.parentNode)// igual el parent simepre es un elemnet
// console.log(grandson2.parentElement.parentElement)//se devuelve al padre del hijo 2

/***************************************|
|          INSERTAR ELEMENTOS           |                                       
****************************************/

// const parent = document.getElementById('parent'),
//       grandson2 = document.getElementById('grandson_2'),
//       newElement = document.createElement('h2');
// newElement.textContent = 'soy un nuevo elemento'
// //parent.appendChild(newElement)//inserta elemento al final 
// grandson2.parentElement.insertBefore(newElement,grandson2)//podemos insertar elementos en el lugar que queramos
//console.log(parent)

//otra forma

// const parent = document.getElementById('parent'),
//       childs = Array.from(parent.children),
//       childParent = childs.filter(child => child.children.length > 0)[0],
//       grandSons = Array.from(childParent.children),
//       grandson3 = grandSons.filter(child => child.textContent.trim() === 'nietos 3')[0],
//       newElement = document.createElement('h2')
// newElement.textContent = 'Soy un nuevo elemento'

// childParent.insertBefore(newElement,grandson3)

/***************************************|
|          EJEMPLO CON INSERTBEFORE     |                                       
****************************************/

//vamos a insertar un div o publicidad en la mitad de unos parrafos
// const post = document.getElementById('post'),
//       ad = document.createElement('div')
// ad.id = 'publicidad'
// ad.textContent = 'publicidad'

// const getMiddleChild = element => {
//     const childs = element.children,
//           l = childs.length,
//           i = Math.floor(l / 2)
//     return childs[i]
// }
// post.insertBefore(ad, getMiddleChild(post))

/***************************************|
|          INSERTADJACENT               |                                       
****************************************/


// const parent = document.getElementById('parent'),
//       ad = document.createElement('div');
// ad.id = 'EDteam'
// ad.textContent = 'soy un ejemplo de insert adjacent'

//parent.insertAdjacentElement('beforebegin', ad)//es un hermano anterior
//parent.insertAdjacentElement('afterbegin', ad)//es un primer hijo
//parent.insertAdjacentElement('beforeend', ad)//es un ultimo hijo
//parent.insertAdjacentElement('afterend', ad)//es un hermano siguiente
//parent.insertAdjacentText('beforebegin', 'hola mundo')//tambien se puede insertar textos
//parent.insertAdjacentHTML('beforebegin', `<h1>holaMundo</h1>`)//tambien etiquetas html

/***************************************|
|          REEMPLAZAR HIJOS             |                                       
****************************************/

//parent.replaceChild(ad, parent.children[0]);

/***************************************|
|    INSERT CON METODOS DE JQUERY       |                                       
****************************************/

//parent.before(ad)//inserta hermano anterior 
//parent.after(ad)//hermano siguiente
//parent.prepend(ad)//primer hijo
//parent.append(ad)//ultimo hijo
//parent.children[0].replaceWith(ad)//reemplaza hijo

/***************************************|
|    clonar y eliminar                  |                                       
****************************************/
// const iggybb = document.querySelector('img'),
//       iggyParent = document.getElementById('iggyparent'),
//       cloneIggy = iggybb.cloneNode(true)//el true es si quiere clonar el elemento con hijos
// cloneIggy.title='clone'
// iggyParent.appendChild(cloneIggy);
// //iggybb.remove();

// console.log(cloneIggy);

/***************************************|
|    crear elementos                    |                                       
****************************************/
//este es un ejemplo de como podriamos hacerlo sin necesidad de createDocumentFragment()
//createDocumentFragment() -> pero al usarla la guardamos en memoria la iteracion y luego la pintamos
//esto se hace con el fin de no consumir tanto recursos si manejamos muchos datos

//ejemplo sin createDocumentFragment()
// const teachers = ['alexis','beto','alvaro','daniel','jon','alexis','beto','alvaro','daniel','jon',
// 'alexis','beto','alvaro','daniel','jon','alexis','beto','alvaro','daniel','jon','alexis','beto','alvaro','daniel','jon'],
//       teacherList = document.createElement('ul'),
//       teacherListContainer = document.getElementById('teacher-list');
// teacherListContainer.appendChild(teacherList)

// for (let teacher of teachers) {
//     const li = document.createElement('li')
//     teacherList.appendChild(li);
//     li.textContent = teacher;
// }


//ejemplo con createDocumentFragment()
// const teachers = ['alexis','beto','alvaro','daniel','jon','alexis','beto','alvaro','daniel','jon',
// 'alexis','beto','alvaro','daniel','jon','alexis','beto','alvaro','daniel','jon','alexis','beto','alvaro','daniel','jon'],
//       teacherList = document.createElement('ul'),
//       teacherListContainer = document.getElementById('teacher-list'),
//       teacherlistFragment = document.createDocumentFragment();
// teacherListContainer.appendChild(teacherList)

// for (let teacher of teachers) {
//     const li = document.createElement('li')
//     teacherlistFragment.appendChild(li);
//     li.textContent = teacher;
// }
// teacherList.appendChild(teacherlistFragment);

/***************************************|
|    TEMPLATES HTML                     |                                       
****************************************/

// const template = document.getElementById("template"),
//       myNewTemplate =template.content.cloneNode(true);
// myNewTemplate.querySelector('h2').textContent = 'EDteam';
// myNewTemplate.querySelector("p").textContent = 'tu futuro te esta esperando';

// document.getElementById('content').appendChild(myNewTemplate)

/***************************************|
|    CSS OM                             |                                       
****************************************/
//STYLE
//mathMedia() -> permite manejar mediaquerys
//getComputedstyle() -> muestra los estilos calculados por el navegador
//getBoundingclientRect() -> muestra la posicion y el tamano exacto de un elemento
// const title = document.querySelector('h1'),
//       description = document.querySelector('p'),
//       mediumBp = matchMedia('(min-width: 640px) and (orientation: portrait)')//es un objeto que usamos para evaluar una media query de css

// // title.style.color = 'red'
// // title.style.backgroundColor = 'blue'//en javascript los estilos con guion son con camel case

// const changeColor = ()=> {
//     if (mediumBp.matches) {
//         document.body.style.background = 'red'
//     }else {
//         document.body.style.background = 'yellow'
//     }
// }

// console.log(mediumBp);

// addEventListener('resize', changeColor)
// addEventListener('DOMContentLoaded', changeColor)

//ESTA ES OTRA FORMA SIN EL MEDIA QUERY PERO SOLO TOMA LOSS DATOS DEL ANCHO DEL  VIEWPORT
// if (window.innerWidth > 640) {
//     document.body.style.background = 'yellow'
// }

//getComputedstyle() -> muestra los estilos calculados por el navegador
// const title = document.querySelector('h1'),
//       description = document.querySelector('p');
//console.log(getComputedStyle(description).fontSize);
// console.log(getComputedStyle(description).display);
// console.log(getComputedStyle(description).position);

//EJEMPLO GETBOUNDINGCLIENTRECT()
const boton = document.querySelector('button')
console.log(boton.getBoundingClientRect().width)


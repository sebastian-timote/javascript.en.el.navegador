
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

const form = document.getElementById('responsive-tester-form');

if (form) {
    form.addEventListener('submit', () => {
        let width = form.querySelector('#width'),
            height = form.querySelector('#height'),
            url = form.querySelector('#url')
            if (width && height && url) {
                width = width.value;
                height = height.value;
                url = url.value;
            }
            window.open(url, url, `width=${width},height=${height}`)
    })
}



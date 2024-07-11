//console.log('funcionando');

var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario)
    
    var usu = datos.get('usuario')
    var pas = datos.get('pass')

    localStorage.setItem("usuario",usu)
    localStorage.setItem("pass",pas)
    localStorage.setItem("sesion","1")

    window.location.href = "./index.html"

})
//console.log('funcionando');

var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    localStorage.setItem("usuario","")
    localStorage.setItem("pass","")
    localStorage.setItem("sesion","0")

    window.location.href = "./index.html"
})
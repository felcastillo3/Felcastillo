console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // usuario_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            descripcion: "",
            url: 'https://pythoneers2024.pythonanywhere.com/tiposactividad/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.descripcion = data.descripcion;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let tiposactividad = {
                descripcion: this.descripcion,
            }
            var options = {
                body: JSON.stringify(tiposactividad),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    console.log(tiposactividad)
                    alert("Registro modificado")
                    window.location.href = "./tiposactividad.html"; // navega a tiposactividad.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')

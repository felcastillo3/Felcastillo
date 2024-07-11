console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // periodo_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            stock: 0,
            precio: 0,
            url: 'https://pythoneers2024.pythonanywhere.com/periodos/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre;
                    this.mes = data.mes
                    this.anio = data.anio
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let periodo = {
                nombre: this.nombre,
                mes: this.mes,
                anio: this.anio,
            }
            var options = {
                body: JSON.stringify(periodo),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./periodos.html"; // navega a periodos.html          
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

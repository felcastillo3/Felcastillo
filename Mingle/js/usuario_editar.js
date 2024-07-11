console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // usuario_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            user: "",
            password: "",
            apellido: "",
            nombres: "",
            fecnac: "",
            sexo: "",
            adminis: "",
            estado: "", 
            peso: 0,
            alturacm: 0,
            email: "",
            telefono: "",
            fecalta: "",
            foto: "",
            url: 'https://pythoneers2024.pythonanywhere.com/usuarios/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.user = data.user;
                    this.password = data.password;
                    this.apellido = data.apellido;
                    this.nombres = data.nombres;
                    this.fecnac = data.fecnac;
                    this.sexo = data.sexo;
                    this.adminis = data.adminis;
                    this.estado = data.estado;
                    this.peso = data.peso
                    this.alturacm = data.alturacm
                    this.email = data.email;
                    this.telefono = data.telefono;
                    this.fecalta = data.fecalta;
                    this.foto = data.foto;    
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let usuario = {
                user: this.user,
                password: this.password,
                apellido: this.apellido,
                nombres: this.nombres,
                fecnac: this.fecnac,
                sexo: this.sexo,
                adminis: this.adminis, 
                estado: this.estado,
                peso: this.peso,
                alturacm: this.alturacm,
                email: this.email,
                telefono: this.telefono, 
                fecalta: this.fecalta,
                foto: this.foto,
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    console.log(usuario)
                    alert("Registro modificado")
                    window.location.href = "./usuarios.html"; // navega a usuarios.html          
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

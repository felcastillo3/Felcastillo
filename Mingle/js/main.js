window.addEventListener("load",()=>{
    const currentDate= new Date();
    currentYear.innerText=currentDate.getFullYear()
})


cadquienes = `
    <h1 class="display-3 mt-3 mb-3">Quienes Somos</h1> 
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
        <h2 class="display-2 mt-3 mb-3">Mingle tu Web para encuentros grupales</h2>
        <p class="display-5 mt-3 mb-3">Nuestro objetivo es que conozcas un grupo de gente que le guste lo mismo que a vos y organicen salidas en grupo. Cenas, recitales, bailes, caminatas, viajes lo que surja!</p>
        <p class="display-5 mt-3 mb-3">En Mingle garantizamos la seguridad de que vas a conocer en persona a la misma con la que te estás mensajeando. Y para ello tenemos un riguroso filtro de ingreso miembros.</p> 
    </div>
`    

cad1 = `
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #5E2FCD;">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
           <img src="img/logo mingle.jpg" width="80px" alt=""> 
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"     aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-uto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html#calendario"><i class="material-symbols-outlined">event_list</i>Eventos Próximos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html#algunasSalidas"><i class="material-symbols-outlined">landslide</i>Algunas Salidas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html#quienesSomos"><i class="material-symbols-outlined">groups</i>Quienes Somos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login1.html"><i class="material-symbols-outlined">person_edit</i>Inicio Sesión/Registrarse</a>
                </li>
            </ul>
        </div>
    </div>
</nav >`

document.querySelector("#quienesSomos").innerHTML = cadquienes
document.querySelector(".Menu").innerHTML = cad1


// cargo los eventos leyendo del archivo json de encuentros//
// tenemos una API REST//
let url = 'js/encuentros.json'
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.docs
        let cad = ``
        cad = `<h1 class="display-3 mt-3 mb-3" id="calendario">Proximos Eventos</h1>
               <div class="row text-center animate__animated animate__bounceInLeft" id="Eventos">`


        for (let elemento of datos) {
            cad = cad + ` 
            <div class="col-sm-12 col-md-6 mb-3" >
                <div class="card-group">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title">${elemento.actividad}</h5>`
                            if (elemento.tipo_actividad == "Función") {
                                cad = cad + `
                                <img src="img/Sala_de_cine.jpg" class="card-img-bottom" alt="">`
                            }
                            if (elemento.tipo_actividad == "Encuentro") {
                                cad = cad + `
                                <img src="img/encuentros-literarios.jpg" class="card-img-bottom" alt="">`
                            }
                            if (elemento.tipo_actividad == "Concierto") {
                                cad = cad + `
                                <img src="img/Concierto.jpg" class="card-img-bottom" alt="">`
                            }
                            if (elemento.tipo_actividad == "Feria") {
                                cad = cad + `
                                <img src="img/feria.jpg" class="card-img-bottom" alt="">`
                            }
                            if (elemento.tipo_actividad == "Formación") {
                                cad = cad + `
                                <img src="img/formacion.jpg" class="card-img-bottom" alt="">`
                            }
                            cad = cad + `
                            <p hidden id="id">${elemento.id}</p>
                            <p class="card-text text-center">${elemento.fecha_ini}</p>

                            <a href="#" class="btn btn-info">Detalles</a>
                            <a href="#" class="btn btn-info">Quiero Participar</a>
                        </div>
                    </div>
                    <div class="card shadow">
                        <iframe src="${elemento.mapa}" width ="100%" height ="400" style ="border:0;" allowfullscreen = "" loading ="lazy" referrerpolicy ="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div > 
        `
        }

        document.querySelector(".container").innerHTML = cad
    }
 );

// cargo las salidas leyendo del archivo json de salidas// 
let url1 = 'js/salidas.json'
fetch(url1)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.docs
        let cad2 = ``
        cad2 = `<h1 class="display-3 mt-3 mb-3" id = "algunasSalidas" > Revive Algunos de nuestros encuentros</h1>`

        for (let elemento of datos) {
            cad2 = cad2 + ` 
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title text-center">${elemento.actividad}</h5>
                        <div class="ratio ratio-16x9">
                            <iframe width="560" height="315" src="${elemento.video}"
                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <p class="text-center">${elemento.fecha_ini}</p>
                    </div>
                </div>
            </div> `
        }

        document.querySelector("#Salidas").innerHTML = cad2
    }
);    





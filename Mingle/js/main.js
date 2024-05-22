/*Pongo el año actual en el footer*/
window.addEventListener("load",()=>{
    const currentDate= new Date();
    currentYear.innerText=currentDate.getFullYear()
})

/*Pego el menu al top cuando se haga scroll hacia abajo*/
const navEl = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('fixed-top');
    } else {
        navEl.classList.remove('fixed-top');
    }
});

/*Quienes somos*/
cadquienes = `
    <h1 class="display-3 mt-3 mb-3">Quienes Somos</h1> 
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-3">
        <h2 class="display-2 mt-3 mb-3">Mingle tu Web para encuentros grupales</h2>
        <p class="display-5 mt-3 mb-3 pd-10">Nuestro objetivo es que conozcas un grupo de gente que le guste lo mismo que a vos y organicen salidas en grupo. Cenas, recitales, bailes, caminatas, viajes lo que surja!</p>
        <p class="display-5 mt-3 mb-3 pd-10">En Mingle garantizamos la seguridad de que vas a conocer en persona a la misma con la que te estás mensajeando. Y para ello tenemos un riguroso filtro de ingreso miembros.</p> 
    </div>
`    
document.querySelector("#quienesSomos").innerHTML = cadquienes


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
                            <h5 class="card-title ">${elemento.actividad}</h5>`
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

                            <a href="detalles.html?id_evento=${elemento.id}" type="submit" class="btn btn-info">Detalles</a>
                            <a href="aviso.html" class="btn btn-info">Quiero Participar</a>
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



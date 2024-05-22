/*Pego el menu al top cuando se haga scroll hacia abajo*/
const navEl = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('fixed-top');
    } else {
        navEl.classList.remove('fixed-top');
    }
});

/*buscamos los valores de la URL con la propiedad window.location.search de Javascript */
const paramURL = window.location.search
  
/*creamos una instancia de URLSearchParams */
const parametrosURL = new URLSearchParams(paramURL)
  
/* usamos el metodo GET para recuperar los parametros */
const idparam = parametrosURL.get('id_evento');
  
// cargo los eventos leyendo del archivo json de encuentros//
let url = 'js/encuentros.json'
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        datos = data.docs
        let cad = ``
        for (let elemento of datos) {
            if (elemento.id == idparam) {
                cad = cad + ` 
                <div>
                    <h2 class="display-6 mt-5">${elemento.actividad}</h2>
                    
                    <div class="container mt-5" id="carrousel" >
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">    
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src=${elemento.foto1} class="d-block w-100">
                                        </div>
                                        <div class="carousel-item">
                                            <img src=${elemento.foto2} class="d-block w-100">
                                        </div>
                                        <div class="carousel-item">
                                            <img src=${elemento.foto3} class="d-block w-100">
                                        </div>
                                        <div class="carousel-item">
                                            <img src=${elemento.foto4} class="d-block w-100">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>    
                        </div>
                    </div>
 
                    <div class="container mt-2" style="background-color: #aec4e4; padding: 30px; border-radius:10px">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">    
                                <form action="">
                                    <h2 class="display-6 mt-1 mb-2 text-center">Descripción Evento</h2>
                                    <p class="col-form-label display-7">Descripcion_actividad: ${elemento.descripcion_actividad}</p>
                                    <p class="col-form-label display-7">Tipo_actividad: ${elemento.tipo_actividad}</p>
                                    <p class="col-form-label display-7">Disciplina: ${elemento.disciplina}</p>
                                    <p class="col-form-label display-7">Lugar: ${elemento.lugar}</p>
                                    <p class="col-form-label display-7">Dirección: ${elemento.dirección}</p>
                                    <p class="col-form-label display-7">Barrio: ${elemento.barrio}</p>
                                    <p class="col-form-label display-7">Fecha: ${elemento.fecha_ini}</p>
                                    <p class="col-form-label display-7">Horario: ${elemento.horario}</p>
                                    <p class="col-form-label display-7">Amenities: ${elemento.amenities}</p>
                                    <p class="col-form-label display-7">Costo: $ ${elemento.costo}</p>
                                    <div class="text-center mt-5 mb-2">
                                        <a href="index.html#calendario" class="btn btn-primary">Volver</a>
                                        <a href="aviso.html" class="btn btn-primary">Quiero Anotarme</a>
                                    </div>    
                                </form>
                            </div>
                        </div>        
                    </div>
                </div>    
                `
            }     
        }            

        document.querySelector("#app").innerHTML = cad
    }
 );

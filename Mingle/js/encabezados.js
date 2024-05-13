cadhead = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mingle</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Bootstrap -->
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous">
    <!-- Iconos -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,0,0" />
    <!-- Animated CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <!-- Nuestro CSS -->
    <link rel="stylesheet" href="css/styles.css">
    <!-- Icono de la pagina -->
    <link rel="icon" href="./img/icon.png">
 `

cadheader = `
    <div class="row text-center" id="bannerSup">
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3">
            <img src="img/logoMingle.png" height="150px" class="mx-auto d-block">
        </div>
    </div> 
`


cadfooter = `
    <footer class="py-3 mg-4" >
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="index.html#bannerSup" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="index.html#calendario" class="nav-link px-2 text-muted">Eventos Proximos</a></li>
            <li class="nav-item"><a href="index.html#algunasSalidas" class="nav-link px-2 text-muted">Algunas Salidas</a></li>
            <li class="nav-item"><a href="index.html#quienesSomos" class="nav-link px-2 text-muted">Quienes Somos</a></li>
            <li class="nav-item"><a href="login1.html" class="nav-link px-2 text-muted">Inicio Sesión/Registrarse</a></li>
        </ul>
        <p class="text-center text-muted">© <span id="currentYear"></span> <a href="nosotros.html">Pythoner</a> para Codo a Codo </p>
    </footer >
`    
cad1 = `
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #5E2FCD;">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
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

document.querySelector("head").innerHTML = cadhead
document.querySelector("header").innerHTML = cadheader
document.querySelector("#footer").innerHTML = cadfooter
document.querySelector(".Menu").innerHTML = cad1

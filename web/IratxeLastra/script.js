let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("porcentaje");
        habilidades[0].classList.add("adobeindesign");
        habilidades[1].classList.add("adobeillustrator");
        habilidades[2].classList.add("adobeaftereffects");
        habilidades[3].classList.add("adobepremierepro");
        habilidades[4].classList.add("paqueteoffice");
        habilidades[5].classList.add("disposicion");
        habilidades[6].classList.add("trabajoenequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("constancia");
        habilidades[9].classList.add("capacidaddeorganizacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
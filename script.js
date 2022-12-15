//Contenedor principal que contiene los artículos
let container = document.getElementById("container");

/*Variable para nuestra condición if, 
la cual será usada para poder cambiar nuestros estilos
*/
let x = 0;

//Llamamos nuestro botón por medio de su ID, el cual es BTN
                                        //Agregamos el evento onclick para poder crear un función dentro de nuestro script
let btn = document.getElementById("btn").onclick = 
//La función chageColor se usará para poder cambiar los estilos del fondo de nuestro contenedos
function changeColor(){
    //El valor iniciar de x  es igual a 0
    if(x==0){
        //El fondo del contenedor se cambiara al color #00705D
        container.style.backgroundColor="#00705D";
        //Cambiamos el valor de la variable x a 1 para poder cambiar el color nuevamente
        x=1
    }else{
        //Color del fondo de nuestro contenedor con valor nulo
        container.style.backgroundColor=null;
        x=0;
    }
    
    console.log("HELLO");
};




// const changeColor = ((container)=>{
//     if(x==0){
//         container.style.backgroundColor = "red";
//         x=0;
//     }else if(x=0){
//         container.style.backgroundColor = none;
//         x=1
//     }

// }   
// )


// btn.onclick = changeColor(container);


console.log(btn);
console.log(container);

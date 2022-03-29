/*  Trivia animales y plantas, darle comenzar
 */

function inicio(){
  
  document.getElementById("content").style.display="none"
  document.getElementById("bloque1").style.display="block"
}

/* Ingresa tu nombre y saludar con tu nombre
 */

function obtenernombre(){

  let nombre=document.getElementById("texto2").value
  console.log(nombre) 
  document.getElementById("bloque1").style.display="none"
  document.getElementById("bloque2").style.display="block"
  document.getElementById("nombrejugador").innerHTML="Hola "+nombre
}

/*Seleccion de quiz plantas
 */

function obteneranimal(){
  
  let nombre=document.getElementById("animales")
  document.getElementById("bloque2").style.display="none"
  document.getElementById("animales").style.display="block"
}


/*Seleccion de quiz  plantas
 */

function obtenerplanta(){

  let nombre=document.getElementById("plantas")
  document.getElementById("bloque2").style.display="none"
  document.getElementById("plantas").style.display="block"
  }


/*  Preguntas animales
 */

let puntaje=0
function resultadosanimal(){
let p1=document.getElementById("leon")
  if (p1.checked) { 
    puntaje=puntaje+10
    console.log("correcto")
  } else {
    console.log("Incorrecto")
  }
  let p2=document.getElementById("mamifero3")
  if (p2.checked) {
    puntaje=puntaje+10
    console.log("correcto")
  } else {
    console.log("Incorrecto")
  }
  let p3=document.getElementById("oceano2")
  if (p3.checked) {
    puntaje=puntaje+10
    console.log("correcto")
  } else {
    console.log("Incorrecto")
  }
  let nombre=document.getElementById("felicitaciones")
  document.getElementById("animales").style.display="none"
  document.getElementById("felicitaciones").style.display="block"
  document.getElementById("total").innerHTML="Esta es tu puntuacion: "+puntaje
  }


/*preguntas plantas
 */

  let puntaje2=0
function resultadosplanta(){
let p1=document.getElementById("plantas3")
  if (p1.checked) { 
    puntaje2=puntaje2+10
    console.log("correcto")
  } else {
    console.log("Incorrecto")
  }
  let p2=document.getElementById("flor2")
  if (p2.checked) {
    puntaje2=puntaje2+10
    console.log("correcto")
  } else {
    console.log("Incorrecto")
  }
  let p3=document.getElementById("semilla3")
  if (p3.checked) {
    puntaje2=puntaje2+10
    console.log("correcto")
  } else {
    console.log("Incorrecto")
  }

  let nombre=document.getElementById("felicitaciones")
  document.getElementById("plantas").style.display="none"
  document.getElementById("felicitaciones").style.display="block"
  document.getElementById("total").innerHTML="Esta es tu puntuacion: "+puntaje2
  }


/*Felicidades y puntuacion
 */
function bravo(){

  let nombre=document.getElementById("felicitaciones")
  document.getElementById("puntuacion").style.display="none"
  document.getElementById("content").style.display="block"
  }

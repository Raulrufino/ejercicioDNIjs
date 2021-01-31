//EJERCICIO DNI

// CREAMOS UNA VARIABLE GLOBAL PARA LUEGO LLAMARLA CON LA FUNCION, ESTA EN CUESTIÓN ES UNA VARIABLE CON UN ARREGLO QUE LUEGO DEPENDIENDO DEL RESULTADO FINAL DEL RESTO APLICARÁ UNA LETRA U OTRA EJ: CUANDO INTRODUZCO MI DNI 43132641 % 23 RESULTADO ES 5 POR LO QUE ME ENSEÑA AUTOMÁTICAMENTE LA LETRA M
let letras_dni = ['T', 'R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
// Creamos una variable declarativa y luego le añadimos un prompt
let numero_DNI = prompt( '¿No puede recordar la letra del DNI? No se preocupe, escriba acontinuación su número de DNI y pulse aceptar.')
// creamos la funcion con un parametros en este caso es resto es igual numero del dni dividido 23 y el resto es el dato que buscamos.
function numero (resto = numero_DNI % 23){
    
    switch (true){

        

        case numero_DNI < 0:
        case numero_DNI.length !=8:
        case numero_DNI == '':
                alert('Vuelva a introducir su DNI, le recordamos que son 8 digitos')
                numeroDNI = 'salir'
                break
                default:
                alert(`'Su DNI completo es': ${numero_DNI}-${letras_dni[resto]}' Esperamos haberle servido de ayuda'`)
                numeroDNI = 'salir'
                break
                
        }

}
numero()
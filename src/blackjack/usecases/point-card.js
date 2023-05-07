/**
 * Esta funcion permite al usuario tomar una carta
 * 
 * @param {String} card Ejemplo['C','D','H','S'];
 * @returns {Number} retorna el deck creado de cartas 
 */

export const valueCard = ( card ) => {
    let value = card.substring(0, card.length - 1);
    return (isNaN(value)) ?  (value == 'A') ? 11 : 10 : value*1;
    // esto es otro metodo mas sencillo.  
    // let points = 0; recordar que esto es el numero de puntos a entregar
    // console.log({value});
    // if(isNaN(value)){
    //     puntos = (value == 'A') ? 11 : 10;
    //     console.log('Definimos que no es un numero');
    // }else {
    //     console.log('Definimos que es un numero');
    //     points = Number.parseInt(value);
    //     console.log(points);
    // }
    // console.log(value);
}
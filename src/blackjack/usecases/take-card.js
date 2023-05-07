
/**
 * Esta funcion permite al usuario tomar una carta
 * 
 * @param {Aray<String>} deck Ejemplo['C','D','H','S'];
 * @returns {String} retorna el deck creado de cartas 
 */
 export const takeCard = (deck) => {
    let my_card = deck.pop();
    // console.log(deck)
    // console.log(my_card)
    return my_card;
}
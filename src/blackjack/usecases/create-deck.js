import _ from 'underscore';


/**
 * Esta funcion crea un nuevo Deck
 * 
 * @param {Aray<String>} tipes_of_cards Ejemplo['C','D','H','S'];
 * @param {Aray<String>} special_cards  Ejemplo['A','j','Q','K'];
 * @returns {Aray<String>} retorna el deck creado de cartas 
 */
export const crearDeck = (tipes_of_cards,special_cards) => {

    if(!tipes_of_cards) throw new Error('Tipos de carta obligatorios');
    // if( tipes_of_cards.length > 0) throw new Error('registre arreglos con los datos del ejemplo');
    
    let deck = [];

    for(let i = 2 ; i<=10 ; i++){
        for(let tipe of tipes_of_cards){
            deck.push( i + tipe);
        }
    }
    for(let tipe of tipes_of_cards){
        for (let especial of special_cards){
            deck.push( especial + tipe)
        }
    }
    // console.log(deck)
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}


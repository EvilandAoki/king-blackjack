
/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno 
 */
export const crearcartaHTML = (card) => {
    
    const img_card = document.createElement('img');
        img_card.src = `assets/cartas/${card}.png`;
        img_card.classList.add('card_jack');
        
        return img_card;
}
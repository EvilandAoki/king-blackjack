import {takeCard,valueCard,crearcartaHTML} from './index';

/**
 * 
 * @param {Number} pointsOfPlayer Puntos del jugardor
 * @param {HTMLElement} puntosHTML Div donde se muestran los puntos del jugador
 * @param {HTMLElement} pc_cards Div donde se muestra los puntos del PC
 * @param {Array<String>} deck Deck de cartas donde trabaja el PC
 *  
 */
export const turnOfPc = (pointsOfPlayer, puntosHTML, pc_cards ,deck = []) =>{
   
    let points_pc = 0;

    do{
        const card = takeCard(deck);
        points_pc = points_pc + valueCard(card);
        puntosHTML.innerText = points_pc;
        
        const imgCard = crearcartaHTML(card);

        // const img_card = document.createElement('img');
        // img_card.src = `assets/cartas/${card}.png`;
        // img_card.classList.add('card_jack');
    
        pc_cards.append(imgCard);
        if( pointsOfPlayer > 21 ) {
            break;
        }
    }while((points_pc < pointsOfPlayer)  && (pointsOfPlayer <= 21 ) );

    setTimeout(() => {
        if(points_pc == pointsOfPlayer) {
            alert('empataron, mi rey');
        } else if( points_pc >  21 ) {
            alert('ganaste, mi rey ');
        }else if( points_pc <  21 ) {
            alert('perdiste, mi rey ');
        } else {
            alert('perdiste, mi rey ');
        } 
    }, 20);
}
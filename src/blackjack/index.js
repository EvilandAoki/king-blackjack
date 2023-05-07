import {crearDeck,takeCard,valueCard,turnOfPc,crearcartaHTML} from './usecases';

/*
Notas:
2C: 2 de treboles, like clover
2D: 2 de diamantes, like Diamonts
2H: 2 de corazones, like hearts
2S: 2 de espadas, like Spades
*/

let deck = [];
const tipes_of_cards = ['C','D','H','S'];
const special_cards = ['A','j','Q','K'];

let points_player = 0,
    points_pc = 0;

// referencias del HTMl

const btn_new_game = document.querySelector('#new_game');
const btn_give_card = document.querySelector('#give_card');
const btn_stop = document.querySelector('#stop');
const small_pointers = document.querySelectorAll('small');
const player_cards = document.querySelector('#jugador-cartas');
const pc_cards = document.querySelector('#computadora-cartas');

// Refactorizacion, creamos un deck de forma modular
deck = crearDeck(tipes_of_cards,special_cards);




// const turn_of_pc = (pointsOfPlayer) =>{
//     do{
//         const card = takeCard(deck);
//         points_pc = points_pc + valueCard(card);
//         small_pointers[1].innerText = points_pc;
        
//         const img_card = document.createElement('img');
//         img_card.src = `assets/cartas/${card}.png`;
//         img_card.classList.add('card_jack');
    
//         pc_cards.append(img_card);
//         if( pointsOfPlayer > 21 ) {
//             break;
//         }
//     }while((points_pc < pointsOfPlayer)  && (pointsOfPlayer <= 21 ) );

//     setTimeout(() => {
//         if(points_pc == pointsOfPlayer) {
//             alert('empataron, mi rey');
//         } else if( points_pc >  21 ) {
//             alert('ganaste, mi rey ');
//         }else if( points_pc <  21 ) {
//             alert('perdiste, mi rey ');
//         } else {
//             alert('perdiste, mi rey ');
//         } 
//     }, 20);
// }


// Iniciamos eventos

// primer evento: tomamos una carta, se pone un listener que permita adjuntar el contenido y ponerlo ahi 
// en el html. Se sobre escribe la variable points_player

btn_give_card.addEventListener('click', () => {
    const card = takeCard(deck);
    points_player = points_player + valueCard(card);
    small_pointers[0].innerText = points_player;
    
    const img_card = crearcartaHTML(card);

    player_cards.append(img_card);

    if (points_player > 21){
        console.warn('Sorry man, peldiste');
        btn_give_card.disabled = true;
        btn_stop.disabled = true;
        turnOfPc(points_player,small_pointers[1],pc_cards,deck);
    } else if (points_player === 21){
        console.warn('ganó, mi rey');
        btn_give_card.disabled = true;
        btn_stop.disabled = true;
        turnOfPc(points_player,small_pointers[1],pc_cards,deck);
    }
});


btn_stop.addEventListener('click', () => {

    btn_give_card.disabled = true;
    btn_stop.disabled = true;
    turnOfPc(points_player,small_pointers[1],pc_cards,deck);
  
});


btn_new_game.addEventListener('click', ()=>{
    console.clear
    deck = [];
    deck = crearDeck(tipes_of_cards,special_cards);
    points_player = 0,
    points_pc = 0;
    btn_give_card.disabled = false;
    btn_stop.disabled = false;
    small_pointers[0].innerText = 0 ;
    small_pointers[1].innerText = 0 ;
    player_cards.innerHTML = '';
    pc_cards.innerHTML = '';
    
})


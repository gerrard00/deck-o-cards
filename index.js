'use strict'

const randomizeDeck = () => {

  var deck = []
  var currentCard

  do {
    currentCard = (Math.floor(Math.random() * Math.floor(52))) + 1
    if(deck.indexOf(currentCard) === -1){
      if(currentCard < 14){
        console.log("❤️")
        if(currentCard === 1){
          deck.push(["❤️Ace", 11])
        }else if(currentCard === 11){
          deck.push(["❤️Jack", 10])
        }else if(currentCard === 12){
          deck.push(["❤️Queen", 10])
        }else if(currentCard === 13){
          deck.push(["❤️King", 10])
        }else{
          deck.push(["❤️"+currentCard, currentCard])
        }
      }else if(currentCard > 13 && currentCard < 27){
        console.log("♠️")
        if(currentCard === 14){
          deck.push(["♠️Ace", 11])
        }else if(currentCard === 24){
          deck.push(["♠️Jack", 10])
        }else if(currentCard === 25){
          deck.push(["♠️Queen", 10])
        }else if(currentCard === 26){
          deck.push(["♠️King", 10])
        }else{
          deck.push(["♠️"+(currentCard - 13), (currentCard - 13)])
        }
      }else if(currentCard > 26 && currentCard < 40){
        console.log("♦️")
        if(currentCard === 27){
          deck.push(["♦️Ace", 11])
        }else if(currentCard === 37){
          deck.push(["♦️Jack", 10])
        }else if(currentCard === 38){
          deck.push(["♦️Queen", 10])
        }else if(currentCard === 39){
          deck.push(["♦️King", 10])
        }else{
          deck.push(["♦️"+(currentCard - 26), (currentCard - 26)])
        }
      }else if(currentCard > 41){
        console.log("♣️")
        if(currentCard === 42){
          deck.push(["♣️Ace", 11])
        }else if(currentCard === 50){
          deck.push(["♣️Jack", 10])
        }else if(currentCard === 51){
          deck.push(["♣️Queen", 10])
        }else if(currentCard === 52){
          deck.push(["♣️King", 10])
        }else{
          deck.push(["♣️"+(currentCard - 41), (currentCard - 41)])
        }
      }
    }
  } while (deck.length < 52)

  return deck
}

console.log(randomizeDeck())

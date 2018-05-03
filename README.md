# deck-o-cards


This Node Package has a single purpose: to return a single deck of 52 playing cards completely randomized. It is then up to you how to use the randomized deck: black jack, poker, gin rummy, guessing games. It returns an array of arrays: [[ '♠️Jack', 10 ], [ '♦️9', 9 ], [ '♣️King', 10 ] ...]

## How To Use
#### Install it via npm:
```bash
$ npm i deck-o-cards
```
#### Require Locally:
```js
var doc = require('deck-o-cards')
```
#### Call Locally:
```js
var deck = doc.randomizedDeck()
/*
var deck = [
  [ '❤️Queen', 10 ],
  [ '♠️8', 8 ],
  [ '♠️7', 7 ],
  [ '❤️5', 5 ],
  [ '♠️Ace', 11 ],
  [ '❤️8', 8 ],
  [ '❤️4', 4 ],
  [ '♦️10', 10 ],
  [ '❤️Queen', 10 ],
  [ '❤️2', 2 ],
  [ '♦️2', 2 ],
  [ '♣️4', 4 ],
  [ '❤️7', 7 ],
  [ '♦️7', 7 ],
  [ '♣️3', 3 ],
  [ '♣️Ace', 11 ],
  [ '♣️5', 5 ],
  [ '❤️10', 10 ],
  [ '♦️4', 4 ],
  [ '❤️7', 7 ],
  [ '♠️5', 5 ],
  [ '♠️7', 7 ],
  [ '♠️6', 6 ],
  [ '♣️2', 2 ],
  [ '♦️6', 6 ],
  [ '♣️8', 8 ],
  [ '❤️Jack', 10 ],
  [ '♠️Jack', 10 ],
  [ '♦️9', 9 ],
  [ '♣️King', 10 ],
  [ '♣️8', 8 ],
  [ '♦️Jack', 10 ],
  [ '♦️3', 3 ],
  [ '♠️10', 10 ],
  [ '♠️8', 8 ],
  [ '♠️Queen', 10 ],
  [ '♠️King', 10 ],
  [ '♣️Jack', 10 ],
  [ '♣️6', 6 ],
  [ '❤️6', 6 ],
  [ '♠️10', 10 ],
  [ '♣️King', 10 ],
  [ '♦️Queen', 10 ],
  [ '♦️King', 10 ],
  [ '♣️Ace', 11 ],
  [ '♠️9', 9 ],
  [ '♣️8', 8 ],
  [ '♦️Queen', 10 ],
  [ '♦️3', 3 ],
  [ '♠️King', 10 ],
  [ '♣️8', 8 ],
  [ '♦️9', 9 ]
  ]
*/
```

### License

MIT Copyright 2018 Daniel P. Dwyer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

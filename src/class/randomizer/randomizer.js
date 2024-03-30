import {List} from './list'

export function randomizer(mainArray){
let newArrayWithRandomValues = [];
// get random number from array
for(let crrArray of mainArray){
let randomNumber = Math.random() * crrArray.length
let current = Math.floor(randomNumber);
newArrayWithRandomValues.push(current);
}
return newArrayWithRandomValues;
}


function randomizeAmount(mainArray,amount){
let arrayWithAmount = []
for(let index = 0; index < amount; index++){
arrayWithAmount.push(randomizer(mainArray))

}
return arrayWithAmount
}


// continue fixing this
export function randomSentence(currentClass, amount){
	switch( currentClass){
		case 'a1_1':
			const a1Spanish_1 = List['spanish']['a1_1'];
			const a1English_1 = List['english']['a1_1'];

			const animals = List['english']['a1_1']['animals']
			const colors = List['english']['a1_1']['colors']
			let phrases =  randomizeAmount([animals,colors],amount)
			let spanishPhrases = []
			let englishPhrases = []

			for(let index = 0; index < amount; index++){
			let randomAnimalForPhrase  = phrases[index][0]
			let randomColorForPhrase  = phrases[index][1]
			spanishPhrases.push(`${a1Spanish_1['animals'][randomAnimalForPhrase]} ${a1Spanish_1['colors'][randomColorForPhrase]}`)
			englishPhrases.push(`${a1English_1['colors'][randomColorForPhrase]} ${a1English_1['animals'][randomAnimalForPhrase]}`)

			}
			return {spanishPhrases, englishPhrases}
		case 'a1_2':

	}
}

function returnPhrases(adjetive, noun, amount){
			let spanishPhrases = []
			let englishPhrases = []

			let phrases =  randomizeAmount([noun,adjetive],amount)
			for(let index = 0; index < amount; index++){
			let randomNounForPhrase  = phrases[index][0]
			let randomAdjetiveForPhrase  = phrases[index][1]
			spanishPhrases.push(`${noun[randomNounForPhrase]} ${adjetive[randomColorForPhrase]}`)
			englishPhrases.push(`${adjetive[randomAdjetiveForPhrase]} ${noun[randomNounForPhrase]}`)
}

const exceptionForPlural = ['fish', 'mouse', 'hero', 'echo', 'do']
const exceptionForPluralInPlural = ['fish', 'mice', , 'heroes', 'echoes', 'does']
const vowel = ['a', 'e', 'i', 'o', 'u']
function convertToPlural(word){
let indexIfException = exceptionForPlural.indexOf(word);

if(indexIfException != -1){
return exceptionForPluralInPlural
}

let splittedWord = word.split('');

let lastLetter = splittedWord.length -1
let letterBeforeLastLetter = splittedWord.length -2

// rule one
if(splittedWord(lastLetter) == 's' || splittedWord(lastLetter) == 'x' || splittedWord(lastLetter) == 'z' || (splittedWord(letterBeforeLastLetter) == 'c' && splittedWord(lastLetter) == 'h') || (splittedWord(letterBeforeLastLetter) == 's' && splittedWord(lastLetter) == 'h') || (splittedWord(letterBeforeLastLetter)  == 's' && splittedWord(lastLetter) == 's') || (vowel.indexOf(splittedWord(letterBeforeLastLetter)) == -1 && splittedWord(lastLetter) == 'o')) {return `${word}es`;}

// rule 2
else if(vowel.indexOf(splittedWord(letterBeforeLastLetter)) == -1 && splittedWord(lastLetter) == 'y'){
splittedWord[lastLetter] = 'i'
splittedWord.push('s')
return splittedWord.join('')
}

else if(splittedWord(letterBeforeLastLetter) == 'f'  && splittedWord(lastLetter) == 'e'){


}

export function getNumberText(thisNumber, language, otherA = false){
const textNumber = `${thisNumber}`
const textNumberArray = textNumber.split('')

const numberZero = {
	spanish: 'cero',
	english: 'zero'
}

let numberOne
if(otherA){
 numberOne = {
	spanish: 'una',
	english: 'an'
}
}
else{
 numberOne = {
	spanish: 'un',
	english: 'a'
}
}

const separatorFor10 = {
	spanish: ' y ',
	english: ' '
}

const number100 = {
	spanish: 'cien',
	english: 'a hundred'
}

const number100Beginning = {
	spanish: 'cien',
	english: ' hundred'
}

const number100End = {
	spanish: 'to ',
	english: ' and '
}



if(thisNumber == 0){
	return numberZero[language]
}
else if(thisNumber == 1){

	return numberOne[language]
}
else if(thisNumber < 30){
return List[language]['a1_2']['numbers'][thisNumber + 1]
}
else if(thisNumber == 100){
return number100[language]
}
else {

if (textNumberArray.length == 2){
textNumberArray.unshift(0)
}
let firstNumberOnDigit = Number(textNumberArray[0]);
let secondNumberOnDigit = Number(textNumberArray[1]);
let thirdNumberOnDigit = Number(textNumberArray[2]);
let firstNumberOnDigitText = ''
let secondNumberOnDigitText = ''
let thirdNumberOnDigitText = ''

if(firstNumberOnDigit > 0){
	if(firstNumberOnDigit > 1){
		firstNumberOnDigitText = List[language]['a1_2']['numbers'][firstNumberOnDigit - 1];
	firstNumberOnDigitText = `${firstNumberOnDigitText}${number100Beginning[language]}${number100End[language]}`
	}
	else{
		firstNumberOnDigitText = `${number100[language]}${number100End[language]}`
	}
}


if(secondNumberOnDigit > 0){
secondNumberOnDigitText = List[language]['a1_2']['numbers'][secondNumberOnDigit + 26]
}

if(thirdNumberOnDigit > 0){
thirdNumberOnDigitText = List[language]['a1_2']['numbers'][thirdNumberOnDigit - 1];
thirdNumberOnDigitText = `${separatorFor10[language]}${thirdNumberOnDigitText}`
}

return `${firstNumberOnDigitText}${secondNumberOnDigitText}${thirdNumberOnDigitText}`

}
}

import { List } from './list'


function randomizer(mainArray){
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
arrayWithAmount.push(randomizer(mainArray));
}
return arrayWithAmount
}


// continue fixing this
export function randomSentence(currentClass, amount){
let englishAnimals = List['english']['a1_1']['animals']
let englishColors = List['english']['a1_1']['colors']

let spanishAnimals = List['spanish']['a1_1']['animals']
let spanishColors = List['spanish']['a1_1']['colors']

	switch( currentClass){
		case 'a1_1':
			return returnPhrases(englishColors, englishAnimals, spanishColors, spanishAnimals, amount, 1, 1)
		case 'a1_2':
			return returnPhrases(englishColors, englishAnimals, spanishColors, spanishAnimals, amount, 999)
		default:
			return 'no class'
	}
}



// work on here and the plural converter
function returnPhrases(adjetive, noun, spanishAdjetive, spanishNoun, amount, maxNumber, noNumber =false){

			let spanishPhrases = []
			let englishPhrases = []

			let phrases =  randomizeAmount([noun,adjetive],amount)
	

			for(let index = 0; index < amount; index++){
			let randomNumber = Math.floor( Math.random() * maxNumber)

			let randomNounForPhrase  = phrases[index][0]
			let randomAdjetiveForPhrase  = phrases[index][1]
			let englishNoun = noun[randomNounForPhrase]
			let englishAdjetive = adjetive[randomAdjetiveForPhrase]


			let SpanishNoun = spanishNoun[randomNounForPhrase]
			let SpanishAdjetive = spanishAdjetive[randomAdjetiveForPhrase]


			let spanishNounFemale = true
			if(! isFemale(SpanishNoun)){
				SpanishAdjetive = switchToMale(SpanishAdjetive)
				spanishNounFemale = false
			}

			let vowelSoundInWord = false
			if(vowelSound(englishAdjetive)){
			vowelSoundInWord = true
			}

				// continue working on here
			if(randomNumber > 1){
			englishNoun = convertToPlural(englishNoun)
			SpanishNoun = convertToPluralForSpanish(SpanishNoun)
			SpanishAdjetive = convertToPluralForSpanish(SpanishAdjetive)
			}


				if(noNumber){
			spanishPhrases.push(`${getNumberText(1, 'spanish', spanishNounFemale)} ${SpanishNoun} ${SpanishAdjetive}`);
			englishPhrases.push(`${getNumberText(1, 'english', false, vowelSoundInWord)} ${englishAdjetive} ${englishNoun}`);
				}
				else{
			spanishPhrases.push(`${getNumberText(randomNumber, 'spanish', spanishNounFemale)} ${SpanishNoun} ${SpanishAdjetive}`);
			englishPhrases.push(`${getNumberText(randomNumber, 'english', false, vowelSoundInWord)} ${englishAdjetive} ${englishNoun}`);
				}

			}

			return {spanishPhrases, englishPhrases};
}

export function vowelSound(word){

const ExceptionOfTheRule = ['university', 'hour','f','honest','honor', 'x-ray','hiv', 'heiress','union', 'utopia', 'uterus', 'ufo', 'universal', 'unix']
const vowelSound = [false, true, true, true, true, true, true, true, false, false, false, false, false, false];
let indexIfException = ExceptionOfTheRule.indexOf(word);

if(indexIfException != -1){
return vowelSound[indexIfException]
}

const vowel = ['a', 'e', 'i', 'o', 'u']

let splittedWord = word.split('');

let wordStartsWithVowel = vowel.indexOf(splittedWord[0]) != -1;
return wordStartsWithVowel ? true : false

}

export function switchToMale(word){
const wordsThatDontChange = ['verde', 'azul', 'gris', 'presidente', 'violeta', 'rosa', 'intendente', 'celeste', 'purpura', 'cian', 'gris' , 'naranja' ]


let indexIfException = wordsThatDontChange.indexOf(word);

if(indexIfException != -1){
return word
}

if(! isFemale(word)){
return word
}

else{
return word.replace(/a(?=.?$)/, 'o')
}

}

export function convertToPlural(word){

			const exceptionForPlural = ['fish', 'mouse', 'child', 'man', 'woman','fisherman']
			const exceptionForPluralInPlural = ['fish', 'mice', 'children', 'men', 'women', 'fishermen']
			const vowel = ['a', 'e', 'i', 'o', 'u']

			let indexIfException = exceptionForPlural.indexOf(word);

			if(indexIfException != -1){
			return exceptionForPluralInPlural[indexIfException]
			}

			let splittedWord = word.split('');

			let lastLetter = splittedWord.length -1
			let letterBeforeLastLetter = splittedWord.length -2

			// rule one
			if(splittedWord[lastLetter] == 's' || splittedWord[lastLetter] == 'x' || splittedWord[lastLetter] == 'z' || (splittedWord[letterBeforeLastLetter] == 'c' && splittedWord[lastLetter] == 'h') || (splittedWord[letterBeforeLastLetter] == 's' && splittedWord[lastLetter] == 'h') || (splittedWord[letterBeforeLastLetter]  == 's' && splittedWord[lastLetter] == 's') || (vowel.indexOf(splittedWord[letterBeforeLastLetter]) == -1 && splittedWord[lastLetter] == 'o')) 
	{return `${word}es`;}

			// rule 2
			else if(vowel.indexOf(splittedWord[letterBeforeLastLetter]) == -1 && splittedWord[lastLetter] == 'y'){
			splittedWord[lastLetter] = 'i'
			splittedWord.push('es')
			return splittedWord.join('')
			}
			else if(splittedWord[letterBeforeLastLetter] == 'f'  && splittedWord[lastLetter] == 'e'){
			splittedWord[letterBeforeLastLetter] = 'v'
			splittedWord.push('s')
			return splittedWord.join('')
			}
	else{
return `${word}s`
	}
}

export function convertToPluralForSpanish(word){
	
			const vowel = ['a', 'e', 'i', 'o', 'u']

			let splittedWord = word.split('');

			let lastLetter = splittedWord.length -1

			// rule one
			if(splittedWord[lastLetter] == 'z') {
				splittedWord[lastLetter] = 'c'
				splittedWord.push('es')
			return splittedWord.join('');}
	else if(vowel.indexOf(splittedWord[lastLetter]) == -1){
			return `${word}es`
			}
			else{
				return `${word}s`
			}
}

export function isFemale(word){

const exceptionForGenre = ['agua', 'corazon' , 'foto' , 'mano', 'moto', 'radio', 'sangre', 'madre', 'clase', 'torre', 'sal', 'flor', 'miel', 'violeta', 'rosa', 'purpura', 'cian', 'gris']
const exceptionForGenreWithTHeirGender = [ false, false, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false]


let indexIfException = exceptionForGenre.indexOf(word);

if(indexIfException != -1){
return exceptionForGenreWithTHeirGender[indexIfException]
}


let matches = word.match(/.+(ie|ed|id|ud|ad|ez|eza|ncia|umbre|z|cíon|cion|z|síon|sion|zón|zon|a)/)

if(!matches){
return false
}


if(matches[0] == word){
return true
}
else{
return false
}

}


export function getNumberText(thisNumber, language, isFemale = false, otherA = false){

		const textNumber = `${thisNumber}`
		const textNumberArray = textNumber.split('')

		const numberZero = {
			spanish: 'cero',
			english: 'zero'
		}

		let numberOne = {
			spanish: 'un',
			english: 'a',
		}

		if(isFemale){
			numberOne.spanish = 'una'
		}

		if(otherA){
			numberOne.english = 'an'
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


		let number100End = {
				spanish: 'to ',
				spanishPlural: 'tos',
				english: ' and '
		}


		// if(isFemale){
		// 	number100End = {
		// 		spanish: 'ta ',
		// 		spanishPlural: 'tas ',
		// 		english: ' and '
		// 	}
		// }
		// else{
		// 	number100End = {
		// 		spanish: 'to ',
		// 		spanishPlural: 'tos ',
		// 		english: ' and '
		// 	}
		// }



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

		if(firstNumberOnDigit > 1 && secondNumberOnDigit < 1 && thirdNumberOnDigit < 1 )
			{
				if (language == 'spanish'){
						if(firstNumberOnDigit == 5){
						firstNumberOnDigitText = `quinientos`
							if(isFemale){
								firstNumberOnDigitText = `quinientas`
							}
						}
						else if(firstNumberOnDigit == 9){
						firstNumberOnDigitText = `novecientos`
							if(isFemale){
								firstNumberOnDigitText = `novecientos`
							}
						}
						else{
				firstNumberOnDigitText = List[language]['a1_2']['numbers'][firstNumberOnDigit - 1];
						if(isFemale){number100End[language + 'Plural'] = 'tas '}
						firstNumberOnDigitText = `${firstNumberOnDigitText} ${number100[language]}${number100End[language + 'Plural']}`
						}
				}
				else{
				firstNumberOnDigitText = List[language]['a1_2']['numbers'][firstNumberOnDigit - 1];
						firstNumberOnDigitText = `${firstNumberOnDigitText}${number100Beginning[language]}`
						}

				}

		else if(firstNumberOnDigit > 0){
			if(language == 'spanish' && firstNumberOnDigit == 5){
			firstNumberOnDigitText = `quiniento `
			}
			else if(language == 'spanish' && firstNumberOnDigit == 9){
			firstNumberOnDigitText = `noveciento `
			}
			else if(firstNumberOnDigit > 1 ){
				firstNumberOnDigitText = List[language]['a1_2']['numbers'][firstNumberOnDigit - 1];
			firstNumberOnDigitText = `${firstNumberOnDigitText}${number100Beginning[language]}${number100End[language]}`
			}
			else{
				firstNumberOnDigitText = `${number100[language]}${number100End[language]}`
			}

		}


		if(secondNumberOnDigit > 0){
			if(secondNumberOnDigit == 1 || secondNumberOnDigit == 2){
				secondNumberOnDigitText = '';
				secondNumberOnDigit = thirdNumberOnDigit + (secondNumberOnDigit * 10);
				thirdNumberOnDigit = 0;
				secondNumberOnDigitText = '';
				thirdNumberOnDigitText = List[language]['a1_2']['numbers'][secondNumberOnDigit - 1];
			}
			else{
				secondNumberOnDigitText = List[language]['a1_2']['numbers'][secondNumberOnDigit + 26];
			}
		}

		if(thirdNumberOnDigit > 0){
		thirdNumberOnDigitText = List[language]['a1_2']['numbers'][thirdNumberOnDigit - 1];
		thirdNumberOnDigitText = `${separatorFor10[language]}${thirdNumberOnDigitText}`;
		}

		return (`${firstNumberOnDigitText}${secondNumberOnDigitText}${thirdNumberOnDigitText}`);

		}
}

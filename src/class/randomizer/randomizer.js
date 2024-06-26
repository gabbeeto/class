import { List, GroupList, SelectedList } from './list'


function randomizer(mainArray){
	let newArrayWithRandomValues = [];
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

	let words = [0,0,0,0];

	let maxNumber
	let noNumber = false
	switch( currentClass){
		case 'a1_1':
		case 'a1_1A':
			maxNumber = 1;
			noNumber = true
			words = SelectedList('a1_1', 'a1_1');
			break;
		case 'a1_2A':
		case 'a1_2':
			maxNumber = 999;
			words = SelectedList('a1_1', 'a1_1');
			break;
		case 'a1_3':
			maxNumber = 999;
			words = SelectedList('a1_3', 'a1_1');
			break;
		case 'a1_3A':
			maxNumber = 1000
			words = GroupList('a1_3');
			break;
		case 'a1_4':
			maxNumber = 1000;
			words = SelectedList('a1_4', 'a1_1');
			break;
		case 'a1_4A':
			maxNumber = 1000
			words = GroupList('a1_4');
			break;
		case 'a1_5A':
			maxNumber = 1000
			words = GroupList('a1_5');
			break;
		case 'a1_5':
			maxNumber = 1000
			words = SelectedList('a1_5', 'a1_1');
			break;
		case 'a1_6A':
			maxNumber = 1000
			words = GroupList('a1_6');
			break;
		case 'a1_6':
			maxNumber = 1000
			words = SelectedList('a1_1', 'a1_6');
			break;
		case 'a1_7A':
			maxNumber = 1000
			words = GroupList('a1_7');
			break;
		case 'a1_7':
			maxNumber = 1000
			words = SelectedList('a1_7', 'a1_1');
			break;
		case 'a1_8A':
			maxNumber = 1000
			words = GroupList('a1_8');
			break;
		case 'a1_8':
			maxNumber = 1000
			words = SelectedList('a1_8', 'a1_1');
			break;
		case 'a1_9A':
			maxNumber = 1000
			words = GroupList('a1_9');
			break;
		case 'a1_9':
			maxNumber = 1000
			words = SelectedList('a1_9', 'a1_1');
			break;
		case 'a1_12A':
			maxNumber = 1000
			words = GroupList('a1_12');
			break;
		case 'a1_12':
			maxNumber = 1000
			words = SelectedList('a1_12', 'a1_6');
			break;
		case 'a1_13A':
			maxNumber = 1000
			words = GroupList('a1_13');
			break;
		case 'a1_13':
			maxNumber = 1000
			words = SelectedList('a1_13', 'a1_1');
			break;
	}

	return returnPhrases(words[0], words[1], words[2], words[3], amount, maxNumber, noNumber);



}



// work on here and the plural converter
function returnPhrases(adjetive, noun, spanishAdjetive, spanishNoun, amount, maxNumber, noNumber = false){

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
	const wordsThatDontChange = ['verde', 'azul', 'gris', 'presidente', 'violeta', 'rosa', 'intendente', 'celeste', 'purpura', 'cian', 'gris' , 'naranja', 'preocupante', 'decepcionante', 'shockeante', 'avergozante', 'cansante','triste', 'feliz']

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

	const exceptionForPlural = ['fish', 'mouse', 'child', 'man', 'woman','fisherman', 'goose', 'sheep','deer','foot','tooth']
	const exceptionForPluralInPlural = ['fish', 'mice', 'children', 'men', 'women', 'fishermen', 'geese', 'sheep', 'deer', 'feet','teeth']
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
	const exception = ['tienda de comestibles']
	const exceptionRespose = ['tiendas de comestibles']


	let indexIfException = exception.indexOf(word);

	if(indexIfException != -1){
		return exceptionRespose[indexIfException]
	}

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


export function getNumberText(thisNumber, language, isFemale = false, otherA = false, theNumber1){

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

	if(theNumber1) {
	 numberOne = {
		spanish: 'uno',
		english: 'one',

	}
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
		spanish: 'tos ',
		spanishPlural: 'tos',
		english: ' and '
	}


	if(thisNumber == 0){
		return numberZero[language]
	}
	else if(thisNumber == 1){

		return numberOne[language]
	}
	else if(thisNumber < 30){
		return List[language]['a1_2']['numbers'][thisNumber - 1]
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
						firstNumberOnDigitText = `novecientas`
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
				firstNumberOnDigitText = `quinientos `
			}
			else if(language == 'spanish' && firstNumberOnDigit == 1){
				firstNumberOnDigitText = `ciento `
			}
			else if(language == 'spanish' && firstNumberOnDigit == 9){
				firstNumberOnDigitText = `novecientos `
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

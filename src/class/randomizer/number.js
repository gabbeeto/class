import {getNumberText} from './randomizer'

export function extraNumber(thisNumber, language, isFemale, otherA, theNumber1){

const oneMillon = 1000000
const zeroForNonThousand = "000"


const oneBillion = oneMillon * 1000
const zeroForNonMillon = zeroForNonThousand + "000"

const oneTrillion = oneBillion * 1000
const zeroForNonBillion = zeroForNonMillon + "000"


const oneQuadrillion = oneTrillion * 1000
const zeroForNonTrillion = zeroForNonBillion + "000"

if(Number(thisNumber) < 1000){
return getNumberText(thisNumber, language, isFemale, otherA, theNumber1)
}
else if(Number(thisNumber) < oneMillon){
	  let negativeNumberForSplittingNumber = 0 - Number(zeroForNonThousand.length)
		let ending = `${thisNumber}`.slice(negativeNumberForSplittingNumber)
		let beginning = `${thisNumber}`.slice(0,negativeNumberForSplittingNumber)
		let endingText;
		let beginningText;

		const thousands = {
			spanish: 'mil',
			english: 'thousand'
		}

		// deal with beginning
		if(beginning == '1' && language == 'spanish'){
		beginningText = 'mil'
		}
		else{
		beginningText = `${getNumberText(beginning, language, isFemale, otherA, theNumber1)} ${thousands[language]}` 
		}
		// deal with ending
		if(ending == zeroForNonThousand){
		endingText = ``
		}
		else{
		endingText = ` ${getNumberText(ending, language, isFemale, otherA, theNumber1)}`
		}
		return `${beginningText}${endingText}`
		}
else if(Number(thisNumber) < oneBillion){
	  let negativeNumberForSplittingNumber = 0 - Number(zeroForNonMillon.length)
		let ending = `${thisNumber}`.slice(negativeNumberForSplittingNumber)
		let beginning = `${thisNumber}`.slice(0,negativeNumberForSplittingNumber)
		let endingText;
		let beginningText;

		const millions = {
			spanish: 'millones',
			english: 'million'
		}

		// deal with beginning
		if(beginning == '1' && language == 'spanish'){
		beginningText = 'un millon'
		}
		else{
		beginningText = `${getNumberText(beginning, language, isFemale, otherA, theNumber1)} ${millions[language]}` 
		}
		// deal with ending
		if(ending == zeroForNonMillon){
		endingText = ``
		}
		else{
		endingText = ` ${extraNumber(ending, language, isFemale, otherA, theNumber1)}`
		}
		return `${beginningText}${endingText}`
}
else if(Number(thisNumber) < oneTrillion){
	  let negativeNumberForSplittingNumber = 0 - Number(zeroForNonBillion.length)
		let ending = `${thisNumber}`.slice(negativeNumberForSplittingNumber)
		let beginning = `${thisNumber}`.slice(0,negativeNumberForSplittingNumber)
		let endingText;
		let beginningText;

		const billions = {
			spanish: 'mil',
			english: 'billion'
		}


		if(ending == zeroForNonBillion){
		billions.spanish = 'mil millones'
		}


		// deal with beginning
		if(beginning == '1' && language == 'spanish'){
			beginningText = `${billions.spanish}`
		}
		else{
		beginningText = `${getNumberText(beginning, language, isFemale, otherA, theNumber1)} ${billions[language]}` 
		}
		// deal with ending
		if(ending == zeroForNonBillion){
		endingText = ``
		}
		else{
		endingText = ` ${extraNumber(ending, language, isFemale, otherA, theNumber1)}`
		}
		return `${beginningText}${endingText}`
}
else if(Number(thisNumber) < oneQuadrillion){
	  let negativeNumberForSplittingNumber = 0 - Number(zeroForNonTrillion.length)
		let ending = `${thisNumber}`.slice(negativeNumberForSplittingNumber)
		let beginning = `${thisNumber}`.slice(0,negativeNumberForSplittingNumber)
		let endingText;
		let beginningText;

		const trillions = {
			spanish: 'billones',
			english: 'trillion'
		}

		// deal with beginning
		if(beginning == '1' && language == 'spanish'){
		beginningText = 'un billon'
		}
		else{
		beginningText = `${getNumberText(beginning, language, isFemale, otherA, theNumber1)} ${trillions[language]}` 
		}
		// deal with ending
		if(ending == zeroForNonTrillion){
		endingText = ``
		}
		else{
		endingText = ` ${extraNumber(ending, language, isFemale, otherA, theNumber1)}`
		}
		return `${beginningText}${endingText}`
}
}



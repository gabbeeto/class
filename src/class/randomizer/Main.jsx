import {getNumberText, randomSentence} from './randomizer'
import { List } from './list'
import  ReactDOM  from 'react-dom/client'


export function Randomizer(){
const englishList = Object.keys(List['english'])
let options = englishList.map( currentClass => (<option value={currentClass}>{currentClass}</option>) )

return (
	<>
	<section className='flex items-center gap-2'>
	<select className='text-black rounded-3xl p-2 '>
	{
		options
	}
	</select>
	
	<div className='bg-sky-600 p-2 rounded-3xl flex items-center text-center justify-center gap-2'>
	<label htmlFor="forAllClass">all classes</label>
	<input id="forAllClass" type="checkbox"/>
</div>
	<label htmlFor="amount">amount:</label>
	<input className='rounded-3xl p-1 text-black' type="Number" id='amount'/>
<button onClick={generateValue} className='bg-sky-600 p-2 border-black border-2 rounded-3xl'>generate</button>

	</section>
	<section id="content"></section>
</>
)
}

function generateValue(){
	console.log(getNumberText(300, 'spanish', true))
let value = document.querySelector('select').value;
let allClasses = document.querySelector('#forAllClass').checked ? 'A' : ''
value = value + allClasses

let valueForAmount = Number(document.querySelector('input#amount').value)
let contentElement = document.querySelector('#content');
let langContent = randomSentence(value, valueForAmount)

ReactDOM.createRoot(contentElement).render((<ul className='flex items-center justify-center gap-5 flex-col '>
{langContent['englishPhrases'].map( (english, index) => (<li className='bg-emerald-700 p-4 rounded-2xl flex flex-col items-center justify-center gap-2' data-index={index}>
	<input className='text-black rounded-xl p-1' data-index={index} onChange={(e) => {
		document.querySelectorAll('output')[e.target.dataset.index].innerHTML = document.querySelectorAll(`li[data-index] input`)[e.target.dataset.index].value}} type="text"/>
<details className='bg-sky-500 p-2 flex flex-col gap-96'>
<summary>{langContent['spanishPhrases'][index]}</summary>
<p className='bg-cyan-800 p-2 rounded-3xl'>{english}</p>
<output id='output' className='bg-amber-800 p-2 rounded-3xl'></output>
</details>
</li>))}</ul>))
}

// continue with this later on
export function compareEnglish(expectedEnglish, writtenEnglish){
let waysOfWriting = [writtenEnglish]
let hundredIsInsideWord = expectedEnglish.match('hundred') != null
if(hundredIsInsideWord){
waysOfWriting.push(expectedEnglish.split(' and ').join(''))
}
}

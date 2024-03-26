import red from './color/red.png'
import blue from './color/blue.png'
import yellow from './color/yellow.png'
import green from './color/green.png'
import purple from './color/Purple.png'
import black from './color/black.jpg'
import white from './color/white.png'
import brown from './color/brown.png'
import orange from './color/orange.jpeg'
import pink from './color/pink.png'
import cyan from './color/cyan.png'
import gray from './color/gray.png'
import ReactDOM from 'react-dom/client'

let colorRoot
let textHidden = false
const colors = [
		<ColorList colorText='Red' colorImg={red}  />,
		<ColorList colorText='Blue' colorImg={blue}  />,
		<ColorList colorText='Green' colorImg={green}  />,
		<ColorList colorText='Black' colorImg={black}  />,
		<ColorList colorText='White' colorImg={white}  />,
		<ColorList colorText='Yellow' colorImg={yellow}  />,
		<ColorList colorText='Orange' colorImg={orange}  />,
		<ColorList colorText='Pink' colorImg={pink}  />,
		<ColorList colorText='Purple' colorImg={purple}  />,
		<ColorList colorText='Brown' colorImg={brown}  />,
		<ColorList colorText='Cyan' colorImg={cyan}  />,
		<ColorList colorText='Gray' colorImg={gray}  />
	]



function ColorList({ colorText, colorImg }) {
	return (<li className='w-full flex justify-center  text-center'>
		<figure className='w-full flex-col-reverse flex text-center'>
			< img className='w-full h-5/6 border-black border-2 rounded-3xl ' src={colorImg} alt={colorText} />
			<figcaption >{colorText}</figcaption>
		</figure >
	</li >
	)
}

export function A1Color() {


	return (<>
		<ul id='listOfColors' className='grid grid-cols-autoFit-2 gap-2  justify-items-center'>
			{randomize(colors)}
		</ul >
		<div className='flex flex-rows gap-2 items-center justify-center'>
			<button  id="shower" onClick={hideOrUnHide} className='border-2 border-black p-1 mt-2 rounded-2xl text-center bg-cyan-200 text-black'>show colors</button>

			<button onClick={regenerateColors} className='border-2 border-black p-1 mt-2 rounded-2xl text-center bg-cyan-200 text-black'>change order</button>
		</div>
	</>
	)
}


function regenerateColors(){
const theColors = [
		<ColorList colorText='Red' colorImg={red}  />,
		<ColorList colorText='Blue' colorImg={blue}  />,
		<ColorList colorText='Green' colorImg={green}  />,
		<ColorList colorText='Black' colorImg={black}  />,
		<ColorList colorText='White' colorImg={white}  />,
		<ColorList colorText='Yellow' colorImg={yellow}  />,
		<ColorList colorText='Orange' colorImg={orange}  />,
		<ColorList colorText='Pink' colorImg={pink}  />,
		<ColorList colorText='Purple' colorImg={purple}  />,
		<ColorList colorText='Brown' colorImg={brown}  />,
		<ColorList colorText='Cyan' colorImg={cyan}  />,
		<ColorList colorText='Gray' colorImg={gray}  />
	]

let listOfColors = document.querySelector('#listOfColors')
if(typeof colorRoot != 'undefined'){
colorRoot.render(<>{randomize(theColors)}</>)
}
else{
colorRoot = ReactDOM.createRoot(listOfColors)
colorRoot.render(<>{randomize(theColors)}</>)
}
}

function hideOrUnHide(){
textHidden = !textHidden;
let figCaps = document.querySelectorAll('figcaption')
let shower = document.querySelector('shower')
if(textHidden){
figCaps.forEach(figCap => figCap.classList.add('hidden'))
shower.innerHTML = 'show colors'
}
else{
figCaps.forEach(figCap => figCap.classList.remove('hidden'))
shower.innerHTML = 'hide colors'
}
}

// improve this
function randomize(arrayToRandomize) {
	const lengthForRandomnes = arrayToRandomize.length
	let newArray = arrayToRandomize
	let newArrayWithAnotherOrder = [];
	for (let index = lengthForRandomnes; index > 0; index--) {
		let randomNumber = Math.floor(Math.random() * newArray.length)

		newArrayWithAnotherOrder.push(newArray[randomNumber])
		newArray.splice(randomNumber, 1)
	}
	return newArrayWithAnotherOrder;
}


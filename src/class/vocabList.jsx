import ReactDOM from 'react-dom/client'

let wordRoot
let textHidden = false
let newList


function WordList({ wordText, wordImg }) {
	let randomNumber = Math.floor(Math.random() * wordImg.length)
	let randomImg = wordImg[randomNumber]
	return (<li className='w-80 h-80 flex justify-center  text-center'>
		<figure className='w-full h-full flex-col-reverse flex text-center'>
			< img className='w-full h-5/6 border-black border-2 rounded-3xl' src={randomImg} alt={wordText} />
			<figcaption className='h-1/6' >{wordText}</figcaption>
		</figure >
	</li >
	)
}

export function ListOfWords({list, name}) {

   newList = list.map((word) => {return <WordList wordText={word[0]} wordImg={word[1]}  /> })
randomize()

	return (<>
		<ul id='listOfWords' className='flex gap-3  flex-wrap justify-center' >
			{newList}
		</ul >
		<div className='flex flex-rows shrink-0 flex-grow-0 gap-2 my-2 items-center justify-center'>
			<button  id="shower" onClick={() => hideOrUnHide(name)} className='border-2 border-black p-1 mt-2 rounded-2xl text-center bg-cyan-200 text-black'>hide {name}s</button>

			<button onClick={regenerateWords} className='border-2 border-black p-1 mt-2 rounded-2xl text-center bg-cyan-200 text-black'>change order</button>
		</div>
	</>
	)
}


function regenerateWords(){
randomize(newList)
let listOfWords = document.querySelector('#listOfWords')
if(typeof wordRoot != 'undefined'){
wordRoot.render(<>{newList}</>)
}
else{
wordRoot = ReactDOM.createRoot(listOfWords)
wordRoot.render(<>{newList}</>)
}
}

function hideOrUnHide(name){
textHidden = !textHidden;
let figCaps = document.querySelectorAll('figcaption')
let shower = document.querySelector('#shower')
if(textHidden){
figCaps.forEach(figCap => figCap.classList.add('hidden'))
shower.innerHTML = `show ${name}s`
}
else{
figCaps.forEach(figCap => figCap.classList.remove('hidden'))
shower.innerHTML = `hide ${name}s`
}
}

function randomize() {
	let arrayToRandomize = [...newList]
	const lengthForRandomnes = arrayToRandomize.length
	let newArray = arrayToRandomize
	let newArrayWithAnotherOrder = [];
	for (let index = lengthForRandomnes; index > 0; index--) {
		let randomNumber = Math.floor(Math.random() * newArray.length)

		newArrayWithAnotherOrder.push(newArray[randomNumber])
		newArray.splice(randomNumber, 1)
	}
	newList = [...newArrayWithAnotherOrder];
}


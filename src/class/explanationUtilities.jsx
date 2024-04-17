
const purple = ['bg-indigo-800','bg-violet-700']
const orange = ['bg-orange-800','bg-amber-700']
const green = ['bg-green-800','bg-emerald-700']
const blue = ['bg-sky-800','bg-blue-700']

const allTheColors = {purple, orange, green, blue};


export function ListOfTest({list,color = "blue"}){

let currentColor = allTheColors[color][1]

	return (<>{list.map((currentList, index) => (<> <Test testColor={currentColor} spanishPhrase={currentList[0]} expectedEnglish={currentList[1]} id={index} /> </>))}
</>)

}
// continue here
function Test({id, spanishPhrase, expectedEnglish, testColor}){

return (<> 
<section className={`${testColor} m-2 rounded-2xl gap-2 flex flex-col items-center justify-center text-center `} data-sectionid={id}>
<input className="text-black mt-1 rounded-xl p-1 border-black border-2" onChange={() => {
let outputs = document.querySelectorAll('output');
let inputs = document.querySelectorAll('input');
outputs[id].innerHTML = inputs[id].value
}} type="text"/>
<details className=" flex gap-2 flex-col items-center justify-center text-center" >
<summary >{spanishPhrase}</summary>
<h2 className="bg-gray-700 p-2 rounded-2xl">{expectedEnglish}</h2>	
<output className="bg-purple-700 p-2 rounded-2xl"></output>
</details>
</section>
	</>);
}

export function ExplanationContainer({explanation, color = 'green', example = 'example'}){

let currentColor = allTheColors[color]

	return (<section className={`p-1 flex flex-col gap-1 items-center justify-center ${currentColor[0]} p-2 rounded-xl`}>
	<p className={`textSize-3 ${currentColor[1]} rounded-xl p-2`}>{explanation}</p>
	<p className={`textSize-6 ${currentColor[1]} rounded-xl p-2`}>{example}</p>
	</ section>
	)
}


export function TitleContainer({title, color = 'purple', }){
let currentColor = allTheColors[color]

	return (<section className={`flex flex-col gap-2 m-2 items-center justify-center ${currentColor[0]}  rounded-xl`}>
	<h2 className={`textSize-1 w-11/12 ${currentColor[1]} rounded-xl p-1`}>{title}</h2>
	</ section>
	)
}

export function Word({word, color = 'orange'}){

let currentColor = allTheColors[color]

return (<section className={`p-1 flex  gap-2 items-center justify-center ${currentColor[0]} p-2 rounded-xl textSize-2 m-1`} >
	<span className="text-cyan-200 ">{word[0]}</span> = <span className="text-purple-200">{word[1]}</span>
	</section>)
}

export function TinyExplanation({title, explanation, example, color = 'green'}){

let currentColor = allTheColors[color]

	return (<section className={`p-1 flex flex-col gap-1 items-center justify-center ${currentColor[0]} p-2 rounded-xl`}>
		<div className={`${currentColor[1]} p-2 grid grid-cols-2  grid-rows-2 gap-x-5 gap-y-0 rounded-xl text-center items-center `}>
<h2 className="textSize-2 col-start-1  col-end-1 row-start-1 row-end-1">{title[0]}:</h2>
<div className="textSize-6 col-start-1 col-end-1 row-start-2 row-end-2">{title[1]}:</div>
<p className="textSize-4 col-start-2 col-end-2 row-start-1 row-end-1">{explanation[0]}</p>	
<div className="textSize-6 col-start-2 col-end-2 row-start-2 row-end-2">{explanation[1]}</div>
		</div>

	<p className={`textSize-6 ${currentColor[1]} rounded-xl p-2`}>{example}</p>
	</ section>
	)
}

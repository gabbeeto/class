
const purple = ['bg-indigo-800','bg-violet-700']
const orange = ['bg-orange-800','bg-amber-700']
const green = ['bg-green-800','bg-emerald-700']

const allTheColors = {purple, orange, green};

export function ExplanationContainer({explanation, color = 'green', example = 'example'}){

let currentColor = allTheColors[color]

	return (<section className={`p-1 flex flex-col gap-1 items-center justify-center ${currentColor[0]} p-2 rounded-xl`}>
	<p className={`textSize-3 ${currentColor[1]} rounded-xl p-2`}>{explanation}</p>
	<p className={`textSize-6 ${currentColor[1]} rounded-xl p-2`}>{example}</p>
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

import {useState} from 'react';
import { Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest } from './../../explanationUtilities'
import rating1 from './rating1.png'
import rating2 from './rating2.png'

function BlackButton({content, isActivated, clickFunc}){
let extraClasses = '';
if(isActivated){
extraClasses = 'bg-purple-200 rounded-xl p-2'
}

return( <div onClick={clickFunc} className={extraClasses}> <button className='border-2 border-white bg-black rounded-3xl p-2 hover:bg-white hover:border-black hover:text-black '>{content}</button> </div>)
}

export function A1_14() {
	const [sizeIsSmall,changeSize] = useState(true);
	const [divSize,changeDivSize] = useState('h-3/6 w-3/6');
	const [lengthIsSmall,changeLength] = useState(true);
	const [divLength,changeDivLength] = useState('w-2/6');
	const [heightIsSmall,changeHeight] = useState(true);
	const [divHeight,changeDivHeight] = useState('h-2/6');

	return (<>
		<TitleContainer  title={<>size</>} / >
		<article className=' bg-sky-200 p-1 rounded-xl w-screen width-100 height-95 grid grid-cols-6 sm:grid-cols-3 sm:grid-rows-3 text-center'> 

		
		<div  className='flex flex-col items-center justify-center text-center col-start-1 sm:col-end-3  sm:row-start-1 sm:row-end-4 col-end-4 bg-white rounded-2xl'>
		<div className={`p-2 ${divSize} flex flex-col items-center justify-center text-center transition-all delay-100`} >

		<div className={` rounded-2xl bg-amber-500 flex flex-col items-center justify-center text-center transition-all delay-75 ${divLength} ${divHeight}`}></div>

		</div>


		</div>

		<div className='col-start-4 col-end-7 sm:col-start-3  sm:col-end-4 sm:row-start-1 sm:row-end-4 p-2 rounded-2xl bg-black flex w-full h-full flex-col'>

		<p  classname="textsize-2 ">length:</p>
		<div className="flex items-center gap-2 justify-center text-center ">

		<BlackButton  clickFunc={() => {changeLength(true); changeDivLength('w-2/6')}} isActivated={lengthIsSmall} content={(<>short</>)} / > 
		<BlackButton  clickFunc={() => {changeLength(false); changeDivLength('w-full')}} isActivated={!lengthIsSmall} content={(<>long</>)} / > 
		</div>
		<p  classname="textsize-2 ">height:</p>
		<div className="flex items-center gap-2 justify-center text-center ">
		<BlackButton  clickFunc={() => {changeHeight(true); changeDivHeight('h-2/6')}} isActivated={heightIsSmall} content={(<>short</>)} / > 
		<BlackButton  clickFunc={() => {changeHeight(false); changeDivHeight('h-full')}} isActivated={!heightIsSmall} content={(<>tall</>)} / > 
		</div>
		<p  classname="textsize-2 ">size:</p>
		<div className="flex items-center gap-2 justify-center text-center ">
		<BlackButton  clickFunc={() => {changeSize(true);  changeDivSize('h-3/6 w-3/6')}} isActivated={sizeIsSmall} content={(<>small</>)} / > 
		<BlackButton  clickFunc={() => {changeSize(false);  changeDivSize('h-full w-full')}}isActivated={!sizeIsSmall} content={(<>big</>)} / > 
		</div>

</div>



		</article>

<TitleContainer  title={<>rating</>} / >
<Word word={[(<><span className="textSize-3">To</span> to rate</>), (<>calificar</>)]}/>
<Word word={[(<>rate the shrek movie on a scale of one to twenty</>), (<>califica la pelicula de shrek en una escala de uno a viente</>)]}/>
<Word word={[(<>I rate the shrek movie five out of twenty because I don't like it</>), (<>califico la pelicula de shrek 5 de 10 porque no me gusta</>)]}/>
<Word word={[(<>I rate the shrek movie five out of twenty because I don't like it</>), (<>califico la pelicula de shrek 5 de 10 porque no me gusta</>)]}/>
<Word word={[(<>5/20</>), (<>five out of twenty</>)]}/>
	
	<div className="flex flex-col items-center justify-center text-center">
<img src={rating1} className='width-95 height-50w'/>
<img src={rating2} className='width-95 height-50w'/>

	</div>

	<TitleContainer  title={<>from rating to adjetives</>} / >
<Word word={[(<span className='text-lime-400' >Perfect</span>), (<span className='text-lime-400'>22/22</span>)]}/>
<Word word={[(<span className='text-lime-400'>Flawless</span>), (<span className='text-lime-400'>22/22 <span className='text-white'>or</span> 21/22</span>)]}/>
<Word word={[(<span className='text-lime-300' >Phenomenal</span>), (<span className='text-lime-300'>20/22</span>)]}/>
<Word word={[(<span className='text-lime-300' >amazing</span>), (<span className='text-lime-300'>19/22</span>)]}/>
<Word word={[(<span className='text-lime-200' >wonderful</span>), (<span className='text-lime-200'>18/22</span>)]}/>
<Word word={[(<span className='text-lime-200' >fantastic</span>), (<span className='text-lime-200'>17/22</span>)]}/>
<Word word={[(<span className='text-lime-200' >excellent</span>), (<span className='text-lime-200'>16/22</span>)]}/>
<Word word={[(<span className='text-lime-100' >great</span>), (<span className='text-lime-100'>15/22</span>)]}/>
<Word word={[(<span className='text-lime-100' >good</span>), (<span className='text-lime-100'>13/22</span>)]}/>
<Word word={[(<span className='text-lime-50' >decent</span>), (<span className='text-lime-50'>12/22</span>)]}/>
<Word word={[(<span className='text-white' >ok</span>), (<span className='text-white'>11/22</span>)]}/>
<Word word={[(<span className='text-red-50' >mediocre</span>), (<span className='text-red-50'>9/22</span>)]}/>
<Word word={[(<span className='text-red-100' >bad</span>), (<span className='text-red-100'>7/22</span>)]}/>
<Word word={[(<span className='text-red-200' >awful</span>), (<span className='text-red-200'>4/22</span>)]}/>
<Word word={[(<span className='text-red-300' >horrendous</span>), (<span className='text-red-300'>3/22</span>)]}/>
<Word word={[(<span className='text-red-400' >terrible</span>), (<span className='text-red-300'>2/22</span>)]}/>

<TitleContainer  title={<>comparisons</>} / >
	// continue here
	</>)}

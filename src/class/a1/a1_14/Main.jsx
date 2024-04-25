import {useState} from 'react';
import { Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest } from './../../explanationUtilities'

function BlackButton({content, isActivated, clickFunc}){
let extraClasses = '';
if(isActivated){
extraClasses = 'bg-purple-200 rounded-xl p-2'
}

return( <div onClick={clickFunc} className={extraClasses}> <button className='border-2 border-white bg-black rounded-3xl p-2 hover:bg-white hover:border-black hover:text-black '>{content}</button> </div>)
}

export function A1_14() {
	const [sizeIsSmall,changeSize] = useState(true);
	const [divSize,changeDivSize] = useState('h-2/6 w-2/6');
	const [lengthIsSmall,changeLength] = useState(true);
	const [divLength,changeDivLength] = useState('w-2/6');
	const [heightIsSmall,changeHeight] = useState(true);
	const [divHeight,changeDivHeight] = useState('h-2/6');


	return (<>
		<TitleContainer  title={<>size</>} / >
		<article className=' bg-sky-200 p-1 rounded-xl width-90 height-45w grid grid-cols-3 grid-rows-3 text-center'> 

		<div className='col-start-1 col-end-3 row-start-1 row-end-4 bg-white rounded-2xl'>
		<div className={divSize} >

		<div className={`bg-red-300 ${divLength} ${divHeight}`}></div>

		</div>


		</div>

		<div className='col-start-3 cold-end-4 row-start-1 row-end-4 p-2 rounded-2xl bg-black flex flex-col'>

		<p  classname="textsize-2 ">length:</p>
		<div className="flex items-center gap-2 justify-center text-center">

		<BlackButton clickFunc={() => {changeLength(true); changeDivLength('w-2/6')}} isActivated={lengthIsSmall} content={(<>short</>)} / > 
		<BlackButton clickFunc={() => {changeLength(false); changeDivLength('w-full')}} isActivated={!lengthIsSmall} content={(<>long</>)} / > 
		</div>
		<p  classname="textsize-2 ">height:</p>
		<div className="flex items-center gap-2 justify-center text-center">
		<BlackButton clickFunc={() => {changeHeight(true); changeDivHeight('h-2/6')}} isActivated={heightIsSmall} content={(<>short</>)} / > 
		<BlackButton clickFunc={() => {changeHeight(false); changeDivHeight('h-full')}} isActivated={!heightIsSmall} content={(<>tall</>)} / > 
		</div>
		<p  classname="textsize-2 ">size:</p>
		<div className="flex items-center gap-2 justify-center text-center">
		<BlackButton clickFunc={() => {changeSize(true);  changeDivSize('h-2/6 w-2/6')}} isActivated={sizeIsSmall} content={(<>small</>)} / > 
		<BlackButton clickFunc={() => {changeSize(false);  changeDivSize('h-5/6 w-5/6')}}isActivated={!sizeIsSmall} content={(<>big</>)} / > 
		</div>

</div>



		</article>
	</>)}

import {useState} from 'react';
import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'
import rating1 from './rating1.png'
import rating2 from './rating2.png'

function BlackButton({content, isActivated, clickFunc}) {
	let extraClasses = '';
	if (isActivated) {
		extraClasses = 'bg-purple-200 rounded-xl p-2'
	}

	return (<div onClick={clickFunc} className={extraClasses}> <button className='border-2 border-white bg-black rounded-3xl p-2 hover:bg-white hover:border-black hover:text-black '>{content}</button> </div>)
}

export function A1_15() {
	const [sizeIsSmall, changeSize] = useState(true);
	const [divSize, changeDivSize] = useState('h-3/6 w-3/6');
	const [lengthIsSmall, changeLength] = useState(true);
	const [divLength, changeDivLength] = useState('w-2/6');
	const [heightIsSmall, changeHeight] = useState(true);
	const [divHeight, changeDivHeight] = useState('h-2/6');

	return (<>
		<TitleContainer title={<>size</>} />
		<article className=' bg-sky-200 p-1 rounded-xl w-screen width-100 height-95 grid grid-cols-6 sm:grid-cols-3 sm:grid-rows-3 text-center'>


			<div className='flex flex-col items-center justify-center text-center col-start-1 sm:col-end-3  sm:row-start-1 sm:row-end-4 col-end-4 bg-white rounded-2xl'>
				<div className={`p-2 ${divSize} flex flex-col items-center justify-center text-center transition-all delay-100`} >

					<div className={` rounded-2xl bg-amber-500 flex flex-col items-center justify-center text-center transition-all delay-75 ${divLength} ${divHeight}`}></div>

				</div>


			</div>

			<div className='col-start-4 col-end-7 sm:col-start-3  sm:col-end-4 sm:row-start-1 sm:row-end-4 p-2 rounded-2xl bg-black flex w-full h-full flex-col'>

				<p classname="textsize-2 ">length:</p>
				<div className="flex items-center gap-2 justify-center text-center ">

					<BlackButton clickFunc={() => {changeLength(true); changeDivLength('w-2/6')}} isActivated={lengthIsSmall} content={(<>short</>)} />
					<BlackButton clickFunc={() => {changeLength(false); changeDivLength('w-full')}} isActivated={!lengthIsSmall} content={(<>long</>)} />
				</div>
				<p classname="textsize-2 ">height:</p>
				<div className="flex items-center gap-2 justify-center text-center ">
					<BlackButton clickFunc={() => {changeHeight(true); changeDivHeight('h-2/6')}} isActivated={heightIsSmall} content={(<>short</>)} />
					<BlackButton clickFunc={() => {changeHeight(false); changeDivHeight('h-full')}} isActivated={!heightIsSmall} content={(<>tall</>)} />
				</div>
				<p classname="textsize-2 ">size:</p>
				<div className="flex items-center gap-2 justify-center text-center ">
					<BlackButton clickFunc={() => {changeSize(true); changeDivSize('h-3/6 w-3/6')}} isActivated={sizeIsSmall} content={(<>small</>)} />
					<BlackButton clickFunc={() => {changeSize(false); changeDivSize('h-full w-full')}} isActivated={!sizeIsSmall} content={(<>big</>)} />
				</div>

			</div>



		</article>

		<TitleContainer title={<>rating</>} />
		<Word word={[(<><span className="textSize-3">To</span> to rate</>), (<>calificar</>)]} />
		<Word word={[(<>rate the shrek movie on a scale of one to twenty</>), (<>califica la pelicula de shrek en una escala de uno a viente</>)]} />
		<Word word={[(<>I rate the shrek movie five out of twenty because I don't like it</>), (<>califico la pelicula de shrek 5 de 10 porque no me gusta</>)]} />
		<Word word={[(<>I rate the shrek movie five out of twenty because I don't like it</>), (<>califico la pelicula de shrek 5 de 10 porque no me gusta</>)]} />
		<Word word={[(<>5/20</>), (<>five out of twenty</>)]} />

		<div className="flex flex-col items-center justify-center text-center">
			<img src={rating1} className='width-95 height-50w' />
			<img src={rating2} className='width-95 height-50w' />

		</div>

		<TitleContainer title={<>from rating to adjetives</>} />
		<Word word={[(<span className='text-lime-400' >Perfect</span>), (<span className='text-lime-400'>22/22</span>)]} />
		<Word word={[(<span className='text-lime-400'>Flawless</span>), (<span className='text-lime-400'>22/22 <span className='text-white'>or</span> 21/22</span>)]} />
		<Word word={[(<span className='text-lime-300' >Phenomenal</span>), (<span className='text-lime-300'>20/22</span>)]} />
		<Word word={[(<span className='text-lime-300' >amazing</span>), (<span className='text-lime-300'>19/22</span>)]} />
		<Word word={[(<span className='text-lime-200' >wonderful</span>), (<span className='text-lime-200'>18/22</span>)]} />
		<Word word={[(<span className='text-lime-200' >fantastic</span>), (<span className='text-lime-200'>17/22</span>)]} />
		<Word word={[(<span className='text-lime-200' >excellent</span>), (<span className='text-lime-200'>16/22</span>)]} />
		<Word word={[(<span className='text-lime-100' >great</span>), (<span className='text-lime-100'>15/22</span>)]} />
		<Word word={[(<span className='text-lime-100' >good</span>), (<span className='text-lime-100'>13/22</span>)]} />
		<Word word={[(<span className='text-lime-50' >decent</span>), (<span className='text-lime-50'>12/22</span>)]} />
		<Word word={[(<span className='text-white' >ok</span>), (<span className='text-white'>11/22</span>)]} />
		<Word word={[(<span className='text-red-50' >mediocre</span>), (<span className='text-red-50'>9/22</span>)]} />
		<Word word={[(<span className='text-red-100' >bad</span>), (<span className='text-red-100'>7/22</span>)]} />
		<Word word={[(<span className='text-red-200' >awful</span>), (<span className='text-red-200'>4/22</span>)]} />
		<Word word={[(<span className='text-red-300' >horrendous</span>), (<span className='text-red-300'>3/22</span>)]} />
		<Word word={[(<span className='text-red-400' >terrible</span>), (<span className='text-red-300'>2/22</span>)]} />

		<TitleContainer title={<>comparisons</>} />

		<Word word={[(<>instead</>), (<>en vez/ en vez de</>)]} />
		<Word word={[(<>more</>), (<>más</>)]} />
		<Word word={[(<>less</>), (<>menos</>)]} />

		<ExplanationContainer explanation={<>usually, spanish sentences like <span className='text-purple-400'>mi casa es más azul que tu casa</span> are translated as <span className='text-purple-400'>my house is bluer than your house</span>. <span className='text-blue-400'>Que</span> means <span className='text-blue-400'>than</span> when comparing </>} example={(<div className="flex flex-col items-center justify-center text-center">


			<div>
				<div>my cat is angrier <span className='text-blue-400'>than</span> your cat</div>
				<div>mi gato está más enojado <span className='text-blue-400'>que</span> tu gata</div>
			</div>

		</div>)} />

		<ExplanationContainer explanation={<>
			in comparisons we often use <span className='text-orange-400'>more</span>  or <span className='text-orange-400'>less</span> which are the English equivalent for  <span className='text-orange-400'>más</span> and <span className='text-orange-400'>menos</span>  in spanish
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

			<div>
				<div>my cat is <span className='text-orange-400'>more</span> beautiful than your cat</div>
				<div>mi gato es <span className='text-orange-400'>más</span> hermoso que tu gato</div>
			</div>


			<div>
				<div>my cat is <span className='text-orange-400'>less</span> beautiful than your cat</div>
				<div>mi gato es <span className='text-orange-400'>menos</span> hermoso que tu gato</div>
			</div>

		</div>)} />

		<TitleContainer title={<>the <span className='text-orange-400'>positive</span> comparison</>} />
		<ExplanationContainer explanation={<>
			usually,  you have to add <span className='text-blue-400'>er</span> at the end of the adjetives if they're short when comparing the adjetive(like the spanish equivalent for <span className='text-blue-400'>más</span>)
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
			<div>
				<div>My Minecraft house is <span className='text-blue-400'><span className='text-orange-400'>great</span>er</span> than  your Minecraft house</div>
				<div>Mi casa de Minecraft es <span className='text-blue-400'>más <span className='text-orange-400'>genial</span></span> que tu casa de Minecraft</div>
			</div>

			<div>
				<div>this table has <span className='text-blue-400'><span className='text-orange-400'>green</span>er</span> color than my mother's table</div>
				<div>esta mesa tiene color <span className='text-blue-400'>más <span className='text-orange-400'>verde</span></span> que la mesa de mi mama</div>
			</div>


			<div>
				<div>My dog is <span className='text-orange-400'>sad</span><span className='text-blue-400'>der</span> than  your cow</div>
				<div>Mi perra está <span className='text-blue-400'>más <span className='text-orange-400'>triste</span></span> que tu vaca</div>
			</div>


			<div>
				<div>My house is <span className='text-blue-400'><span className='text-orange-400'>big</span>ger</span> than  Maria's house</div>
				<div>Mi casa es <span className='text-blue-400'>más <span className='text-orange-400'>grande</span></span> que la casa de Maria</div>
			</div>


			<div>
				<div>my dog is <span className='text-blue-400'><span className='text-orange-400'>happ</span>ier</span> than  Kyle's cat</div>
				<div>Mi perro es <span className='text-blue-400'>más <span className='text-orange-400'>feliz</span></span> que el gato de Kyle</div>
			</div>


			<div>
				<div>I'm <span className='text-blue-400'><span className='text-orange-400'>angr</span>ier</span> than  you</div>
				<div>estoy <span className='text-blue-400'>más <span className='text-orange-400'>enojado</span></span> que vos</div>
			</div>

		</div>)} />

		<ExplanationContainer explanation={<>
			but when words are long(it has more than five letter and two syllables) we add the <span className='text-blue-400'>more</span> word instead
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

			<div>
				<div>My Roblox house is <span className='text-blue-400'>more <span className='text-orange-400'>beautiful</span></span> than  Marco's </div>
				<div>Mi casa de Roblox es <span className='text-blue-400'>más <span className='text-orange-400'>hermosa</span></span> que la de Marco</div>
			</div>


			<div>
				<div>this city is <span className='text-blue-400'>more <span className='text-orange-400'>wonderful</span></span> than my home city </div>
				<div>esta ciudad es <span className='text-blue-400'>más <span className='text-orange-400'>maravillosa</span></span> que la ciudad de mi hogar</div>
			</div>


			<div>
				<div>this puzzle is <span className='text-blue-400'>more <span className='text-orange-400'>confusing</span></span> than the previous puzzle </div>
				<div>este puzzle es <span className='text-blue-400'>más <span className='text-orange-400'>confuso</span></span> que el puzzle anterior</div>
			</div>


			<div>
				<div>this puzzle is <span className='text-blue-400'>more <span className='text-orange-400'>confusing</span></span> than the previous puzzle </div>
				<div>este puzzle es <span className='text-blue-400'>más <span className='text-orange-400'>confuso</span></span> que el puzzle anterior</div>
			</div>


			<div>
				<div>my aunt has <span className='text-blue-400'>more <span className='text-orange-400'>embarrasing</span></span> face than what you think she has </div>
				<div>mi tia tiene cara <span className='text-blue-400'>más <span className='text-orange-400'>avergozante</span></span> que lo que te imaginas que ella tiene</div>
			</div>

		</div>)} />

		<TitleContainer title={<>the <span className='text-orange-400'>negative</span> comparison</>} />

		<ExplanationContainer explanation={<>you add <span className='text-orange-400'>less</span> to say that the amount is lower regardless if the word is short or long</>} example={(<div className="gap-2 flex flex-col items-center justify-center text-center">
			<div>
				<div>you're <span className='text-orange-400'>less</span> green than me</div>
				<div>eres menos <span className='text-orange-400'>menos</span> verde que mí</div>
			</div>
			<div>
				<div>she's <span className='text-orange-400'>less</span> big than you</div>
				<div>ella es <span className='text-orange-400'>menos</span> grande que vos</div>
			</div>


			<div>
				<div>we have <span className='text-orange-400'>less</span> pink table than the other company's table</div>
				<div>tenemos mesa <span className='text-orange-400'>menos</span> rosado que la mesa de la otra compania</div>
			</div>


			<div>
				<div>they want to be <span className='text-orange-400'>less</span> wonderful than what they were before</div>
				<div>ellos quieren ser <span className='text-orange-400'>menos</span> maravilloso que lo que eran antes</div>
			</div>

		</div>)} />

		<TitleContainer title={<>comparing without adjetives</>} />
		<Word word={[(<>without</>), (<>sin</>)]} />

		<ExplanationContainer explanation={<>
			when comparing with no adjetives and you want to compare an amount, you just use <span className='text-orange-400'>more</span> or <span className='text-orange-400'>less</span>
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
			<div>
				<div>there are <span className='text-orange-400'>more</span> cats in here</div>
				<div>hay <span className='text-orange-400'>más</span> gatos adentro de aca</div>
			</div>

			<div>
				<div>I have <span className='text-orange-400'>less</span> water than you now</div>
				<div>tengo <span className='text-orange-400'>menos</span> agua que vos ahora</div>
			</div>
		</div>)} />

		<TitleContainer title={<>superlative</>} />
		<Word word={[(<>superlative</>), (<>superior to others</>)]} />

		<div>When the amount in the comparison is higher to every amount being compared, you have to interact with superlative adjetives.</div>
		<ExplanationContainer explanation={<>
			When the adjetive is short you have to add <span className='text-orange-400'>est</span> instead of <span className='text-blue-400'>er</span> when using superlative adjetives
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

			<div>
				<div>I'm the short<span className='text-orange-400'>est</span> boy in this house</div>
				<div>soy el chico  <span className='text-orange-400'>más</span> enano de esta casa</div>
				<div>I'm short<span className='text-blue-400'>er</span> than my brother-in-law</div>
				<div>soy <span className='text-blue-400'>más</span> enano que mi cuñado</div>
			</div>



			<div>
				<div>that one is the blue<span className='text-orange-400'>st</span> bird in the world</div>
				<div>ese es el pajaro <span className='text-orange-400'>más</span> azul del mundo</div>
				<div>that bird is blue<span className='text-blue-400'>r</span> than my bird</div>
				<div>ese pajaro es <span className='text-blue-400'>más</span> azul que mi pajaro</div>
			</div>

		</div>)} />

		<ExplanationContainer explanation={<>
			when the adjetives are long, you have to replace <span className='text-blue-400'>more</span> with  <span className='text-orange-400'>most</span> when using superlative adjetives
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

			<div>
				<div>you're the <span className='text-orange-400'>most</span> beautiful person in the bedroom</div>
				<div>eres la <span className='text-orange-400'>más </span> hermosa persona del dormitorio</div>
				<div>you're <span className='text-blue-400'>more</span> beautiful than me</div>
				<div>eres <span className='text-blue-400'>más</span> hermosa que yo</div>
			</div>


			<div>
				<div>she has the <span className='text-orange-400'>most</span> wonderful monkey in the zoo</div>
				<div>ella tiene el mono <span className='text-orange-400'>más </span> maravilloso del zológico</div>
				<div>we have <span className='text-blue-400'>more</span> wonderful monkeys than them</div>
				<div>tenemos monos <span className='text-blue-400'>más</span> maravilloso que ellos</div>
			</div>



		</div>)} />

		<ExplanationContainer explanation={<>perhaps you notice that we use the article <span className='text-blue-400'>the</span> a lot of times. That’s because only one thing can be at the top of its category, so we use <span className='text-blue-400'>the</span> to show we’re talking about one specific thing.</>} example={(<div className="flex flex-col items-center justify-center text-center">

			<div>
				<div>you're <span className='text-blue-400'>the</span> cutest dog</div>
				<div>eres <span className='text-blue-400'>el</span> perro más tierno</div>
			</div>

		</div>)} />

		<Word word={[(<>ommited</>), (<>omitido</>)]} />
		<ExplanationContainer explanation={<>but sometimes we use the <span className='text-red-400'>possesive pronouns</span> instead of the article <span className='text-blue-400'>the</span> so <span className='text-blue-400'>the</span> can be omitted</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div>
				<div>you're <span className='text-red-400'>my</span> <span className='text-amber-400'>cutest</span> dog in my house</div>
				<div>erés <span className='text-red-400'>mi</span> perro <span className='text-amber-400'>más tierno</span> de mi casa </div>
			</div>


			<div>
				<div>I'm <span className='text-red-400'>your</span> <span className='text-amber-400'>most intelligent</span> friend</div>
				<div>soy <span className='text-red-400'>tu</span> amigo <span className='text-amber-400'>más inteligente</span> </div>
			</div>

		</div>)} />

	</>)
}

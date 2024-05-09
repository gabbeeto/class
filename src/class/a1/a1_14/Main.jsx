import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest, TinyExplanationContainer } from './../../explanationUtilities'

import thisBirdImg from './thisBird.png';
import thisOneImg from './thisOne.png';


import whichOneImg from './whichOne.png';
import whichFruitImg from './whichFruit.png';

import thisOneFruitImg from './thisOneFruit.png';
import thisFruitImg from './thisFruit.png';

export function A1_14(){
// work on something someone,somewhere,somebody, this one, I'm the one, that one, anyone,everywhere, nowhere
return (<> 

<TitleContainer  title={<>'one' replaces noun</>} / >
	<Word word={[(<>like</>), (<>como</>)]}/>
	<Word word={[(<>accompanied by</>), (<>acompañado por</>)]}/>


<ExplanationContainer  explanation={<>
Demostratives adjetives like <span className='text-orange-400'>this</span> and <span className='text-orange-400'>that</span> are often accompanied by <span className='text-blue-400'>nouns</span> 
	</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
	<div>
		<div>
			<span className='text-orange-400'>this</span> <span className='text-blue-400'>car</span> is cute
		</div>
		<div>
			<span className='text-orange-400'>este</span> <span className='text-blue-400'>auto</span> es tierno
		</div>
		</div>

		<div>
		<div>
			<span className='text-orange-400'>that</span> <span className='text-blue-400'>cat</span> is crazy
		</div>
		<div>
			<span className='text-orange-400'>ese</span> <span className='text-blue-400'>gato</span> está loco
		</div>
		</div>


		<div>
			<div>
				<span className='text-orange-400'>these </span> <span className='text-blue-400'>houses</span> are really wonderful
			</div>
			<div>
				<span className='text-orange-400'>estas</span> <span className='text-blue-400'>casas</span> son realmente maravilloso
			</div>
		</div>


		<div>
			<div>
				<span className='text-orange-400'>those </span> <span className='text-blue-400'>puzzles</span> are confusing
			</div>
			<div>
				<span className='text-orange-400'>esos</span> <span className='text-blue-400'>puzzles</span> son realmente confuso
			</div>
		</div>

	</div>)} / >

	<div className="flex flex-col items-center justify-center text-center">
		<img src={thisBirdImg} alt="this bird image"/>
	</div>

	<ExplanationContainer  explanation={<>but sometimes, you want to specifying a <span className='text-blue-400'>noun</span> you don't know the name of or you don't want to specify the <span className='text-blue-400'>noun</span>. well.. in that case, you can use <span className='text-blue-400'>one</span> so you don't specify the <span className='text-blue-400'>noun</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-6">

<div className="flex flex-col items-center justify-center text-center gap-1">
		<div>
			<div>
				<span className='text-orange-400'>this</span> <span className='text-blue-400'>cow</span> is really big
			</div>
			<div>
				<span className='text-orange-400'>esta</span> <span className='text-blue-400'>vaca</span> es realmente grande
			</div>
		</div>

		<div>
			<div>
				<span className='text-orange-400'>this</span> <span className='text-blue-400'>one</span> is really big
			</div>
			<div>
				<span className='text-orange-400'>esta</span> es realmente grande
			</div>
		</div>
</div>



<div className="flex flex-col items-center justify-center text-center gap-1">
		<div>
			<div>
				<span className='text-orange-400'>that</span> <span className='text-blue-400'>butterfly</span> is awesome
			</div>
			<div>
				<span className='text-orange-400'>esa</span> <span className='text-blue-400'>mariposa</span> es genial
			</div>
		</div>

		<div>
			<div>
				<span className='text-orange-400'>that</span> <span className='text-blue-400'>one</span> is awesome
			</div>
			<div>
				<span className='text-orange-400'>esa</span> es genial
			</div>
		</div>
</div>

<div className="flex items-center justify-center flex-col text-center gap-1">
		<div>
			<div>
				<span className='text-orange-400'>these </span> <span className='text-blue-400'>cats</span> are perfect
			</div>
			<div>
				<span className='text-orange-400'>estas</span> <span className='text-blue-400'>gatos</span> son perfecto
			</div>
		</div>

		<div>
			<div>
				<span className='text-orange-400'>these </span> <span className='text-blue-400'>ones</span> are really wonderful
			</div>
			<div>
				<span className='text-orange-400'>estas</span> son realmente maravilloso
			</div>
		</div>
</div>


<div className="flex items-center justify-center flex-col text-center gap-1">

		<div>
			<div>
				<span className='text-orange-400'>those </span> <span className='text-blue-400'>sidewalk</span> are confusing
			</div>
			<div>
				<span className='text-orange-400'>esas</span> <span className='text-blue-400'>veredas</span> son realmente confusas
			</div>
		</div>

		<div>
			<div>
				<span className='text-orange-400'>those </span> <span className='text-blue-400'>ones</span> are confusing
			</div>
			<div>
				<span className='text-orange-400'>esos</span> son realmente confuso
			</div>
		</div>
</div>


	</div>
)} / >

	<div className="flex flex-col items-center justify-center text-center">
		<img src={thisOneImg} alt="this one image"/>
	</div>

	<ExplanationContainer  explanation={<>
there's less specificity when you don't include the <span className='text-blue-400'>noun</span>, it's more general.
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
			<div>
				<div>
					<span className='text-orange-400'>this</span> is bad
				</div>
				<div>
					<span className='text-orange-400'>esto</span> es malo
				</div>
			</div>

			<div>
				<div>
					<span className='text-orange-400'>that</span>'s not good
				</div>
				<div>
					<span className='text-orange-400'>eso</span> no es bueno
				</div>
			</div>


			<div>
				<div>
					<span className='text-orange-400'>these</span> don't feel cold
				</div>
				<div>
					<span className='text-orange-400'>estos</span> no se sienten frio
				</div>
			</div>


			<div>
				<div>
					<span className='text-orange-400'>those</span> are great
				</div>
				<div>
					<span className='text-orange-400'>esos</span> son genial
				</div>
			</div>
	</div>)} / >
	<Word word={[(<><span className="textSize-3">To</span> ask</>), (<>preguntar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> answer</>), (<>responder</>)]}/>
	<div>you can ask</div>
	<div className="flex flex-col items-center justify-center text-center p-5 ">
		<img src={whichFruitImg} className='rounded-full h-96' alt="this one"/>
	</div>
	<TinyExplanationContainer  explanation={<>.. or you can ask.. </>} / >
	<div className="flex flex-col items-center justify-center text-center  p-5">
		<img src={whichOneImg} className='rounded-full h-96 ' alt="this fruit"/>
	</div>
		 .. And then you can answer..
	<div className="flex flex-col items-center justify-center text-center  p-5">
		<img src={thisFruitImg} className='rounded-full h-96 ' alt="this fruit"/>
	</div>
		 .. Or you can answer..
	<div className="flex flex-col items-center justify-center text-center  p-5">
		<img src={thisOneFruitImg} className='rounded-full h-96 ' alt="this fruit"/>
	</div>


	<Word word={[(<>used</>), (<>usado</>)]}/>
	<ExplanationContainer  explanation={<> <span className='text-blue-400'>one</span> is also used to replace other <span className='text-blue-400'>nouns</span> when you or the other person/people know what you talk about</>} example={(
		<div className="flex flex-col items-center justify-center text-center gap-4">

		<div>
			<div>
				you're the <span className='text-blue-400'>lion</span> 
			</div>
			<div>
				you're the <span className='text-blue-400'>one</span> 
			</div>
		</div>
		

		<div>
			<div>
				give me the beautiful <span className='text-blue-400'>cat</span> 
			</div>
			<div>
				give me the beautiful <span className='text-blue-400'>one</span> 
			</div>
		</div>

	</div>)} / >


	<TitleContainer  title={<> <span className='text-amber-400'>every</span> , <span className='text-amber-400'>some</span>, <span className='text-amber-400'>no</span> and <span className='text-amber-400'>any</span></>} / >
<Word word={[(<>mixed</>), (<>mesclado</>)]}/>
<Word word={[(<>thing</>), (<>cosa</>)]}/>
<TinyExplanationContainer  explanation={<>We use <span className='text-blue-400'>some</span> and <span className='text-blue-400'>any</span> for talking about indefinite numbers or amounts of things.</>} / >

<ExplanationContainer  explanation={<> <span className='text-blue-400'>Some</span>  is used for positive sentences</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
<div>
	<div>I can give you <span className='text-blue-400'>some</span> potatoes</div>
	<div>puedo darte <span className='text-blue-400'>algunas</span> papas</div>
</div>


<div>
	<div>I want <span className='text-blue-400'>some</span> tables!</div>
	<div>quiero <span className='text-blue-400'>algunas</span> mesas!</div>
</div>


<div>
	<div>eating <span className='text-blue-400'>some</span> vegetable is not fun!</div>
	<div>comer <span className='text-blue-400'>algunos</span> vegetales no es divertido!</div>
</div>

</div>)} / >


	<ExplanationContainer  explanation={<><span className='text-blue-400'>Any</span> is used in interrogative sentences or negative sentences </>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
	<div>Can you get <span className='text-blue-400'>any</span> carrot?</div>
	<div>¿Podés obtener <span className='text-blue-400'>alguna</span> zanahoria?</div>
</div>

<div>
	<div>Do you have any <span className='text-blue-400'>any</span> doors?</div>
	<div>¿Tenés <span className='text-blue-400'>algunas</span> puerta?</div>
</div>


<div>
	<div>I don't have <span className='text-blue-400'>any</span> pen</div>
	<div>No tengo <span className='text-blue-400'>ninguna</span> lapicera</div>
</div>


<div>
	<div>She doesn't want <span className='text-blue-400'>any</span> animal</div>
	<div>Ella no quiere <span className='text-blue-400'>ningun</span> animal</div>
</div>
	</div>)} / >

	</>);
}

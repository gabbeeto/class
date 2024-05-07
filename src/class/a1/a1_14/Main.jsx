import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'
import thisBirdImg from './thisBird.png';
import thisOneImg from './thisOne.png';

export function A1_14(){
// work on something someone,somewhere,somebody, this one, I'm the one, that one, anyone,everywhere, nowhere
return (<> 

<TitleContainer  title={<>this/that one</>} / >
	<Word word={[(<>like</>), (<>como</>)]}/>
	<Word word={[(<>accompanied by</>), (<>acompañado por</>)]}/>


<ExplanationContainer  explanation={<>
Demostratives adjetives like <span className='text-orange-400'>this</span> and <span className='text-orange-400'>that</span> are often in accompanied by <span className='text-blue-400'>nouns</span> 
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



	</div>)} / >

	<div className="flex flex-col items-center justify-center text-center">
		<img src={thisOneImg} alt="this one image"/>
	</div>

	</>);
}

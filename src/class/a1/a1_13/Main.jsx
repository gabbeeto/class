import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'
import adverbOfFrequency from './adverbOfFrequency.png'


export function A1_13(){
return (<> 
	<TitleContainer  title={<>adverb of frequency</>} / >
	<Word word={[(<>to show</>), (<>mostrar</>)]}/>
	<Word word={[(<>after</>), (<>despues de</>)]}/>
	<Word word={[(<>before</>), (<>antes de</>)]}/>
	<div>Adverbs of frequency show you how frequent our verbs is ocurring</div>
	<img src={adverbOfFrequency} alt="adverbs of frequency" className='p-2 rounded-xl'/>

	<Word word={[(<>time</>), (<>tiempo</>)]}/>
	<Word word={[(<>times</>), (<>veces</>)]}/>
	<Word word={[(<>never</>), (<>nunca(0% of the times)</>)]}/>
	<Word word={[(<>sometimes</>), (<>aveces(50% of the times)</>)]}/>
	<Word word={[(<>often</>), (<>a menudo(70% of the times)</>)]}/>
	<Word word={[(<>always</>), (<>siempre(100% of the times)</>)]}/>

	<ExplanationContainer  explanation={<>for normal verbs, you use <span className='text-orange-400'>the adverb of frequency</span> after <span className='text-blue-400'>the noun</span> and before <span className='text-cyan-400'>the verb</span></>} example={(<div className="flex flex-col items-center justify-center gap-2 text-center">
<div>
	<div> <span className='text-blue-400'>you</span> <span className='text-orange-400'>often</span> <span className='text-cyan-400'>create</span>  a Minecraft house</div>
	<div> tú a menudo creas una casa de Minecraft</div>
</div>


<div>
	<div> <span className='text-blue-400'>he</span> <span className='text-orange-400'>sometimes</span> <span className='text-cyan-400'>eats</span>  carrot</div>
	<div> el aveces come zanahoria</div>
</div>

		</div>)} / >


<ExplanationContainer  explanation={<>for special verbs, like verb to be, to can, to must.. You use the <span className='text-orange-400'>the adverb of frequency</span> after <span className='text-cyan-400'>the verb</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">


<div>
	<div> you  <span className='text-cyan-400'>can</span>  <span className='text-orange-400'>never</span> create a Minecraft house</div>
	<div> nunca podes crear una casa de Minecraft</div>
</div>


<div>
	<div> he  <span className='text-cyan-400'>is</span>  <span className='text-orange-400'>rarely</span> happy</div>
	<div> él raramente es  feliz</div>
</div>

</div>)} / >


<ExplanationContainer  explanation={<>You can put the <span className='text-orange-400'>adverb</span> at the start or end of the sentence for emphasis</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
<div>
<div><span className='text-orange-400'>sometimes</span> I go to school</div>
<div>aveces voy a la escuela</div>
</div>
<div>
<div>I go to university <span className='text-orange-400'>generally</span></div>
<div>voy a la universidad generalmente</div>
</div>

	</div>)} / >
	</>);
}

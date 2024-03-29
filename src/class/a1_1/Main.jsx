import { TinyExplanation } from './../explanationUtilities'
import { ExplanationContainer } from './../explanationUtilities'

export function A1_1() {
return (<>
	<TinyExplanation title={['noun', 'sustantivo']} explanation={['the thing/animal/person','la cosa/animal/persona']} color='purple'  example="cat" / >


	<TinyExplanation title={['adjetive', 'adjetivo']} explanation={['what describes the noun','lo que describe el sustantivo']} color='orange'  example="blue" / >


	< ExplanationContainer explanation={(<> <span className='bg-red-600'>En Inglés</span>, los <span className='bg-amber-700'>adjetivos</span> (lo que describen a la cosa) <span className='bg-red-600'>siempre</span>  van hacia a la <span className='bg-red-600'>isquierda de</span> los <span className='bg-indigo-700'>sustantivos</span> (la cosa)</>)} color="green"  example={<>
<span className='bg-amber-700'>blue</span>  <span className='bg-indigo-700 '>cat</span></>} />




	< ExplanationContainer explanation={(<> <span className='bg-red-600'>En Español</span>, los <span className='bg-amber-700'>adjetivos</span>(lo que describen a la cosa) <span className='bg-red-600'>aveces</span> van hacia a la <span className='bg-red-600'>derecha  de</span>  los <span className='bg-indigo-700'>sustantivos</span>(la cosa)</>)} color="green"  example={(<div className='flex flex-col'>

		<div>
<span className='bg-indigo-700 '>gato</span>  <span className='bg-amber-700'>azul</span>  
</div>

		<div>
<span className='bg-amber-700'>buen</span>  <span className='bg-indigo-700 '>perro</span>     
</div>

	</div>
)} />
</>
)
}

import { TinyExplanation } from './../explanationUtilities'
import { ExplanationContainer } from './../explanationUtilities'

export function A1_1() {
return (<>
	<TinyExplanation title={['noun', 'sustantivo']} explanation={['the thing/animal/person','la cosa/animal/persona']} color='purple'  example="cat" / >


	<TinyExplanation title={['adjetive', 'adjetivo']} explanation={['what describes the noun','lo que describe el sustantivo']} color='orange'  example="blue" / >


	< ExplanationContainer explanation="En Inglés, los adjetivos(lo que describen a la cosa) siempre van hacia a la isquierda de los sustantivos(la cosa)" color="green"  example={<>
<span className='bg-amber-700'>blue</span>  <span className='bg-indigo-700 '>cat</span></>} />




	< ExplanationContainer explanation="En Español, los adjetivos(lo que describen a la cosa) aveces van hacia a la derecha de los sustantivos(la cosa)" color="green"  example={(<div className='flex flex-col'>

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

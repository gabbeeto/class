import { TinyExplanation } from './../../explanationUtilities'
import { ExplanationContainer } from './../../explanationUtilities'

export function A1_1() {
return (<>
	<TinyExplanation title={['noun', 'sustantivo']} explanation={['the thing/animal/person','la cosa/animal/persona']} color='purple'  example="cat" / >
	<TinyExplanation title={['adjetive', 'adjetivo']} explanation={['what describes the noun','lo que describe el sustantivo']} color='orange'  example="blue" / >
	< ExplanationContainer explanation={(<> <span className='bg-red-600'>En Inglés</span>, los <span className='bg-amber-700'>adjetivos</span> (lo que describen a la cosa) <span className='bg-red-600'>siempre</span>  van hacia a la <span className='bg-red-600'>isquierda de</span> los <span className='bg-indigo-700'>sustantivos</span> (la cosa)</>)} color="green"  example={<>
		<div>
<span className='bg-amber-700'>blue</span>  <span className='bg-indigo-700 '>cat</span>
</div>
		<div>
<span className='inline-block bg-amber-700'>good</span>  <span className='bg-indigo-700 '>cow</span>
</div>

		</>} />

	< ExplanationContainer explanation={(<> <span className='bg-red-600'>En Español</span>, los <span className='bg-amber-700'>adjetivos</span>(lo que describen a la cosa) <span className='bg-red-600'>aveces</span> van hacia a la <span className='bg-red-600'>derecha  de</span>  los <span className='bg-indigo-700'>sustantivos</span>(la cosa)</>)} color="green"  example={(<div className='flex flex-col'>
		<div>
<span className='bg-indigo-700 '>gato</span>  <span className='bg-amber-700'>azul</span>  
</div>
		<div>
<span className='bg-amber-700'>buen</span>  <span className='bg-indigo-700 '>perro</span>     
</div>
	</div>
)} />



	<TinyExplanation title={['a/an','un/una']} explanation={['article for noun in singular', 'articulo para sustantivos en singular']} color='purple'  example={(<div > <div>a  <span className='bg-indigo-700 '>cat</span></div>
<div>un  <span className='bg-indigo-700 '>gato</span></div>
<div>a  <span className='bg-indigo-700 '>cow</span></div>
<div>una  <span className='bg-indigo-700 '>vaca</span></div>
		</div>)
	} / >

<ExplanationContainer  explanation={<>el articulo <span className='text-sky-400'>a</span> or <span className='text-sky-400'>an</span> significa <span className='text-sky-400'>un</span> o <span className='text-sky-400'>una</span>(En inglés <span className='text-sky-400'>a</span> no tiene genero).</>} example={(<div><div><span className='text-sky-400'>a</span> dog</div>
<div><span className='text-sky-400'>un</span> perro</div>
<div><span className='text-sky-400'>una</span> perra</div></div>)} / >

	< ExplanationContainer explanation={(<> Se dice <span className='text-sky-400'>an</span> cuando suena una vocal como: <span className='text-sky-400'>a</span> , <span className='text-sky-400'>e</span> , <span className='text-sky-400'>i</span> , <span className='text-sky-400'>o</span> , <span className='text-sky-400'>u</span>.. Al principio de la siguiente palabra. </>)} color="green"  example={<>
an  <span className='bg-indigo-700 '>ant</span></>} />

	< ExplanationContainer explanation={(<> Cuando suena una consonante en la siguiente palabra, se usa 'a' </>)} color="green"  example={<>
a  <span className='bg-indigo-700 '>cat</span></>} />


</>)

}

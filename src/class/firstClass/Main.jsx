import {Word, TinyExplanation, ExplanationContainer, TitleContainer} from './../explanationUtilities'

import alphabet from './alphabet.jpg'

export function FirstClass(){
return (<> 
<h2 className='textSize-2'>Hey fellow students!!</h2>

	<TitleContainer  title={<>first words</>} / >
	<Word word={[(<>Welcome</>), (<>bienvenido</>)]}/>
	<Word word={[(<>Student</>), (<>Estudiante</>)]}/>
	<Word word={[(<>Teacher</>), (<>Enseñador/profesor/maestro</>)]}/>
	<Word word={[(<>yes</>), (<>sí</>)]}/>
	<Word word={[(<>Hello</>), (<>Hola</>)]}/>
	<Word word={[(<>Hi</>), (<>Hola<span className='textSize-5'>/holis</span></>)]}/>

	<ExplanationContainer  explanation={<><span className='text-sky-300'>Hi</span> es como <span className='text-sky-300'>hello</span> pero <span className='text-sky-300'>hi</span> es usado con gente cercana o gente de confianza mientras mientras que <span className='text-sky-300'>hello</span> es un poco más formal</>} example={(<>hi mom!</>)} / >

<TitleContainer  title={<>the alphabet and how to spell</>} / >
	<img src={alphabet} className='w-full p-2 rounded-2xl' alt="alphabet"/>

	<Word word={[(<>spelling</>), (<>deletro</>)]}/>

	<Word word={[(<>What's the spelling of [word]?</>), (<>Cual es el deletro de [palabra en inglés]? </>)]}/>


	<Word word={[(<>how is [word] spelled?</>), (<>como se deletrea [palabra en inglés]? / como se escribe [palabra] </>)]}/>

	<Word word={[(<>how can I spell [word]?</>), (<>como puedo deletrear/escribir [palabra en inglés]? </>)]}/>
	<Word word={[(<>What's the spelling of banana?</>), (<>Como se escribe banana?</>)]}/>


	<Word word={[(<>banana is spelled b-a-n-a-n-a!</>), (<> ¡Banana se escribe b-a-n-a-n-a!</>)]}/>

<details>
<summary>teacher is going to dictate right now / el profesor va a dictar ahora</summary>
	<ul className='list-inside list-decimal'>	
		<li>
		in spanish, the word cat means gato
		</li>
		<li>
		in spanish, the word dog means perro
		</li>
		<li>
		in spanish, the word horse means caballo
		</li>
		<li>
		my name is gabriel
		</li>
		<li>
		your name is michael
		</li>
</ul>
		</details>
	</>);

}

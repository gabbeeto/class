import {Word, TinyExplanation, ExplanationContainer} from './../explanationUtilities'
import alphabet from './alphabet.jpg'

export function FirstClass(){
return (<> 
<h2 className='textSize-3'>Hey fellow students!!</h2>

	<Word word={[(<>Welcome</>), (<>bienvenido</>)]}/>
	<Word word={[(<>Hello</>), (<>Hola</>)]}/>
	<Word word={[(<>Student</>), (<>Estudiante</>)]}/>
	<Word word={[(<>Teacher</>), (<>Enseñador/profesor/maestro</>)]}/>



	<Word word={[(<>Hi</>), (<>Hola<span className='textSize-5'>/holis</span></>)]}/>
	<ExplanationContainer  explanation={<><span className='text-sky-300'>Hi</span> es como <span className='text-sky-300'>hello</span> pero <span className='text-sky-300'>hi</span> es usado con gente cercana o gente de confianza mientras mientras que <span className='text-sky-300'>hello</span> es un poco más formal</>} example={(<>hi mom!</>)} / >

	<Word word={[(<>yes</>), (<>sí</>)]}/>

	<Word word={[(<>spelling</>), (<>deletro</>)]}/>
	<img src={alphabet} className='w-full p-2 rounded-2xl' alt="alphabet"/>

	<Word word={[(<>What's the spelling of [word]?</>), (<>Cual es el deletro de [palabra en inglés]? </>)]}/>


	<Word word={[(<>how is [word] spelled?</>), (<>como se deletrea [palabra en inglés]? / como se escribe [palabra] </>)]}/>

	<Word word={[(<>What's the spelling of banana?</>), (<>Como se escribe banana?</>)]}/>


	<Word word={[(<>banana is spelled b-a-n-a-n-a!</>), (<>!Banana se escribe b-a-n-a-n-a!</>)]}/>

<details>
<summary>teacher is going to dictate right now / el profesor va a dictar ahora</summary>
		<p>
		<Word word={[(<>
		hi, my name is gabriel. I am an English teacher. My favorite color is similar to blue but it is actually called turquoise
</>), (<>hola, mi nombre es gabriel. Soy un profesor de Ingles. Mi color favorito es similar al azul pero en realidad se llama turquesa</>)]}/>
		</p>
		</details>
	</>);

}

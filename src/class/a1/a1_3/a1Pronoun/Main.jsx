import {ListOfWords} from './../../../list'
import {Word, TinyExplanation, ExplanationContainer} from './../../../explanationUtilities'



export function A1Pronoun(){
return (<>
	<TinyExplanation title={['pronoun','pronombre']} explanation={['special word that substitutes another noun in a simplified way','palabra especial que substituye otro sustantivo de una manera simple']} example={(<>
<div>he</div>
<div>él</div>
		</>
	)} / >
 <Word word={['I', 'Yo']}	/>
 <Word word={['You', (<>tú <span className='textSize-5'> / vos</span> </>)]}	/>


	<TinyExplanation title={['verbo','verb']} explanation={['Word describing action or physical condition','Palabra que describe una acción o una condicion fisica']} example={(<>
<div>to love</div>
<div>amar</div>
		</>
	)} / >

 <Word word={[(<><span className='textSize-3'>To</span> hate </>), 'odiar']}	/>

 <Word word={[(<><span className='textSize-3'>To</span> like </>), 'gustar']}	/>



 <Word word={[(<><span className='textSize-3'>To</span> have </>), 'tener']}	/>

<div className='bg-cyan-700 m-1'>
<div className='mx-auto w-80 items-center grid gap-y-10  grid-cols-3'>
<div className='text-green-300'>I</div>
<div className='text-cyan-300'>hate</div>
<div className='text-red-300'>dogs</div>
<div className='text-green-300'>pronoun</div>
<div className='text-cyan-300'>verb</div>
<div className='text-red-300'>noun</div>
<div className='text-green-300'>yo</div>
<div className='text-cyan-300'>odio </div>
<div className='text-red-300'>perros</div>
<div className='text-green-300'>yo</div>
<div className='text-cyan-300'>odio a</div>
<div className='text-red-300'>los perros</div>
	</div>


	</div>

	<ExplanationContainer  explanation={`los verbos en español cambia dependiendo el pronombre `} example={(<><div>yo odi<span className='text-orange-400'>o</span> perros</div> <div>tú odi<span className='text-orange-400'>as</span> perros</div></>)} / >


	<ExplanationContainer  explanation={`en inglés no suelen cambiar(al menos con los pronombres 'I' y 'You')`} example={(<><div>I hate dogs</div> <div>you hate dogs</div></>)} / >


	</>

)
}

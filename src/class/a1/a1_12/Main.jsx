import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'
import familyMemberImg from './familyMember.png'


export function A1_12(){
return (<> 

	<TitleContainer  title={<>possesive pronoun</>} / >
	<Word word={[(<>of</>), (<>de</>)]}/>

	<div className="flex flex-col items-center justify-center text-center gap-2">
	<div>
	<Word word={[(<>my</>), (<>de mi/mi</>)]}/>
	<Word word={[(<>my house</>), (<>casa de mi / mi casa</>)]}/>
	</div>

	<div>
	<Word word={[(<>your</>), (<>de vos/ustedes / tu / sus</>)]}/>
	<Word word={[(<>your house</>), (<>casa de vos / tu casa / sus casa</>)]}/>
	</div>


	<div>
	<Word word={[(<>his</>), (<>de él / su</>)]}/>
	<Word word={[(<>his house</>), (<>casa de él / su casa</>)]}/>
	</div>


	<div>
	<Word word={[(<>her</>), (<>de ella / su</>)]}/>
	<Word word={[(<>her house</>), (<>casa de ella / su casa</>)]}/>
	</div>


	<div>
	<Word word={[(<>its</>), (<>de Eso(sin distancia) / su</>)]}/>
	<Word word={[(<>its house</>), (<>casa de eso / su casa</>)]}/>
	</div>


	<div>
	<Word word={[(<>our</>), (<>de nosotros / nuestra/o </>)]}/>
	<Word word={[(<>our house</>), (<>our house / nuestra casa</>)]}/>
	</div>


	<div>
	<Word word={[(<>their</>), (<>de ellas/ellos / sus </>)]}/>
	<Word word={[(<>their house</>), (<>casa de ellas / sus casas</>)]}/>
	</div>

	</div>



	<ExplanationContainer  explanation={<><span className='text-orange-400'>the house of your cat</span> puede convertirse en <span className='text-blue-400'>your cat's house</span>. </>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
	<div>
		<div>The <span className='text-blue-400'>airplane</span> of <span className='text-orange-400'>your dog</span></div>
		<div> <span className='text-orange-400'>your dog</span>'s <span className='text-blue-400'>airplane</span> </div>
	</div>

	<div>
		<div>The <span className='text-blue-400'>fish</span> of <span className='text-orange-400'>our dog</span></div>
		<div> <span className='text-orange-400'>your dog</span>'s <span className='text-blue-400'>fish</span> </div>
	</div>


	<div>
		<div>The <span className='text-blue-400'>house</span> of <span className='text-orange-400'>Maria</span></div>
		<div> <span className='text-orange-400'>Maria</span>'s <span className='text-blue-400'>house</span> </div>
	</div>


	<div>
		<div>The <span className='text-blue-400'>pen</span> of <span className='text-orange-400'>Marco</span></div>
		<div> <span className='text-orange-400'>Marco</span>'s <span className='text-blue-400'>pen</span> </div>
	</div>


			</div>)} / >

	<ExplanationContainer  explanation={<>Pero cuando el poseedor es un objeto, <span className='text-orange-400'>'s</span> no es agregado. Entonces palabra como  <span className='text-blue-400'>The House of Minecraft</span>  pueden ser transformado en <span className='text-orange-400'>The Minecraft House</span> </>} example={(<div className="flex gap-2 flex-col items-center justify-center text-center">

	<div>
		<div>The <span className='text-blue-400'>table</span> of the <span className='text-orange-400'>house</span></div>
		<div>The <span className='text-orange-400'>house</span> <span className='text-blue-400'>table</span> </div>
	</div>


	<div>
		<div>the <span className='text-blue-400'>character</span> of <span className='text-orange-400'>roblox</span> of  <span className='text-purple-400'>me</span></div>
		<div> <span className='text-purple-400'>my</span>  <span className='text-orange-400'>roblox</span> <span className='text-blue-400'>character</span> </div>
	</div>

	</div>)} / >

	<TitleContainer  title={<>family members</>} / >
	<div className="flex flex-col items-center justify-center text-center gap-2">
	<div>
	<Word word={[(<>parent</>), (<>padre/madre</>)]}/>
	<Word word={[(<>father</>), (<>padre</>)]}/>
	<Word word={[(<>mother</>), (<>madre</>)]}/>
	</div>

	<div>
	<Word word={[(<>sibling</>), (<>hermano/a</>)]}/>
	<Word word={[(<>sister</>), (<>hermana</>)]}/>
	<Word word={[(<>brother</>), (<>hermano</>)]}/>
	</div>

	<div>
	<Word word={[(<>spouse</>), (<>esposa/marido</>)]}/>
	<Word word={[(<>wife</>), (<>esposa</>)]}/>
	<Word word={[(<>husband</>), (<>marido</>)]}/>
	</div>
	</div>

	<img className='p-2 rounded-2xl' src={familyMemberImg} alt="family member"/>

	

	<Word word={[(<><span className="textSize-3">To</span> give</>), (<>dar</>)]}/>
	<Word word={[(<>christmas</>), (<>navidad</>)]}/>
	<TitleContainer  title={<>exercise</>} / >

	<ListOfTest list={
		[
		[(<>"my cat's house is not good "</>), (<>la casa de mi gato no es bueno</>)],
		[(<>"your sister's brother is your brother"</>), (<>el hermano de tu hermana es tu hermano</>)],
		[(<>I like to read on computers but their text is not visible for me</>), (<>me gusta leer en la computadora pero sus textos no son visible para mi</>)],
		[(<>"I don't like your parents. their vocabulary are embarrasing"</>), (<>no me gusta tus padres. el vocabulario de ellos no es bueno</>)],
		[(<>her brother-in-law is really nice</>), (<>el cuñado de ella es agradable</>)],
		[(<>his aunt is confused</>), (<>la tia de el está confundida</>)],
		[(<>"our house is good because it's purple"</>), (<>nuestra casa es buena porque es violeta</>)],
		[(<>"I like green computers but I don't like this computer because its mouse is not green"</>), (<>me gustan las computadoras verdes pero no me gusta esta porque su mouse no es verde</>)],
		[(<>my grandmother gives cookies to her granddaughter</>), (<>mi abuela da galletitas a su nieta</>)],
		[(<>my nephew is not confused, he is embarrased</>), (<>mi sobrino no está confundido, el está avergonzado</>)],
		[(<>"her aunt doesn't want to eat cookies"</>), (<>la tia de ella no quiere comer galletita</>)],
		[(<>his niece is angry</>), (<>la sobrina de él está enojado</>)],
		[(<>our cousins are in the forest</>), (<>nuestros primos están en el bosque</>)],
		[(<>my great-grandmother is happy</>), (<>my bisa-abuela está feliz</>)],
		[(<>giving sugar to great-great grandmother is not ok</>), (<>dar azucar a la tatara abuela no está bien</>)],
		[(<>my uncle is sad</>), (<>mi tio está triste</>)],
		]
	} / >
	
	</>);
}

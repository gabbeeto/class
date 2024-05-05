import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'


export function A1_4(){
return (<>

	<TitleContainer  title={(<>Verbs</>)}  / >
	<Word word={[(<><span className="textSize-3">To</span> Drink</>), (<>Beber</>)]}/>


	<Word word={[(<><span className="textSize-3">To</span> Eat</>), (<>Comer</>)]}/>

<TitleContainer  title={<>Pronoun</>} / >

<Word word={[(<>He</>), (<>Él</>)]}/>
<Word word={[(<>She</>), (<>Ella</>)]}/>

<ExplanationContainer  explanation={<>En español, los pronombres <span className='text-orange-400'>él</span>  y <span className='text-orange-400'>ella</span>  se usan para remplazar a <span className='text-blue-400'>hombres</span> o <span className='text-blue-400'>mujer</span>  cuando hablamos en tercera persona. Especialmente cuando ya sabemos de quien hablamos</>} example={(<>

	<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span> <span className='text-blue-400'>Maria</span> cocina pollo</span><span> <span className='text-orange-400'>Ella</span>  cocina pollo</span></div>
	<div className='flex flex-col bg-orange-700 rounded-2xl p-2'><span> <span className='text-blue-400'>Luis</span> asesina patos</span><span> <span className='text-orange-400'>Él</span>  asesina patos</span></div>
	<div className='flex flex-col bg-red-700 rounded-2xl p-2'><span>A <span className='text-blue-400'>rosalina</span>  le gusta mario bros pero a <span className='text-blue-400'>jorge</span>  le gusta el tetris</span><span>a <span className='text-orange-400'>ella</span>  le gusta mario bros pero a <span className='text-orange-400'>él</span> le gusta el tetris</span></div>
	</>)} / >

	<ExplanationContainer  explanation={<>En inglés, <span className='text-orange-400'>he</span> y  <span className='text-orange-400'>she</span> funcionan igual</>} example={(<>
<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span><span className='text-blue-400'>Charlie</span>  likes chicken</span><span><span className='text-orange-400'>He</span> likes chicken</span></div>
<div className='flex flex-col bg-orange-700 rounded-2xl p-2'><span> <span className='text-blue-400'>kate</span> drinks water</span><span> <span className='text-orange-400'>she</span>  drinks water</span></div>
<div className='flex flex-col bg-red-700 rounded-2xl p-2'><span> <span className='text-blue-400'>Gabriel</span>  likes Pokemon but <span className='text-blue-400'>Rosalina</span>  likes Minecraft</span><span> <span className='text-orange-400'>He</span>  likes Pokemon but <span className='text-orange-400'>She </span> likes Minecraft</span></div>
		</>)} / >

	<ExplanationContainer  explanation={<>nota como cuando hablamos en 3ra persona en inglés le agregamos <span className='text-sky-400'>s</span> . Quiero que veas como el <span className='text-orange-400'>have</span>  se transforma en <span className='text-orange-400'>has</span> tambien</>} example={(<>

		<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span>I drink milk</span><span>she drink<span className='text-sky-400'>s</span> milk</span></div>


		<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span>I <span className='text-orange-400'> have</span> a dog</span><span>he <span className='text-orange-400'>has</span>  a dog</span></div>


		<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span>You hate Minecraft</span><span>he hate<span className='text-sky-400'>s</span> Minecraft</span></div>
</>)} / >

	<Word word={[(<>The</>), (<>El/La/Los/Las</>)]}/>
	<Word word={[(<><span className='text-orange-400'>The</span>  cat</>), (<><span className='text-orange-400'>El</span> gato</>)]}/>
	<Word word={[(<><span className='text-orange-400'>The</span> cow</>), (<><span className='text-orange-400'>La</span> vaca</>)]}/>
	<Word word={[(<><span className='text-orange-400'>The</span> dogs</>), (<><span className='text-orange-400'>Los</span>  perros</>)]}/>
	<Word word={[(<><span className='text-orange-400'>The</span> dogs</>), (<><span className='text-orange-400'>Las</span> perras</>)]}/>
	<Word word={[(<><span className='text-orange-400'>The</span> fish</>), (<><span className='text-orange-400'>Él</span> pez</>)]}/>
	<Word word={[(<><span className='text-orange-400'>The</span> fish</>), (<><span className='text-orange-400'>Los</span> peces</>)]}/>

	<ExplanationContainer  explanation={<>cuando hablamos de algo especifico usamos <span className='text-orange-400'>the</span></>} example={(<div className="flex flex-col items-center justify-center text-center">
		<div>
			<span className='text-orange-400'>the</span> cats eat banana(me estoy refiriendo a unos tipos de gatos en especifico, no todos)
		</div>
		<div>
			<span className='text-orange-400'>los</span> gatos comen banana
		</div>
	</div>)} / >


	<ExplanationContainer  explanation={<>pero ten en cuenta que cuando hablamos en general, nosotros no usamos usamos <span className='text-orange-400'>the</span> como los articulos en español</>} example={(<div className="flex flex-col items-center justify-center text-center">
		<div>
			 cats eat fish(hablo en general, los gatos comen pescado)
		</div>
		<div>
			<span className='text-orange-400'>los</span> gatos comen pescado
		</div>
	</div>)} / >

	<ListOfTest list={
		[
		[(<>Ella come pizza</>), (<>She eats pizza</>)],
		[(<>I eat banana</>), (<>yo como banana</>)],
		[(<>El gato toma agua</>), (<>The cat drinks water</>)],
		[(<>Los perros toman leche</>), (<>The dogs drink milk</>)],
		[(<>the fish drink water</>), (<>los peces toman agua</>)],
		[(<>Como manzana</>), (<>I eat apple</>)],
		[(<>Él come banana</>), (<>He eats banana</>)],
		[(<>Comes banana</>), (<>You eat banana</>)],
		[(<>El caballo y Maria comen carne</>), (<>The horse and Maria eat meat</>)],
		[(<>Los peces toman té</>), (<>The fish drink tea</>)],
		[(<>Él pez toma té</>), (<>The fish drinks tea</>)],
		[(<>Ella tiene cicuenta autos</>), (<>She has fifty cars</>)],
		[(<>Amo los aviones</>), (<>I love airplanes</>)],
		[(<>Ella ama las motos</>), (<>She loves motorbikes</>)],
		[(<>Odias Minecraft</>), (<>I hate Minecraft</>)],
		[(<>Él odia My Little Pony</>), (<>He hates My Little Pony</>)],
		[(<>tengo empanadas</>), (<>I have empanadas</>)],
		[(<>él tiene empanadas</>), (<>he has empanadas</>)],
		[(<>Mario tiene arroz</>), (<>Mario has empanadas</>)],
		[(<>Maria y Luis tienen pan</>), (<>Mario has empanadas</>)],
		[(<>the fish eats rice</>), (<>el pez come arroz</>)],
		[(<>A mí me gustan los huevos</>), (<>I like eggs</>)],
		[(<>al cerdo amarillo le gusta el café</>), (<>the yellow pig likes coffe</>)],
		[(<>a la mosca le gusta el queso</>), (<>the fly likes cheese</>)],
		[(<>las papas y los tomates</>), (<>the potatoes and the tomatoes</>)],
		[(<>al caballo le gusta el fideo</>), (<>the horse likes noodles</>)],
		]
	} / >
</>);

	

}


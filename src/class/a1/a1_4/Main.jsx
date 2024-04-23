import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'


export function A1_4(){
return (<>

	<TitleContainer  title={(<>Verbs</>)}  / >
	<Word word={[(<><span className="textSize-3">To</span> Drink</>), (<>Beber</>)]}/>


	<Word word={[(<><span className="textSize-3">To</span> Eat</>), (<>Comer</>)]}/>

<TitleContainer  title={<>Pronoun</>} / >

<Word word={[(<>He</>), (<>Él</>)]}/>
<Word word={[(<>She</>), (<>Ella</>)]}/>

<ExplanationContainer  explanation={<>En español, los pronombres 'él' y 'ella' se usan para remplazar a hombres o mujer cuando hablamos en tercera persona. Especialmente cuando ya sabemos de quien hablamos</>} example={(<>

	<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span>Maria cocina pollo</span><span>Ella cocina pollo</span></div>
	<div className='flex flex-col bg-orange-700 rounded-2xl p-2'><span>Luis asesina patos</span><span>Él asesina patos</span></div>
	<div className='flex flex-col bg-red-700 rounded-2xl p-2'><span>A rosalina le gusta mario bros pero a jorge le gusta el tetris</span><span>a ella le gusta mario bros pero a él le gusta el tetris</span></div>
	</>)} / >

	<ExplanationContainer  explanation={<>En inglés, 'he' y 'she' funcionan igual</>} example={(<>
<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span>Charlie likes chicken</span><span>He likes chicken</span></div>
<div className='flex flex-col bg-orange-700 rounded-2xl p-2'><span>kate drinks water</span><span>she drinks water</span></div>
<div className='flex flex-col bg-red-700 rounded-2xl p-2'><span>Gabriel likes Pokemon but Rosalina likes Minecraft</span>He likes Pokemon but She likes Minecraft<span></span></div>
		</>)} / >

	<ExplanationContainer  explanation={<>nota como cuando hablamos en 3ra persona en inglés le agregamos 's'. Quiero que veas como el 'have' se transforma en 'has' tambien</>} example={(<>

		<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span>I drink milk</span><span>she drink<span className='text-emerald-200'>s</span> milk</span></div>


		<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span>I have a dog</span><span>he has a dog</span></div>


		<div className='flex flex-col bg-sky-700 rounded-2xl p-2'><span>You hate Minecraft</span><span>he hate<span className='text-emerald-200'>s</span> Minecraft</span></div>
</>)} / >

	<Word word={[(<>The</>), (<>El/La/Los/Las</>)]}/>
	<Word word={[(<>The cat</>), (<>El gato</>)]}/>
	<Word word={[(<>The cow</>), (<>La vaca</>)]}/>
	<Word word={[(<>The dogs</>), (<>Los perros</>)]}/>
	<Word word={[(<>The dogs</>), (<>Las perras</>)]}/>
	<Word word={[(<>The fish</>), (<>Él pez</>)]}/>
	<Word word={[(<>The fish</>), (<>Los peces</>)]}/>

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

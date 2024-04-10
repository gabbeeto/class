import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'


export function A1_4(){
return (<>

	<TitleContainer  title={(<>Verbs</>)}  / >
	<Word word={[(<><span classname="textSize-3">To</span> Drink</>), (<>Beber</>)]}/>


	<Word word={[(<><span classname="textSize-3">To</span> Eat</>), (<>Comer</>)]}/>

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

	<Word word={[(<>the</>), (<>El/La/Los/Las</>)]}/>
	<Word word={[(<>the cat</>), (<>el gato</>)]}/>
	<Word word={[(<>the cow</>), (<>la vaca</>)]}/>
	<Word word={[(<>the dogs</>), (<>los perros</>)]}/>
	<Word word={[(<>the dogs</>), (<>las perras</>)]}/>
	<Word word={[(<>the fish</>), (<>él pez</>)]}/>
	<Word word={[(<>the fish</>), (<>los peces</>)]}/>

	<ListOfTest list={
		[
		[(<>ella come pizza</>), (<>she eats pizza</>)],
		[(<>el gato toma agua</>), (<>the cat drinks water</>)],
		[(<>los perros toman leche</>), (<>the dogs drink milk</>)],
		[(<>como manzana</>), (<>I eat apple</>)],
		[(<>él come banana</>), (<>he eats banana</>)],
		[(<>comes banana</>), (<>you eat banana</>)],
		[(<>el caballo y Maria comen carne</>), (<>the horse and Maria eat meat</>)],
		[(<>los peces toman té</>), (<>the fish drink tea</>)],
		[(<>él pez toma té</>), (<>the fish drinks tea</>)],
		[(<>ella tiene 50 autos</>), (<>she has 50 cars</>)],
		[(<>amo los aviones</>), (<>I love airplanes</>)],
		[(<>ella ama las motos</>), (<>she loves motorbikes</>)],
		[(<>odias Minecraft</>), (<>I hate Minecraft</>)],
		[(<>él odia My Little Pony</>), (<>he hates My Little Pony</>)],
		]
	} / >
</>);

	

}


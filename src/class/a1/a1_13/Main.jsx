import { Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest } from './../../explanationUtilities'
import adverbOfFrequency from './adverbOfFrequency.png'


export function A1_13() {
	return (<>
		<TitleContainer  title={<>words that will come in handy later on</>} / >
		<Word word={[(<>to show</>), (<>mostrar</>)]} />
		<Word word={[(<>after</>), (<>despues de</>)]} />
		<Word word={[(<>before</>), (<>antes de</>)]} />
		<Word word={[(<>to be about to</>), (<>estar apunto de</>)]} />
		<Word word={[(<>to buy</>), (<>comprar</>)]} />

		<TitleContainer  title={<>the adverbs that end with -ly</>} / >

		<Word word={[(<>in a <span className='text-blue-400'>beautiful</span> way</>), (<>de manera/modo hermoso</>)]}/>

		<Word word={[(<>in a <span className='text-blue-400'>beautiful</span> way</>), (<><span className='text-blue-400'>beautiful</span>ly</>)]}/>
		<Word word={[(<>in a <span className='text-blue-400'>confusing</span> way</>), (<><span className='text-blue-400'>confusing</span>ly</>)]}/>
		<Word word={[(<>in a <span className='text-blue-400'>slow</span> way</>), (<><span className='text-blue-400'>slow</span>ly</>)]}/>
		<Word word={[(<>he walks in a <span className='text-blue-400'>slow</span> way</>), (<>he <span className='text-blue-400'>slow</span>ly walks</>)]}/>
		<Word word={[(<>-ly</>), (<>-mente</>)]}/>
		<Word word={[(<>sad<span className='text-blue-400'>ly</span></>), (<>triste<span className='text-blue-400'>mente</span></>)]}/>
		<Word word={[(<>slow<span className='text-blue-400'>ly</span></>), (<>lenta<span className='text-blue-400'>mente</span></>)]}/>

		<TitleContainer title={<>adverb of frequency</>} />
		<div>Adverbs of frequency show you how frequent our verbs is ocurring</div>
		<img src={adverbOfFrequency} alt="adverbs of frequency" className='p-2 rounded-xl' />

		<Word word={[(<>time</>), (<>tiempo</>)]} />
		<Word word={[(<>times</>), (<>veces</>)]} />
		<Word word={[(<>never</>), (<>nunca(0% of the times)</>)]} />
		<Word word={[(<>sometimes</>), (<>aveces(50% of the times)</>)]} />
		<Word word={[(<>often</>), (<>a menudo(70% of the times)</>)]} />
		<Word word={[(<>always</>), (<>siempre(100% of the times)</>)]} />
		<TitleContainer  title={<>adverb order</>} / >

		<ExplanationContainer explanation={<>for normal verbs, you use <span className='text-orange-400'>the adverb </span> after <span className='text-blue-400'>the noun</span> and before <span className='text-cyan-400'>the verb</span></>} example={(<div className="flex flex-col items-center justify-center gap-2 text-center">
			<div>
				<div> <span className='text-blue-400'>you</span> <span className='text-orange-400'>often</span> <span className='text-cyan-400'>create</span>  a Minecraft house</div>
				<div> tú a menudo creas una casa de Minecraft</div>
			</div>


			<div>
				<div> <span className='text-blue-400'>he</span> <span className='text-orange-400'>sometimes</span> <span className='text-cyan-400'>eats</span>  carrot</div>
				<div> el aveces come zanahoria</div>
			</div>

		</div>)} />


		<ExplanationContainer explanation={<>for special verbs, like verb to be, to can, to must.. You use the <span className='text-orange-400'>the adverb</span> after <span className='text-cyan-400'>the verb</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">


			<div>
				<div> you  <span className='text-cyan-400'>can</span>  <span className='text-orange-400'>never</span> create a Minecraft house</div>
				<div> nunca podes crear una casa de Minecraft</div>
			</div>


			<div>
				<div> he  <span className='text-cyan-400'>is</span>  <span className='text-orange-400'>rarely</span> happy</div>
				<div> él raramente es  feliz</div>
			</div>

		</div>)} />


		<ExplanationContainer explanation={<>You can put <span className='text-orange-400'>the adverb</span> at the start or end of the sentence for emphasis</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
			<div>
				<div><span className='text-orange-400'>sometimes</span> I go to school</div>
				<div>aveces voy a la escuela</div>
			</div>
			<div>
				<div>I go to university <span className='text-orange-400'>generally</span></div>
				<div>voy a la universidad generalmente</div>
			</div>

		</div>)} />


		<TitleContainer  title={<>exercises</>} / >
		<ListOfTest list={
			[
			[(<>aveces, voy a mi casa</>), (<>sometimes, I go to my house</>)],
			[(<>we always have to eat fruits</>), (<>siempre tenemos que comer frutas</>)],
			[(<>I often hate it when we have to go to buy groceries in the grocery store</>), (<>a menudo odio cuando tenemos que ir a comprar comestibles en la tienda de comestibles</>)],
			[(<>I rarely eat ice cream in the butcher shop</>), (<>raramente como helado en la carniceria</>)],
			[(<>unfortunately, the supermarket doesn't have car toys</>), (<>desafortunadamente, el supermercado no tiene juguetes de auto</>)],
			[(<>he can occasionally kill enemies on Minecraft</>), (<>él ocacionalmente puede matar enemigos en Minecraft</>)],
			[(<>I forget to turn on the television sometimes</>), (<>me olvido de prender la television aveces</>)],
			[(<>you're seldom happy</>), (<>raramente estás feliz</>)],
			[(<>generally, I can play videogames</>), (<>generalmente, puedo jugar videojuegos</>)],
			[(<>they're usually happy with the results</>), (<>usualmente están feliz con los resultados</>)],
			[(<>she doesn't go to the produce store to buy oranges</>), (<>ella no va a la verduleria para comprar naranja</>)],
			[(<>this dog is not going to get a cut in the barber shop</>), (<>este perro no va a obtener un corte en la barberia</>)],
			[(<>you must literally be a superhero</>), (<>literalmente debes ser un super heroe</>)],
			[(<>the world is slowly about to die</>), (<>lentamente el mundo está a punto de morir</>)],
			[(<>loving the supermarket does not have to be weird</>), (<>amar el supermercado no tiene que ser raro</>)],
			[(<>she needs to go to the hair salon</>), (<>ella necesita ir a la peluqueria</>)],
			[(<>the bakery bread is fantastic</>), (<>el pan de la panaderia es fantastico</>)],
			]
} / >
	</>);
}

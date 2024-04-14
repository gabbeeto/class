import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

export function A1_8(){
return (<> 
<TitleContainer  title={<>infinitive in Spanish</>} / >
<ExplanationContainer  explanation={<>El infitivo en Español es cuando los verbos terminan en -ir, -ar -er </>} example={(<>
<div>Mat<span className='text-red-400'>ar</span></div>
<div>Mov<span className='text-red-400'>er</span></div>
<div>Sonre<span className='text-red-400'>ir</span></div>
	</>)} / >
<ExplanationContainer  explanation={<>Los verbos que están conjugados por un pronombre, ese verbo no está en infinitivo</>} example={(<><div>Yo mato</div><div>Tú mueves</div><div>Ella sonrie</div></>)} / >

<ExplanationContainer  explanation={<>Aunque pueden haber  <span className='text-red-400'> verbos que no andan en infitivo</span> mesclado con <span className='text-sky-400'>verbos en infinitivo</span></>} example={(<>
<div><span className='text-red-400'>quiero</span> <span className='text-sky-400'>matar</span></div>
<div><span className='text-red-400'>necesito</span> <span className='text-sky-400'>mover</span></div>
<div><span className='text-red-400'>espero</span> <span className='text-sky-400'>sonreir</span></div>
</>)} / >
<TitleContainer  title={<>infinitive in English</>} / >
	<ExplanationContainer  explanation={<>in inglés, cuando usas el infinitivo. deberias agregar 'to' atras del verbo</>} example={(<>
		<div>you have <span className='text-sky-400'>to eat</span> rice</div>
		<div>tienes que <span className='text-sky-400'>comer</span> arroz</div>
		</>)} / >


	<ExplanationContainer  explanation={<>Hay 2 tipos de excepciones, la primera son verbos como 'to can' o 'to must' or 'to may'</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
		<div>
		<div>you can <span className='text-sky-400'>eat</span> rice</div>
		<div>puedes <span className='text-sky-400'>comer</span> arroz</div>
</div>

		<div>
		<div>you must <span className='text-sky-400'>eat</span> rice</div>
		<div>debes <span className='text-sky-400'>comer</span> arroz</div>
</div>
		</div>)} / >


	<ExplanationContainer  explanation={<>pero cuando está al principio, para usar el infinitivo, tenés que agregar 'ing' al verbo </>} example={(<>
		<div><span className='text-sky-400'>eating</span> rice is cool</div>
		<div><span className='text-sky-400'>comer</span> arroz es cool</div>
		</>)} / >


<TitleContainer  title={<>new verbs</>} / >
	<Word word={[(<><span className="textSize-3">To</span> need</>), (<>necesitar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> want</>), (<>querer(desear)</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> love</>), (<>amar/encantar/querer(amor)</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> use</>), (<>usar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> sleep</>), (<>dormir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> kill</>), (<>matar</>)]}/>


<TitleContainer  title={<>new words</>} / >
	<Word word={[(<>because</>), (<>porque(respuesta)</>)]}/>

	<TitleContainer  title={<>exercises</>} / >

<ListOfTest list={
	[
	[(<>Necesito dormir en la cama</>), (<> I need to sleep on the bed</>)],
	[(<>you can drink milk</>), (<>podés tomar leche</>)],
	[(<>puedes comer en la cama</>), (<> you can eat on the bed</>)],
	[(<>Quiero tomar agua</>), (<>I want to drink water</>)],
	[(<>tomar leche es cool</>), (<>drinking milk is cool</>)],
	[(<>this car needs water</>), (<>este auto necesita agua</>)],
	[(<>he is happy because he likes toys</>), (<>él está feliz porque a él le gustan los juguetes</>)],
	[(<>I need to use the television</>), (<>necesito usar la television</>)],
	[(<>she wants to go the forest</>), (<>ella quiere ir al bosque</>)],
	[(<>you need to be happy</>), (<> necesitas estar feliz</>)],
	[(<>I love to use the computer</>), (<>amo usar la computadora</>)],
	[(<>matar perros es triste</>), (<>killing dogs is sad</>)],
	[(<>I want to escape this place</>), (<>me quiero escapar de este lugar</>)],
	[(<>the dogs wants the phone</>), (<>el perro quiere el celu</>)],
	[(<>quiero pescado</>), (<>I want fish</>)],
	[(<>ella quiere comer pescado</>), (<>she wants to eat fish</>)],
	[(<>I love the green window</>), (<>me encanta la ventana verde</>)],
	[(<>I like the purple toy</>), (<>me gusta el juguete purpura</>)],
	[(<>debes comer fish</>), (<> you must eat fish</>)],
	[(<>odio usar la silla amarilla</>), (<>I hate to use the yellow chair</>)],
	[(<>quiero usar el celu</>), (<>I want to use the phone</>)],
	[(<>you want to walk on the sideways</>), (<>ustedes quieren caminar en la vereda</>)],
	[(<>I must use the computer</>), (<>debes usar la computadora</>)],
	[(<>the bathroom needs to have a toilet and a bathtub</>), (<>el baño necesita tener un inodoro y una bañera</>)],
	[(<>la cocina tiene tres mesas</>), (<>the kitchen has three tables</>)],
	[(<>Maria wants to drive a car on the highway</>), (<>Maria quiere manejar un auto en el autopista</>)],
	[(<>odio las heladeras grises. las heladeras tienen que ser purpura</>), (<>I hate gray fridges. the friges have to be purple</>)],
	[(<>she is happy because she likes brown door</>), (<>ella es feliz porque a ella le gustan las puertas marrones.</>)],
	]
} / >

	</>);


}

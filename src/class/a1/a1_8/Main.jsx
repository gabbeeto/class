import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'



export function A1_8() {
	return (<>
		<TitleContainer title={<>infinitive in Spanish</>} />
		<ExplanationContainer explanation={<>El infitivo en Español es cuando los verbos terminan en -<span className='text-red-400'>ir</span>, -<span className='text-red-400'>ar</span>, -<span className='text-red-400'>er</span>  </>} example={(<>
			<div>Mat<span className='text-red-400'>ar</span></div>
			<div>Mov<span className='text-red-400'>er</span></div>
			<div>Sonre<span className='text-red-400'>ir</span></div>
		</>)} />
		<ExplanationContainer explanation={<>Los verbos que están conjugados por un pronombre, ese verbo no está en infinitivo</>} example={(<><div>Yo mato</div><div>Tú mueves</div><div>Ella sonrie</div></>)} />

		<ExplanationContainer explanation={<>Aunque pueden haber  <span className='text-red-400'> verbos que no andan en infitivo</span> mesclado con <span className='text-sky-400'>verbos en infinitivo</span></>} example={(<>
			<div><span className='text-red-400'>quiero</span> <span className='text-sky-400'>matar</span></div>
			<div><span className='text-red-400'>necesito</span> <span className='text-sky-400'>mover</span></div>
			<div><span className='text-red-400'>espero</span> <span className='text-sky-400'>sonreir</span></div>
		</>)} />
		<TitleContainer title={<>infinitive in English</>} />

		<ExplanationContainer explanation={<>cuando querés usar un verbo en infinitivo en inglés , tenés que agregar <span className='text-orange-400'>ing</span> al verbo </>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div>
				<div><span className='text-purple-400'>eat<span className='text-orange-400'>ing</span></span> rice is cool</div>
				<div><span className='text-purple-400'>comer</span> arroz es cool</div>
			</div>

			<div>
				<div><span className='text-purple-400'>drink<span className='text-orange-400'>ing</span></span> water has to be boring</div>
				<div><span className='text-purple-400'>tomar</span> agua tiene que ser aburrido</div>
			</div>

		</div>)} />

		<ExplanationContainer explanation={<>pero si el infinitivo está despues de un verbo. deberias agregar <span className='text-orange-400'>to</span>  atras del <span className='text-purple-400'>verbo</span> que está en infinitivo en vez de agregar <span className='text-orange-400'>ing</span></>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

			<div>
				<div>you have <span className='text-purple-400'> <span className='text-orange-400'>to</span> eat</span> rice</div>
				<div>tienes que <span className='text-purple-400'>comer</span> arroz</div>
			</div>


			<div>
				<div>she needs<span className='text-purple-400'> <span className='text-orange-400'>to</span> sleep</span> </div>
				<div>ella necesita <span className='text-purple-400'>dormir</span></div>
			</div>


			<div>
				<div>I want <span className='text-purple-400'> <span className='text-orange-400'>to</span> be</span> a superhero </div>
				<div>quiero <span className='text-purple-400'>ser</span> un superheroe</div>
			</div>

		</div>)} />


		<ExplanationContainer explanation={<>si el <span className='text-sky-400'>verbo</span>  que querés usar está despues de Verbos como  <span className='text-purple-400'>to Like</span>, <span className='text-purple-400'>to Love</span> , <span className='text-purple-400'>to Hate</span> o <span className='text-purple-400'>to Prefer</span> podés elejir usar el siguiente <span className='text-sky-400'>verbo</span> con <span className='text-orange-400'>ing</span> o con <span className='text-orange-400'>to</span> a tu gusto
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div>
				<div>I <span className='text-purple-400'>love</span>  <span className='text-sky-400'>eat<span className='text-orange-400'>ing</span></span> spaghetti</div>
				<div>I <span className='text-purple-400'>love</span>  <span className='text-orange-400'>to</span> <span className='text-sky-400'>eat</span> spaghetti</div>
				<div> <span className='text-purple-400'>amo</span>  <span className='text-sky-400'>comer</span> spaghetti</div>
			</div>


			<div>
				<div>you <span className='text-purple-400'>like</span>  <span className='text-sky-400'>rid<span className='text-orange-400'>ing</span></span> a bike</div>
				<div>you <span className='text-purple-400'>like</span>  <span className='text-orange-400'>to</span> <span className='text-sky-400'>ride</span> a bike</div>
				<div> <span className='text-purple-400'>amas</span>  <span className='text-sky-400'>andar</span> en vici</div>
			</div>

		</div>)} />


		<ExplanationContainer explanation={<>si está despues de verbos como <span className='text-purple-400'>to Admit</span>, <span className='text-purple-400'>to Stop</span>, <span className='text-purple-400'>to Give up</span>, <span className='text-purple-400'>to avoid</span>, <span className='text-purple-400'>to deny</span>, <span className='text-purple-400'>to miss</span>, <span className='text-purple-400'>to consider</span>, <span className='text-purple-400'>to deny</span>, <span className='text-purple-400'>to finish</span> o <span className='text-purple-400'>to enjoy</span>.. Tenés que usar el <span className='text-sky-400'> verbo</span> <span className='text-orange-400'>ing</span></>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
			<div>
				<div>she <span className='text-purple-400'>admit</span>s <span className='text-sky-400'>kill<span className='text-orange-400'>ing</span></span> people</div>
				<div>ella <span className='text-purple-400'>admite</span> <span className='text-sky-400'>matar</span> a las personas</div>
			</div>

			<div>
				<div>I <span className='text-purple-400'>avoid</span> <span className='text-sky-400'>talk<span className='text-orange-400'>ing</span></span> to people</div>
				<div><span className='text-purple-400'>evito</span> <span className='text-sky-400'>hablar</span> a la gente</div>
			</div>


			<div>
				<div>we <span className='text-purple-400'>deny</span> <span className='text-sky-400'>kill<span className='text-orange-400'>ing</span></span> is bad</div>
				<div><span className='text-purple-400'>negamos</span> que <span className='text-sky-400'>matar</span> es malo</div>
			</div>


			<div>
				<div>they <span className='text-purple-400'>stop</span> <span className='text-sky-400'>send<span className='text-orange-400'>ing</span></span> messages when they see this</div>
				<div>ellas <span className='text-purple-400'>paran</span> de <span className='text-sky-400'>mandar</span> mensajes cuando ellas ven esto</div>
			</div>


			<div>
				<div>these cats <span className='text-purple-400'>enjoy</span> <span className='text-sky-400'>eat<span className='text-orange-400'>ing</span></span> cheese</div>
				<div>estos gatos <span className='text-purple-400'>disfrutan</span> de <span className='text-sky-400'>comer</span> queso</div>
			</div>


			<div>
				<div>I  <span className='text-purple-400'>miss</span> <span className='text-sky-400'>play<span className='text-orange-400'>ing</span></span> Minecraft</div>
				<div><span className='text-purple-400'>extraño</span> <span className='text-sky-400'>jugar</span> Minecraft</div>
			</div>


			<div>
				<div>I  <span className='text-purple-400'>finish</span> <span className='text-sky-400'>build<span className='text-orange-400'>ing</span></span> houses</div>
				<div><span className='text-purple-400'>termino</span> de <span className='text-sky-400'>contruir</span> casas</div>
			</div>


			<div>
				<div>he <span className='text-purple-400'>give</span>s <span className='text-purple-400'>up</span> on <span className='text-sky-400'>creat<span className='text-orange-400'>ing</span></span>  websites</div>
				<div> él <span className='text-purple-400'>se rinde</span> de <span className='text-sky-400'>crear</span> sitios web</div>
			</div>

		</div>)} />


		<ExplanationContainer explanation={<>cuando está despues de verbos como <span className='text-sky-400'>to can</span>  o <span className='text-sky-400'>to must</span> or <span className='text-sky-400'>to may</span>... No se agrega el <span className='text-orange-400'>to</span> ni el <span className='text-orange-400'>ing</span> al  <span className='text-purple-400'>verbo</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
			<div>
				<div>you <span className='text-sky-400'>can</span> <span className='text-purple-400'>eat</span> rice</div>
				<div> <span className='text-sky-400'>puedes</span> <span className='text-purple-400'>comer</span> arroz</div>
			</div>
			<div>
				<div>you <span className='text-sky-400'>must</span>  <span className='text-purple-400'>eat</span> rice</div>
				<div> <span className='text-sky-400'>debes</span>  <span className='text-purple-400'>comer</span> arroz</div>
			</div>
		</div>)} />




		<TitleContainer title={<>new verbs</>} />
		<Word word={[(<><span className="textSize-3">To</span> need</>), (<>necesitar</>)]} />
		<Word word={[(<><span className="textSize-3">To</span> want</>), (<>querer(desear)</>)]} />
		<Word word={[(<><span className="textSize-3">To</span> love</>), (<>amar/encantar/querer(amor)</>)]} />
		<Word word={[(<><span className="textSize-3">To</span> use</>), (<>usar</>)]} />
		<Word word={[(<><span className="textSize-3">To</span> sleep</>), (<>dormir</>)]} />
		<Word word={[(<><span className="textSize-3">To</span> kill</>), (<>matar</>)]} />


		<TitleContainer title={<>new words</>} />
		<Word word={[(<>because</>), (<>porque(respuesta)</>)]} />

		<TitleContainer title={<>exercises</>} />

		<ListOfTest list={
			[
				[(<>Necesito dormir en la cama</>), (<> I need to sleep on the bed</>)],
				[(<>you can drink milk</>), (<>podés tomar leche</>)],
				[(<>puedes comer en la cama</>), (<> you can eat on the bed</>)],
				[(<>Quiero tomar agua</>), (<>I want to drink water</>)],
				[(<>she wants to run </>), (<>ella quiere correr</>)],
				[(<>she can run </>), (<>ella puede correr</>)],
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
				[(<>el quiere caminar</>), (<>he wants to walk</>)],
				[(<>el puede caminar</>), (<>he can walk</>)],
				[(<>Maria wants to drive a car on the highway</>), (<>Maria quiere manejar un auto en el autopista</>)],
				[(<>odio las heladeras grises. las heladeras tienen que ser purpura</>), (<>I hate gray fridges. the friges have to be purple</>)],
				[(<>she is happy because she likes brown door</>), (<>ella es feliz porque a ella le gustan las puertas marrones.</>)],
			]
		} />

	</>);


}

import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest, TinyExplanationContainer} from './../../explanationUtilities'

export function A1_16() {
	return (<>
		<TitleContainer title={<> <span className='text-red-400'>present continuous</span>  vs <span className='text-amber-400'>present simple</span>  in spanish</>} />
		<TinyExplanationContainer explanation={<div className="flex flex-col items-center justify-center text-center gap-4">


			<div className="flex flex-col items-center justify-center text-center">
				<span className='text-red-400'>estoy matando</span>
				<span className='text-amber-400'>yo mato</span>
			</div>


			<div className="flex flex-col items-center justify-center text-center">
				<span className='text-red-400'>ella está cocinando?</span>
				<span className='text-amber-400'>ella cocina?</span>
			</div>


			<div className="flex flex-col items-center justify-center text-center">
				<span className='text-red-400'>él no está jugando a la pelota</span>
				<span className='text-amber-400'>él no juega a la pelota</span>
			</div>

		</div>} />

		<ExplanationContainer explanation={<>you only know how present simple works</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div className="flex flex-col items-center justify-center text-center">
				<div>yo mato</div>
				<div>I kill</div>
			</div>


			<div className="flex flex-col items-center justify-center text-center">
				<span >ella cocina?</span>
				<span >does she cook?</span>
			</div>


			<div className="flex flex-col items-center justify-center text-center">
				<span >él no juega a la pelota</span>
				<span >he doesn't play football</span>
			</div>

		</div>)} />

		<TitleContainer title={<>present continuous is easy if you know verb to be</>} />
		<ExplanationContainer explanation={<>in order for you to use present continuous you have to add <span className='text-purple-400'>the pronoun</span> + <span className='text-sky-400'>the verb to be</span> + <span className='text-red-400'>main verb</span> + <span className='text-amber-400'>ing</span></>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
			<div>
				<div>
					<span className='text-purple-400'>she</span><span className='text-sky-400'>'s</span> <span className='text-red-400'>kill</span><span className='text-amber-400'>ing</span> cows
				</div>

				<div>
					<span className='text-purple-400'>ella</span><span className='text-sky-400'> está</span> <span className='text-red-400'>mata</span><span className='text-amber-400'>ando</span> las vacas
				</div>
			</div>



			<div>
				<div>
					<span className='text-purple-400'>you</span><span className='text-sky-400'> are</span> <span className='text-red-400'>cook</span><span className='text-amber-400'>ing</span> better than me
				</div>
				<div>
					<span className='text-purple-400'>vos</span><span className='text-sky-400'> estás</span> <span className='text-red-400'>cocin</span><span className='text-amber-400'>ando</span> mejor que yo
				</div>
			</div>



			<div>
				<div>
					<span className='text-purple-400'>he</span><span className='text-sky-400'> is</span> <span className='text-red-400'>sleep</span><span className='text-amber-400'>ing</span> on the bed
				</div>
				<div>
					<span className='text-purple-400'>él</span><span className='text-sky-400'> está</span> <span className='text-red-400'>durmi</span><span className='text-amber-400'>endo</span> en la cama
				</div>
			</div>

		</div>)} />


		<ExplanationContainer explanation={<>

			making questions and negating in present continuous is the same as the <span className='text-sky-400'>verb to be</span>
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div>
				<div> you <span className='text-sky-400'>are not</span> killing enough cows </div>
				<div> vos <span className='text-sky-400'>no estás</span> matando suficientes vacas </div>
			</div>

			<div>
				<div>  <span className='text-sky-400'>are </span> you my student?</div>
				<div>  <span className='text-sky-400'>erés </span> tú mi estudiante?</div>
			</div>


		</div>)} />

		<TitleContainer title={<>when to use <span className='text-sky-400'>present simple</span> or <span className='text-red-400'>present continuous</span> </>} />

		<TinyExplanationContainer explanation={<div className="flex flex-col items-center justify-center text-center"> <span className='text-sky-400'>we do not eat banana</span> or <span className='text-red-400'>we are not eating banana</span> ??? </div>} />

		<ExplanationContainer explanation={<>we use <span className='text-sky-400'>present simple</span>  when we talk about Things that are always true</>} example={(<div className="flex flex-col items-center justify-center text-center">
			<div>Water boils at 100 degrees</div>
			<div>el agua hierbe a los 100 grados</div>
		</div>)} />


		<Word word={[(<><span className="textSize-3">To</span> happen</>), (<>suceder/pasar</>)]} />

		<ExplanationContainer explanation={<>we use <span className='text-red-400'>present continuous</span> when it's happening at the moment of speaking</>} example={(<div className="flex flex-col items-center justify-center text-center">
			<div>The water is boiling now. can you turn off the burner?</div>
			<div>el agua está hirbiendo ahora. podés apagar la hornalla?</div>
		</div>)} />

		<Word word={[(<>daily routine</>), (<>rutina cotidiana</>)]} />

		<ExplanationContainer explanation={<>we use <span className='text-sky-400'>the present simple</span> to talk about daily routine or more perfomanent things that happens almost every day</>} example={(<div className="flex flex-col items-center justify-center text-center">
			<div>I wake up at 6 a.m and then I go to school..</div>
			<div>me despierto a las 6 a.m y despues voy a la escuela..</div>
		</div>)} />


		<ExplanationContainer explanation={<>we use <span className='text-sky-400'>the present simple</span> to talk about daily routines or more perfomanent things that happens almost every day</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
			<div>
				<div>I wake up at 6 a.m</div>
				<div>me despierto a las 6 a.m</div>
			</div>

			<div>
				<div>julie lives in london</div>
				<div>Julie vive en london</div>
			</div>

		</div>)} />


		<ExplanationContainer explanation={<> we use the  <span className='text-red-400'>present continuous</span> when we talk about situations that are slowly changing</>} example={(<div className="flex flex-col items-center justify-center text-center">

			<div>
				<div>I'm getting better and better at playing Minecraft.</div>
				<div>me estoy volviendo mejor y mejor jugando Minecraft</div>
			</div>

		</div>)} />

		<ExplanationContainer explanation={<>We use the <span className='text-sky-400'>present simple</span> with habits or things we do regularly</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
			<div>
				<div>she drinks water every morning.</div>
				<div>ella toma agua todas las mañanas</div>
			</div>
		</div>)} />

		<ExplanationContainer explanation={<>We use the <span className='text-red-400'>present continuous</span> with temporary or new habits</>} example={(<div className="flex flex-col items-center justify-center text-center">
			<div>
				<div>I'm drinking too much coffee these days because I'm so busy at work.</div>
				<div>estoy tomando demaciado cafe estos dias porque estoy muy ocupada en el trabajo</div>
			</div>
		</div>)} />


		<ExplanationContainer explanation={<>
			<span className='text-red-400'>the present continuous</span> is not often used with mental process verbs like <span className='text-amber-400'>know</span>, <span className='text-amber-400'>suppose</span>, <span className='text-amber-400'>think</span> , <span className='text-amber-400'>understand</span>
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div>
				<div>she doesn't <span className='text-amber-400'>know</span> anything about apples</div>
				<div>ella no <span className='text-amber-400'>sabe</span> nada de manzanas</div>
			</div>


			<div>
				<div><span className='text-amber-400'>think</span> about it please</div>
				<div><span className='text-amber-400'>piensa</span> acerca de eso porfavor</div>
			</div>


			<div>
				<div>she's not a hero I <span className='text-amber-400'>suppose</span></div>
				<div>ella no es un heroe <span className='text-amber-400'>supongo</span></div>
			</div>


			<div>
				<div>do you <span className='text-amber-400'>understand</span> english?</div>
				<div>vos <span className='text-amber-400'>entendés</span> inglés?</div>
			</div>


			<div>
				<div>do you  <span className='text-amber-400'>get</span> it?</div>
				<div>vos lo <span className='text-amber-400'>entendés</span>?</div>
			</div>



			<div>
				<div>I <span className='text-amber-400'>believe</span> in god</div>
				<div>yo <span className='text-amber-400'>creo</span> en dios</div>
			</div>
		</div>)} />


		<ExplanationContainer explanation={<>
			<span className='text-red-400'>the present continuous</span> is not often used with verbs expressing feelings like <span className='text-amber-400'>admire</span> , <span className='text-amber-400'>adore</span> , <span className='text-amber-400'>detest</span> , <span className='text-amber-400'>hate</span> , <span className='text-amber-400'>like</span> , <span className='text-amber-400'>respect</span>
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">


			<div>
				<div>I <span className='text-amber-400'>admire</span> these houses</div>
				<div>yo <span className='text-amber-400'>admiro</span> estas casas</div>
			</div>


			<div>
				<div>I <span className='text-amber-400'>like</span> it</div>
				<div>me <span className='text-amber-400'>gusta</span> </div>
			</div>
			

			<div>
				<div>I <span className='text-amber-400'>hate</span> you</div>
				<div>yo te <span className='text-amber-400'>odio</span> </div>
			</div>
			

			<div>
				<div>I <span className='text-amber-400'>adore</span> this game</div>
				<div>yo <span className='text-amber-400'>adoro</span> este juego </div>
			</div>


			<div>
				<div>I <span className='text-amber-400'>respect</span> the videogame developer</div>
				<div>yo <span className='text-amber-400'>respeto</span> al desarollador de videojuego</div>
			</div>


			<div>
				<div>I <span className='text-amber-400'>detest</span> my cat</div>
				<div>yo <span className='text-amber-400'>detesto</span> mi gato</div>
			</div>

		</div>)} />

		// continue with the next ones
// smell, taste (verbs describing the senses)

// consist, contain, last (verbs describing permanent qualities)

// promise, swear (speech act verbs)
	</>);
}

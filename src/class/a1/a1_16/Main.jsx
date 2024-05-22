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

<TinyExplanationContainer  explanation={<div className="flex flex-col items-center justify-center text-center"> <span className='text-sky-400'>we do not eat banana</span> or <span className='text-red-400'>we are not eating banana</span> ??? </div>} / >

		<ExplanationContainer explanation={<>we use <span className='text-sky-400'>present simple</span>  when we talk about Things that are always true</>} example={(<div className="flex flex-col items-center justify-center text-center">
			<div>Water boils at 100 degrees</div>
			<div>el agua hierbe a los 100 grados</div>
		</div>)} />


		
		<ExplanationContainer explanation={<>we use <span className='text-red-400'>present continuous</span> when it's happening at the moment of speaking</>} example={(<div className="flex flex-col items-center justify-center text-center">
			<div>The water is boiling now. can you turn off the burner?</div>
			<div>el agua está hirbiendo ahora. podés apagar la hornalla?</div>
		</div>)} />



<ExplanationContainer  explanation={<>we use <span className='text-sky-400'>the present simple</span> to talk about daily routines or more perfomanent things that happens almost every day</>} example={(<div className="flex flex-col items-center justify-center text-center">

<div>I wake up at 6 a.m</div>
<div>me despierto a las 6 a.m</div>

</div>)} / >


	</>);
}

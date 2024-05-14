import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

export function A1_11(){
return (<>

	<TitleContainer  title={<>list of previous verbs</>} / >

	<Word word={[(<><span className="textSize-3">To</span> eat</>), (<>comer</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> drink</>), (<>tomar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> have</>), (<>tener</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> write</>), (<>escribir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> read</>), (<>leer</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> confuse</>), (<>confundir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> embarrase</>), (<>avergonzar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> bore</>), (<>aburrir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> teach</>), (<>enseñar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> be</>), (<>ser/estar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> want</>), (<>querer</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> need</>), (<>necesitar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> fly</>), (<>volar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> run</>), (<>correr</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> walk</>), (<>caminar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> do</>), (<>hacer</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> go</>), (<>ir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> come</>), (<>venir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> escape</>), (<>escapar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> like</>), (<>gustar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> odiar</>), (<>odiar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> love</>), (<>amar/encantar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> can</>), (<>poder/ser capaz</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> must</>), (<>deber</>)]}/>

	<TitleContainer  title={<>previous pronoun</>} / >
	<Word word={[(<>I</>), (<>yo</>)]}/>
	<Word word={[(<>you</>), (<>tú/ustedes</>)]}/>
	<Word word={[(<>he</>), (<>él</>)]}/>
	<Word word={[(<>she</>), (<>élla</>)]}/>
	<Word word={[(<>it</>), (<>eso(sin distancia)</>)]}/>
	<Word word={[(<>this</>), (<>esto</>)]}/>
	<Word word={[(<>these</>), (<>estos</>)]}/>
	<Word word={[(<>that</>), (<>eso</>)]}/>
	<Word word={[(<>those</>), (<>esos</>)]}/>
	<Word word={[(<>they</>), (<>ellos/ellas/esos(sin distancia)</>)]}/>
	<Word word={[(<>we</>), (<>nosotros</>)]}/>


	<TitleContainer  title={<>positive vs negative in present tense</>} / >
	<div className="flex gap-6 flex-col items-center justify-center text-center">
	<div>
		<div className='bg-orange-800'>
			I need to eat hotdog
		</div>
		<div className='bg-purple-800'>
			I do not need to eat hotdog
		</div>
	</div>

	<div>
		<div className='bg-orange-800'>
			he needs to eat hotdog
		</div>
		<div className='bg-purple-800'>
			he does not need to eat hotdog
		</div>
	</div>

	<div>
		<div className='bg-orange-800'>
			I am happy
		</div>
		<div className='bg-purple-800'>
			I am not happy
		</div>
	</div>


	<div>
		<div className='bg-orange-800'>
			he is happy
		</div>
		<div className='bg-purple-800'>
			he is not happy
		</div>
	</div>


	<div>
		<div className='bg-orange-800'>
			I can/must eat hotdog
		</div>
		<div className='bg-purple-800'>
			I can/must not eat hotdog
		</div>
	</div>


	<div>
		<div className='bg-orange-800'>
			he can/must eat hotdog
		</div>
		<div className='bg-purple-800'>
			he can/must not eat hotdog
		</div>
	</div>
</div>

	<TitleContainer  title={<>how to make question</>} / >

<ExplanationContainer  explanation={<>
en la mayoria de verbos, mientras que en negativo vos agregás <span className='text-orange-400'>do not</span> antes del verbo
cuando preguntas se agrega se agrega el <span className='text-orange-400'>do</span> antes del pronombre</>} example={(<div className="flex flex-col items-center justify-center text-center gap-5">
	<div>
	<div>you <span className='text-orange-400'>do not</span>  want to eat carrot</div>
	<div><span className='text-orange-400'>do</span> you want to eat carrot?</div>
	</div>

	<div>
	<div>she needs to drink water</div>
	<div>she <span className='text-orange-400'>does not</span> need to drink water</div>
	<div><span className='text-orange-400'>does</span> she need to eat carrot?</div>
	</div>
	</div>)} / >


	<ExplanationContainer  explanation={<>estás preguntas se responde con <span className='bg-blue-800'>yes, <span className='text-green-400'>pronoun</span> do <span className='text-sky-400'>verb</span></span>  o <span className='bg-blue-800'>not, <span className='text-green-400'>pronoun</span>  do not <span className='text-sky-400'>verb</span> </span>(tambien podés omitir el verbo)</>} example={(<div className="flex flex-col items-center justify-center text-center gap-3">


	<div>
		<div><span className='text-orange-400'>do</span> you want to eat carrot?</div>
		<div>yes, I <span className='text-orange-400'>do</span> want to eat carrot!</div>
		<div>yes, I <span className='text-orange-400'>do</span>!</div>
	</div>


	<div>
		<div><span className='text-orange-400'>do</span> you want to eat apple?</div>
		<div>no, I <span className='text-orange-400'>do not</span> want to eat apple!</div>
		<div>no, I <span className='text-orange-400'>do not</span>!</div>
	</div>

<div>
	<div><span className='text-orange-400'>does</span> she need to eat carrot?</div>
	<div>yes, she <span className='text-orange-400'>does</span> need to eat carrot!</div>
	<div>yes, she <span className='text-orange-400'>does</span>!</div>
</div>


<div>
	<div><span className='text-orange-400'>does</span> she need to eat apple?</div>
	<div>no, she <span className='text-orange-400'>does not</span> need to eat apple!</div>
	<div>no, she <span className='text-orange-400'>does not</span>!</div>
</div>

		</div>)} / >


	<ExplanationContainer  explanation={<>Para las excepciones que el negativo se le agregan solo el <span className='text-orange-400'>not</span>, para preguntar tenés que dar vuelta  <span className='text-blue-400'>el verbo</span></>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
		<div>
			<div>she <span className='text-blue-400'>is</span> <span className='text-orange-400'>not</span> here</div>
			<div><span className='text-blue-400'>is</span> she here?</div>
		</div>


		<div>
			<div>she <span className='text-blue-400'>can</span> <span className='text-orange-400'>not</span> be here</div>
			<div><span className='text-blue-400'>can</span> she be here?</div>
		</div>


		<div>
			<div>she <span className='text-blue-400'>must</span> <span className='text-orange-400'>not</span> eat soup</div>
			<div><span className='text-blue-400'>must</span> she eat soup?</div>
		</div>

			</div>)} / >

	<ExplanationContainer  explanation={<>Para responder las excepciones, respondes <span className='bg-purple-900'>yes, <span className='text-orange-400'>pronoun</span> <span className='text-blue-400'>verb</span>
</span> o <span className='bg-purple-900'>no, <span className='text-orange-400'>pronoun</span> <span className='text-blue-400'>verb</span>
</span>
		</>} example={(<div className="flex flex-col items-center justify-center gap-3 text-center">

			<div>
			<div><span className='text-blue-400'>can</span> she be here?</div>
			<div>yes, she <span className='text-blue-400'>can</span> be here!</div>
			<div>yes, she <span className='text-blue-400'>can</span>!</div>
			</div>


			<div>
			<div><span className='text-blue-400'>can</span> she be here?</div>
			<div>no, she <span className='text-blue-400'>can</span> not be here!</div>
			<div>no, she <span className='text-blue-400'>can</span> not!</div>
			</div>



			<div>
			<div><span className='text-blue-400'>is</span> she is here?</div>
			<div>yes, she <span className='text-blue-400'>is</span> here!</div>
			<div>yes, she <span className='text-blue-400'>is</span>!</div>
			</div>


			<div>
			<div><span className='text-blue-400'>is</span> she is here?</div>
			<div>no, she <span className='text-blue-400'>is</span> not here!</div>
			<div>no, she <span className='text-blue-400'>is</span> not!</div>
			</div>
			</div>)} / >


	<TitleContainer  title={<>Words to know for making question</>} / >
	<Word word={[(<>what</>), (<>que/cual(you expect the thing )</>)]}/>
	<Word word={[(<>who</>), (<>que/cual(you expect a person )</>)]}/>
	<Word word={[(<>which</>), (<>cual(same as what but more specific)</>)]}/>
	<Word word={[(<>how</>), (<>como/que tan(you expect the way)</>)]}/>
	<Word word={[(<>where</>), (<>donde(you expect a place)</>)]}/>
	<Word word={[(<>when</>), (<>cuando(you expect a time)</>)]}/>
	<Word word={[(<>why</>), (<>porque(you expect a reason)</>)]}/>
	<Word word={[(<>whose</>), (<>de quien(you expect a person)</>)]}/>
	<Word word={[(<>how long</>), (<>cuanto tiempo</>)]}/>
	<Word word={[(<>how much</>), (<>cuanto/a(you expect an amount)</>)]}/>
	<Word word={[(<>how many</>), (<>cuantos/as(you expect an amount)</>)]}/>

	<TitleContainer  title={<>example</>} / >
	<div className="flex flex-col items-center justify-center text-center gap-2">
	<div>
	<Word word={[(<>What is your name?</>), (<>Cual es tu nombre?</>)]}/>
	<Word word={[(<>my name is gabriel!</>), (<>mi nombre es gabriel!</>)]}/>
	</div>
	<div>
	<Word word={[(<>What is that?</>), (<>que es eso?</>)]}/>
	<Word word={[(<>this is a green apple!</>), (<>esto es una manzana verde!</>)]}/>
	</div>
	<div>
	<Word word={[(<>which car?</>), (<>cual auto?</>)]}/>
	<Word word={[(<>this car!</>), (<>este auto!</>)]}/>
	</div>

	<div>
	<Word word={[(<>which one?</>), (<>cual?</>)]}/>
	<Word word={[(<>this one!</>), (<>este!</>)]}/>
	</div>

	<div>
	<Word word={[(<>how are you?</>), (<>como estás?</>)]}/>
	<Word word={[(<>I'm fine!</>), (<>estoy bien!</>)]}/>
	</div>


	<div>
	<Word word={[(<>how does he run on the highway?</>), (<>como corre en el autopista?</>)]}/>
	<Word word={[(<>by being careful!</>), (<>siendo cuidadoso</>)]}/>
	</div>

	<div>	
	<Word word={[(<>how old are you?</>), (<>que tan viejo eres?(cuanto años tenés)</>)]}/>
	<Word word={[(<>I'm 20 years old!</>), (<>soy 20 años de viejo! / tengo 20 años!</>)]}/>
	</div>

	<div>
	<Word word={[(<>how good are you at minecraft?</>), (<>Que tan buenos eres en Minecraft?</>)]}/>
	<Word word={[(<>I'm very good!</>), (<>soy muy bueno!</>)]}/>
	</div>

	<div>
	<Word word={[(<>where is the dog?</>), (<>Donde está el perro?</>)]}/>
	<Word word={[(<>the dog is here!</>), (<>el perro está aquí!</>)]}/>
	</div>

	<div>
	<Word word={[(<>when do you go to school?</>), (<>cuando vas a la escuela?</>)]}/>
	<Word word={[(<>I go at half past one p.m!</>), (<>voy a las una y media!</>)]}/>
	</div>

	<div>
	<Word word={[(<>why do you study mathematics?</>), (<>porque estudias matematicas?</>)]}/>
	<Word word={[(<>because I like it!</>), (<>porque me gusta!</>)]}/>
	</div>


	<div>
	<Word word={[(<>who are you?</>), (<>quien sos?</>)]}/>
	<Word word={[(<>I'm Gabriel!</>), (<>Soy Gabriel!</>)]}/>
	</div>

	<div>
	<Word word={[(<>whose car is this?</>), (<>de quien es este auto?</>)]}/>
	<Word word={[(<>this is my car!</>), (<>este auto es mio! / es mio!</>)]}/>
	</div>

	<div>
	<Word word={[(<>how long does it take for you to go school?</>), (<>cuanto tiempo toma para vos para ir a la escuela? / cuanto tiempo tardas?</>)]}/>
	<Word word={[(<>it takes one hour for me!</>), (<>toma una hora para mi! / tardo una hora!</>)]}/>
	</div>

	<div>
	<Word word={[(<>how much water is there?</>), (<>cuanta agua hay?</>)]}/>
	<Word word={[(<>there's a lot water!</>), (<>a un monton agua!</>)]}/>
	</div>

	<div>
	<Word word={[(<>how many monkeys are there?</>), (<>cuantos monos hay?</>)]}/>
	<Word word={[(<>there twenty monkeys!</>), (<>hay veinte monos!</>)]}/>
	</div>

	</div>
	<TitleContainer  title={<>abbreviations</>} / >	
	<Word word={[(<>what is</>), (<>what's</>)]}/>
	<Word word={[(<>who is</>), (<>who's</>)]}/>
	<Word word={[(<>where is</>), (<>where's</>)]}/>

	<TitleContainer  title={<>prepositions at the end of questions</>} / >

		<ExplanationContainer  explanation={<>cuando hacemos las preguntas en español, <span className='text-orange-400'>las preposiciones</span> están en el principio</>} example={(<div className="flex flex-col items-center justify-center text-center"><div> <span className='text-orange-400'>con</span> quien estás?
</div>
			<div>
			<span className='text-orange-400'>de</span> donde vienes?
			</div>
			<div>
			<span className='text-orange-400'>con</span> quien haces la tarea?
			</div>
			<div>
			<span className='text-orange-400'>a</span> que odias?
			</div>
			</div>)} / >

		<ExplanationContainer  explanation={<>en inglés, <span className='text-orange-400'>las preposiciones</span>  están al final</>} example={(<div className="flex flex-col items-center justify-center text-center">


			<div>
			who are you <span className='text-orange-400'>with</span>?
			</div>

			<div>
			where do you come <span className='text-orange-400'>from</span>?
			</div>
			<div>
			who do you do the homework <span className='text-orange-400'>with</span>?
			</div>
			<div>
			what do you hate <span className='text-orange-400'>to</span>?
			</div>
			</div>)} / >

		<ExplanationContainer  explanation={<>se pregunta con las preposiciones cuando esperas que la respuesta incluya esa preposicion</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
<div>
	<div>
		where are you <span className='text-orange-400'>from</span>?
	</div>
	<div>
		I'm <span className='text-orange-400'>from</span> Argentina
	</div>
</div>


<div>
	<div>
		where are you?
	</div>
	<div>
		I'm here
	</div>
</div>


<div>
	<div>
		who are you <span className='text-orange-400'>with</span>?
	</div>
	<div>
		I'm <span className='text-orange-400'>with</span> Gabriel
	</div>
</div>



<div>
	<div>
		who are you ?
	</div>
	<div>
		I'm Alan
	</div>
</div>


<div>
	<div>
		what do you hate <span className='text-orange-400'>to</span>?
	</div>
	<div>
		I hate <span className='text-orange-400'>to</span> this cat
	</div>
</div>


<div>
	<div>
		what do you hate?
	</div>
	<div>
		I hate dogs
	</div>
</div>

			</div>)} / >

		<TitleContainer  title={<>list of prepositions</>} / >

	<Word word={[(<>with</>), (<>con</>)]}/>
	<Word word={[(<>about</>), (<>acerca de/ sobre /de</>)]}/>
	<Word word={[(<>from</>), (<>desde / de</>)]}/>
	<Word word={[(<>to</>), (<>hacia / a</>)]}/>
	<Word word={[(<>for</>), (<>para</>)]}/>
	<Word word={[(<>at/in/on</>), (<>en</>)]}/>
	<Word word={[(<>into</>), (<>in / to</>)]}/>
	<Word word={[(<>onto</>), (<>on / to</>)]}/>

	<TitleContainer  title={<>examples of prepositions</>} / >
	<Word word={[(<>what does your friend talk about</>), (<>acerca de que habla tu amigo? / de que habla tu amigo</>)]}/>
	<Word word={[(<>which university is your friend from?</>), (<>de cual universidad es tu amigo?</>)]}/>
	<Word word={[(<>what do you eat with?</>), (<>con que comes?</>)]}/>
	<Word word={[(<>who do you do this for?</>), (<>para quien haces esto?</>)]}/>
	<Word word={[(<>where do you go to?</>), (<>a donde vas?</>)]}/>
	<Word word={[(<>where is the pen on?</>), (<>en donde está la lapicera?</>)]}/>
	<Word word={[(<>where does the train go onto?</>), (<>en donde va el tren?</>)]}/>

		<TitleContainer  title={<>how to give instructions</>} / >
		<ExplanationContainer  explanation={<>solo teñés que quitar el <span className='text-blue-400'>sustantivo</span> para dar instrucciones a alguien</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
	<div className="flex flex-col items-center justify-center text-center gap-2">
			<div>
				<div> <span className='text-blue-400'>you</span> go to my house</div>
				<div> <span className='text-blue-400'>vos</span> vas a mi casa </div>
			</div>
			<div>
				<div> go to my house</div>
				<div> ve a mi casa </div>
			</div>
	</div>


	<div className="flex flex-col items-center justify-center text-center gap-2">
			<div>
				<div> <span className='text-blue-400'>he</span> cooks chicken</div>
				<div> <span className='text-blue-400'>el</span> cocina pollo </div>
			</div>
			<div>
				<div> cook chicken</div>
				<div> cociná pollo </div>
			</div>
	</div>

		</div>)} / >
<ExplanationContainer  explanation={<>Si querés dar una instruccion negativa tambien le agregas el <span className='text-orange-400'>do not</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

<div>
	<div>
		read a book
	</div>
	<div>
	 <span className='text-orange-400'>do not </span> read a book
	</div>
</div>


<div>
	<div>
		eat vegetables
	</div>
	<div>
	 <span className='text-orange-400'>don't </span> eat vegetables
	</div>
</div>

</div>)} / >

	<TitleContainer  title={<>exercise</>} / >
	
<div>translate:</div>
<ListOfTest list={
	[
	[(<>where is the car?</>), (<>donde está el auto?</>)],
	[(<>when do you go to your house?</>), (<>cuando vas a tu casa?</>)],
	[(<>write with the pencil</>), (<>escribe con el lapiz</>)],
	[(<>who is this for?</>), (<>para quien es esto?</>)],
	[(<>how many buildings are there?</>), (<>cuantos edificios hay?</>)],
	[(<>how long does it take to create this Minecraft House?</>), (<>cuanto tiempo toma en crear esta casa de Minecraft</>)],
	[(<>which city is the square in?</>), (<>en cual ciudad está la plaza?</>)],
	[(<>don't write with the pen</>), (<>no escribas con la lapicera</>)],
	[(<>walk in the sidewalk!</>), (<>caminá en la vereda!</>)],
	[(<>how much salt do you want?</>), (<>cuanta sal querés?</>)],
	[(<>how many hamburguers do you need to cook</>), (<>cuantas hamburguesas necesitas cocinar?</>)],
	[(<>is eating carrot bad for you</>), (<>es comer zanahoria malo para vos?</>)],
	[(<>do you read books?</>), (<>lees libros?</>)],
	[(<>how does he write books?</>), (<>como él escribe libros?</>)],
	[(<>why do we study English?</>), (<>porque aprendemos inglés?</>)],
	[(<>where is the book on?</>), (<>en donde está el libro?</>)],
	[(<>DO NOT NOT WALK ON THE HIGHWAY BECAUSE I AM ANGRY!</>), (<>NO CAMINAS EN EL AUTOPISTA PORQUE ESTOY ENOJADA!</>)],
	[(<>what does your teacher teach about?</>), (<>acerca de que enseña tu profesor?</>)],
	[(<>how happy are they?</>), (<>que tan feliz están ellos?</>)],
	[(<>whose pencil is this?</>), (<>de quien es este lapiz?</>)],
	[(<>who do you like to be with</>), (<>porque quiere andar en vici en el autopista?</>)],
	[(<>read the book</>), (<>lee el libro</>)],
	[(<>who is the green princess?</>), (<>quien es la princesa verde?</>)],
	[(<>why does he want to ride a bike on the highway</>), (<>porque quiere andar en vici en el autopista?</>)],
	[(<>who wants to walk on the road?</>), (<>quien quiere caminar en la carretera?</>)],
	[(<>which forest do you go into?</>), (<>a cual bosque vas?</>)],
	[(<>where is the hospital?</>), (<>donde está el hospital?</>)],
	[(<>are there pinapple on the sidewalk?</>), (<>hay anana en la vereda?</>)],
	[(<>do you like to eat lettuce and strawberry?</>), (<>te gusta comer lechuga y frutilla?</>)],
	[(<>use the computer</>), (<>usa la computadora</>)],
	[(<>don't read books</>), (<>no leas libros</>)],
	[(<>Maria doesn't like to eat onion. Why do you?</>), (<>A maria no le gusta comer cebolla. Porque a vos te gusta?</>)],
	]
} / >
	<div>answer(don't expect the answer to have the same answer in these exercises)</div>
<ListOfTest list={
	[
	[(<>do you read books?</>), (<>No, I do not read books</>)],
	[(<>do you like to eat french fries?</>), (<>yes, I do read books</>)],
	[(<>does your teacher like to teach?</>), (<>yes, he does like to teach</>)],
	[(<>do I exist?</>), (<>no, you do not exist</>)],
	[(<>does bart simpson eat apple?</>), (<>no, he does not</>)],
	]
} / >

	</>);

}

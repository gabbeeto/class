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


	<TitleContainer  title={<>exercise</>} / >
	
<div>translate:</div>
<ListOfTest list={
	[
	[(<>where is the car?</>), (<>donde está el auto?</>)],
	[(<>when do you go to your house?</>), (<>cuando vas a tu casa?</>)],
	[(<>how many buildings are there?</>), (<>cuantos edificios hay?</>)],
	[(<>how long does it take to create this Minecraft House?</>), (<>cuanto tiempo toma en crear esta casa de Minecraft</>)],
	[(<>how much salt do you want?</>), (<>cuanta sal querés?</>)],
	[(<>how many hamburguers do you need to cook</>), (<>cuantas hamburguesas necesitas cocinar?</>)],
	[(<>is eating carrot bad for you</>), (<>es comer zanahoria malo para vos?</>)],
	[(<>do you read books?</>), (<>lees libros?</>)],
	[(<>how does he write books?</>), (<>como él escribe libros?</>)],
	[(<>why do we study English?</>), (<>porque aprendemos inglés?</>)],
	[(<>how happy are they?</>), (<>que tan feliz están ellos?</>)],
	[(<>whose pencil is this?</>), (<>de quien es este lapiz?</>)],
	[(<>who is the green princess?</>), (<>quien es la princesa verde?</>)],
	[(<>why does he want to ride a bike on the highway</>), (<>porque quiere andar en vici en el autopista?</>)],
	[(<>who wants to walk on the road?</>), (<>quien quiere caminar en la carretera?</>)],
	[(<>where is the hospital?</>), (<>donde está el hospital?</>)],
	[(<>are there pinapple on the sidewalk?</>), (<>hay anana en la vereda?</>)],
	[(<>do you like to eat lettuce and strawberry?</>), (<>te gusta comer lechuga y frutilla?</>)],
	[(<>Maria doesn't like to eat onion. Why do you?</>), (<>A maria no le gusta comer cebolla. Porque a vos te gusta?</>)],
	]
} / >
	<div>answer(don't expect the answer to be the same)</div>
<ListOfTest list={
	[
	[(<>where's the car?</>), (<>the car is on the square!</>)],
	[(<>when do you go to your house?</>), (<>I go at half past six</>)],
	[(<>how many buildings are there?</>), (<>there are five buildings</>)],
	[(<>how long does it take to create this Minecraft House?</>), (<>it takes twenty hours</>)],
	[(<>how much salt do you want?</>), (<>just a little</>)],
	[(<>how many hamburguers do you need to cook</>), (<>four hamburguers</>)],
	[(<>is eating carrot bad for you</>), (<>yes, it is</>)],
	[(<>do you read books?</>), (<>No, I don't</>)],
	[(<>how does he write books?</>), (<>by reading</>)],
	[(<>why do we study English?</>), (<>because we like to</>)],
	[(<>how happy are they?</>), (<>very happy</>)],
	[(<>whose pencil is this?</>), (<>this is my pencil</>)],
	[(<>who's the green princess?</>), (<>the green princess is my sister</>)],
	[(<>why does he want to ride a bike on the highway</>), (<>because he is crazy</>)],
	[(<>who wants to walk on the road?</>), (<>me</>)],
	[(<>where's the hospital?</>), (<>it's in front of school</>)],
	[(<>are there pinapple on the sidewalk?</>), (<>no, there are not</>)],
	[(<>do you like to eat french fries?</>), (<>yes, I do</>)],
	[(<>Maria doesn't like to eat grape. Why does he?</>), (<>because it is delicious for him</>)],
	]
} / >

	</>);

}

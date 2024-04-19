import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

export function A1_10(){
return (<> 
<TitleContainer  title={<>+s rules</>} / >
	<div>estas reglas sirven para hablar de más de 1 cosa cuando hablan en 3ra persona singular en presente(cuando hablas de otra persona u cosa y esa persona u cosa es solo 1).no es necesario memorizar las siguientes reglas, estar conciente de ellas es suficiente!</div>

	<ExplanationContainer  explanation={<>casi siempre se le agrega simplemente una <span className='text-orange-400'>s</span> en la mayoria de casos</>} example={(<div>
<div>two car<span className='text-orange-400'>s</span></div>
<div>she eat<span className='text-orange-400'>s</span></div>
		</div>)} / >

	<ExplanationContainer  explanation={<>si el sustantivo o verbo termina en; <span className='text-sky-400'>s</span>, <span className='text-sky-400'>x</span>, <span className='text-sky-400'>z</span> , <span className='text-sky-400'>ch</span> o <span className='text-sky-400'>sh</span>.. Se le agrega <span className='text-orange-400'>es</span></>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
<div>
		<div>two bo<span className='text-sky-400'>x</span><span className='text-orange-400'>es</span></div>
		<div>dos caja<span className='text-orange-400'>s</span></div>
		</div>
<div>
		<div>two fo<span className='text-sky-400'>x</span><span className='text-orange-400'>es</span></div>
		<div>dos zorro<span className='text-orange-400'>s</span></div>
		</div>

		<div>
		<div>two bos<span className='text-sky-400'>s</span><span className='text-orange-400'>es</span></div>
		<div>dos jefe<span className='text-orange-400'>s</span></div>
		</div>

		<div>
		<div>she tea<span className='text-sky-400'>ch</span><span className='text-orange-400'>es</span></div>
		<div>ella enseña</div>
		</div>

		<div>
		<div>two di<span className='text-sky-400'>sh</span><span className='text-orange-400'>es</span></div>
		<div>dos plato<span className='text-orange-400'>s</span></div>
		</div>
		</div>)} / >

<ExplanationContainer  explanation={<>muchas veces cuando el verbo termina en <span className='text-sky-400'>o</span>, se le agrega <span className='text-orange-400'>es</span> aveces</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

<div>
	<div >two tomat<span className='text-sky-400'>o</span><span className='text-orange-400'>es</span></div>
	<div>dos tomate<span className='text-orange-400'>s</span></div>
</div>

<div>
	<div>two potat<span className='text-sky-400'>o</span><span className='text-orange-400'>es</span></div>
	<div>dos papa<span className='text-orange-400'>s</span></div>
</div>

<div>
	<div>two ech<span className='text-sky-400'>o</span><span className='text-orange-400'>es</span></div>
	<div>dos eco<span className='text-orange-400'>s</span></div>
</div>

<div>
	<div>she d<span className='text-sky-400'>o</span><span className='text-orange-400'>es</span></div>
	<div>ella hace</div>
</div>


<div>
	<div>she g<span className='text-sky-400'>o</span><span className='text-orange-400'>es</span> to my house</div>
	<div>ella va a mi casa</div>
</div>
	</div>)} / >

	<ExplanationContainer  explanation={<>aveces no</>} example={(<div className="flex gap-2 flex-col items-center justify-center text-center" >
<div>
	<div>two phot<span className='text-sky-400'>o</span><span className='text-orange-400'>s</span></div>
	<div>dos foto<span className='text-orange-400'>s</span></div>
</div>

<div>
	<div>two pian<span className='text-sky-400'>o</span><span className='text-orange-400'>s</span></div>
	<div>dos piano<span className='text-orange-400'>s</span></div>
</div>


<div>
	<div>two log<span className='text-sky-400'>o</span><span className='text-orange-400'>s</span></div>
	<div>dos logo<span className='text-orange-400'>s</span></div>
</div>


<div>
	<div>two radi<span className='text-sky-400'>o</span><span className='text-orange-400'>s</span></div>
	<div>dos radio<span className='text-orange-400'>s</span></div>
</div>
		</div>)} / >

<ExplanationContainer  explanation={<>aveces, algunas palabras que terminan con <span className='text-sky-400'>f</span>, se remplazan la <span className='text-sky-400'>f</span> con <span className='text-purple-400'>v</span> y se le agrega <span className='text-orange-400'>es</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

<div>
<div>a thie<span className='text-sky-400'>f</span></div>
<div>two thie<span className='text-purple-400'>v</span><span className='text-orange-400'>es</span></div>
<div>un ladron</div>
<div>dos ladron<span className='text-orange-400'>es</span></div>
</div>


<div>
<div>a hal<span className='text-sky-400'>f</span></div>
<div>two hal<span className='text-purple-400'>v</span><span className='text-orange-400'>es</span></div>
<div>una mitad</div>
<div>dos mitad<span className='text-orange-400'>es</span></div>
</div>


<div>
<div>a cal<span className='text-sky-400'>f</span></div>
<div>two cal<span className='text-purple-400'>v</span><span className='text-orange-400'>es</span></div>
<div>una vaquita / pantorilla</div>
<div>dos vaquita<span className='text-orange-400'>s</span> / pantorilla<span className='text-orange-400'>s</span></div>
</div>


	</div>)} / >

<ExplanationContainer  explanation={<> algunas palabras que terminan con <span className='text-sky-400'>ive</span>, se remplazan la <span className='text-sky-400'>f</span> con <span className='text-purple-400'>v</span> y se le agrega <span className='text-orange-400'>s</span> al final</>} example={(<div className="flex flex-col items-center justify-center text-center gap-3">
<div>
<div>a w<span className='text-sky-400'>ife</span></div>
<div>two w<span className='text-sky-400'>i<span className='text-purple-400'>v</span>e</span><span className='text-orange-400'>s</span></div>
<div>una esposa</div>
<div>dos esposa<span className='text-orange-400'>s</span></div>
</div>


<div>
<div>a l<span className='text-sky-400'>ife</span></div>
<div>two l<span className='text-sky-400'>i<span className='text-purple-400'>v</span>e</span><span className='text-orange-400'>s</span></div>
<div>una vida</div>
<div>una vida<span className='text-orange-400'>s</span></div>
</div>


<div>
<div>a kn<span className='text-sky-400'>ife</span></div>
<div>two kn<span className='text-sky-400'>i<span className='text-purple-400'>v</span>e</span><span className='text-orange-400'>s</span></div>
<div>un cuchillo</div>
<div>dos cuchillo<span className='text-orange-400'>s</span></div>
</div>
</div>)} / >

	<ExplanationContainer  explanation={<>algunas palabras que terminan con <span className='text-sky-400'>y</span> y la letra anterior es <span className='text-sky-400'>una cosonante</span>, se remplazan la <span className='text-sky-400'>y</span> con <span className='text-purple-400'>i</span> y se le agrega <span className='text-orange-400'>es</span> al final</>} example={(<div className="flex flex-col items-center justify-center text-center gap-3">

<div>
<div>a cit<span className='text-sky-400'>y</span></div>
<div>two cit<span className='text-sky-400'>i</span><span className='text-orange-400'>es</span></div>
<div>una ciudad</div>
<div>ciudad<span className='text-orange-400'>es</span></div>
</div>


<div>
<div>a popp<span className='text-sky-400'>y</span></div>
<div>two popp<span className='text-sky-400'>i</span><span className='text-orange-400'>es</span></div>
<div>una amapola</div>
<div>dos amapola<span className='text-orange-400'>s</span></div>
</div>


<div>
<div>to fl<span className='text-sky-400'>y</span></div>
<div>she fl<span className='text-sky-400'>i</span><span className='text-orange-400'>es</span></div>
<div>volar</div>
<div>ella vuela</div>
</div>

		</div>)} / >

<ExplanationContainer  explanation={<>aveces no cambia</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
<div>
<div><span className='text-red-400'>a</span> fish</div>
<div><span className='text-red-400'>two</span> fish</div>
</div>

<div>
<div><span className='text-red-400'>a</span> sheep</div>
<div><span className='text-red-400'>two</span> sheep</div>
</div>


<div>
<div><span className='text-red-400'>a</span> deer</div>
<div><span className='text-red-400'>two</span> deer</div>
<div><span className='text-red-400'>dos</span> venado<span className='text-orange-400'>s</span></div>
</div>
	</div>)} / >


<ExplanationContainer  explanation={<>algunos cambian completamente</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
<div>
<div><span className='text-red-400'>a</span> g<span className='text-cyan-300'>oo</span>se</div>
<div><span className='text-red-400'>two</span> g<span className='text-cyan-300'>ee</span>se</div>
<div><span className='text-red-400'>un</span> ganzo</div>
<div><span className='text-red-400'>dos</span> ganzo<span className='text-orange-400'>s</span></div>
</div>


<div>
<div><span className='text-red-400'>a</span> m<span className='text-cyan-300'>a</span>n</div>
<div><span className='text-red-400'>two</span> m<span className='text-cyan-300'>e</span>n</div>
<div><span className='text-red-400'>un</span> hombre</div>
<div><span className='text-red-400'>dos</span> hombre<span className='text-orange-400'>s</span></div>
</div>


<div>
<div><span className='text-red-400'>a</span> wom<span className='text-cyan-300'>a</span>n</div>
<div><span className='text-red-400'>two</span> wom<span className='text-cyan-300'>e</span>n</div>
<div><span className='text-red-400'>un</span> mujer</div>
<div><span className='text-red-400'>dos</span> mujer<span className='text-orange-400'>es</span></div>
</div>


<div>
<div><span className='text-red-400'>a</span> f<span className='text-cyan-300'>oo</span>t</div>
<div><span className='text-red-400'>two</span> f<span className='text-cyan-300'>ee</span>t</div>
<div><span className='text-red-400'>un</span> pie</div>
<div><span className='text-red-400'>dos</span> pie<span className='text-orange-400'>s</span></div>
</div>


<div>
<div><span className='text-red-400'>a</span> t<span className='text-cyan-300'>oo</span>th</div>
<div><span className='text-red-400'>two</span> t<span className='text-cyan-300'>ee</span>th</div>
<div><span className='text-red-400'>un</span> diente</div>
<div><span className='text-red-400'>dos</span> diente<span className='text-orange-400'>s</span></div>
</div>


<div>
<div><span className='text-red-400'>a</span> m<span className='text-cyan-300'>ouse</span></div>
<div><span className='text-red-400'>two</span> m<span className='text-cyan-300'>ice</span></div>
<div><span className='text-red-400'>un</span> un raton</div>
<div><span className='text-red-400'>dos</span> raton<span className='text-orange-400'>es</span></div>
</div>


<div>
<div><span className='text-red-400'>a</span> child</div>
<div><span className='text-red-400'>two</span> child<span className='text-cyan-300'>ren</span></div>
<div><span className='text-red-400'>un</span> chico/a</div>
<div><span className='text-red-400'>dos</span> chico/a<span className='text-orange-400'>s</span></div>
</div>

	</div>)} / >
<TitleContainer  title={<>the 'it' pronoun</>} / >

	<ExplanationContainer  explanation={<><span className='text-sky-400'>he</span>(él) se usa para remplazar una persona o animal con genero masculino. Especialmente cuando ya sabemos de quien hablamos para evitar repeticion </>} example={(<div>
<div><span className='text-sky-400'>Gabriel</span> is happy</div>
<div><span className='text-sky-400'>He</span> is happy</div>
		</div>)} / >

	<ExplanationContainer  explanation={<>lo mismo con <span className='text-sky-400'>she</span>(ella) pero se usa para remplazar a una persona/animal de genero femenino </>} example={(<div>
<div><span className='text-sky-400'>Gabriela</span> is happy</div>
<div><span className='text-sky-400'>She</span> is happy</div>
		</div>)} / >


	<ExplanationContainer  explanation={<> <span className='text-sky-400'>it</span> es como <span className='text-sky-400'>she</span> o <span className='text-sky-400'>he</span> que se usa cuando ya sabemos de que se habla pero <span className='text-sky-400'>it</span> es usado para remplazar cosas sin genero como un animal en la cual el genero es desconocido, un objeto o un concepto/termino. Basicamente casi todo lo que no tiene genero, por esto.. Esta pronombre es mucho más usado que los otros pronombres</>} example={(
		<div className="flex flex-col items-center justify-center text-center gap-2"><div>
<div><span className='text-sky-400'>the computer</span> is happy</div>
<div><span className='text-sky-400'>it</span> is happy</div>
		</div>


		<div>
<div><span className='text-sky-400'>depression</span> is not ok</div>
<div><span className='text-sky-400'>it</span> is not ok</div>
		</div>
	

		<div>
<div><span className='text-sky-400'>this car</span> is not in my house</div>
<div><span className='text-sky-400'>it</span> is not in my house</div>
		</div>


		<div>
<div><span className='text-sky-400'>the temperature</span> is cold</div>
<div><span className='text-sky-400'>it</span> is cold</div>
		</div>


		<div>
<div> I love <span className='text-sky-400'>the music</span></div>
<div>I love <span className='text-sky-400'>it</span></div>
		</div>


		<div>
<div> I hate <span className='text-sky-400'>happiness</span></div>
<div>I hate <span className='text-sky-400'>it</span></div>
		</div>

</div>
	)} / >

	<ExplanationContainer  explanation={<><span className='text-sky-400'>it</span> no existe en español, pero lo más parecido es <span className='text-sky-400'>eso</span> o <span className='text-sky-400'>esto</span> . Sí necesitas una traduccion, podés usar <span className='text-sky-400'>eso</span> o <span className='text-sky-400'>esto</span>  como traduccion</>} example={(<div className="flex flex-col items-center justify-center gap-5 text-center">

		<div>
<div className='bg-black p-2 rounded-2xl'><span className='text-sky-400'>the temperature</span> is cold</div>
<div className='bg-cyan-900 p-2 rounded-2xl'><span className='text-sky-400'>it</span> is cold</div>
<div className='bg-black p-2 rounded-2xl'><span className='text-sky-400'>el temperatura</span> es frio</div>
<div className='bg-cyan-900 p-2 rounded-2xl'>hace frio</div>
<div className='bg-cyan-900 p-2 rounded-2xl'><span className='text-sky-400'>esto</span> es frio</div>
		</div>


		<div>
<div className='bg-black p-2 rounded-2xl'><span className='text-sky-400'>depression</span> is not ok</div>
<div className='bg-cyan-900 p-2 rounded-2xl'><span className='text-sky-400'>it</span> is not ok</div>
<div className='bg-black p-2 rounded-2xl'><span className='text-sky-400'>la depresíon</span> no está bien</div>
<div className='bg-cyan-900 p-2 rounded-2xl'>no está bien</div>
<div className='bg-cyan-900 p-2 rounded-2xl'><span className='text-sky-400'>eso</span> no está bien</div>
		</div>


		<div>
<div className='bg-black p-2 rounded-2xl'> I love <span className='text-sky-400'>the music</span></div>
<div className='bg-cyan-900 p-2 rounded-2xl'>I love <span className='text-sky-400'>it</span></div>
<div className='bg-black p-2 rounded-2xl'>me encanta <span className='text-sky-400'>la musica</span></div>
<div className='bg-cyan-900 p-2 rounded-2xl'>me encanta</div>
<div className='bg-cyan-900 p-2 rounded-2xl'>me encanta <span className='text-sky-400'>eso</span></div>
		</div>


		<div>
<div className='bg-black p-2 rounded-2xl'> I hate <span className='text-sky-400'>happiness</span></div>
<div className='bg-cyan-900 p-2 rounded-2xl'>I hate <span className='text-sky-400'>it</span></div>

<div className='bg-black p-2 rounded-2xl'>odio <span className='text-sky-400'>la felicidad</span></div>
<div className='bg-cyan-900 p-2 rounded-2xl'><span className='text-sky-400'>lo</span> odio</div>
<div className='bg-cyan-900 p-2 rounded-2xl'>odio <span className='text-sky-400'>eso</span></div>
		</div>

		</div>)} / >

<div><span className='text-sky-400'>it</span> tiene 3 diferencias comparado con <span className='text-sky-400'>this</span>(<span className='text-sky-400'>esto</span>) y <span className='text-sky-400'>that</span>(<span className='text-sky-400'>eso</span>)</div>	

	<ExplanationContainer  explanation={<>
<span className='text-sky-400'>this</span> y <span className='text-sky-400'>that</span> tiene una distancia. <span className='text-sky-400'>this</span> se usa cuando está cerca mientras que <span className='text-sky-400'>that</span> se usa cuando algo está lejos pero <span className='text-sky-400'>it</span> no tiene ninguna distancia.		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
			<div>
<div><span className='text-sky-400'>this</span> is my house(la casa está cerca de vos, es muy probable que digas esto estando adentro de la casa o muy cerca)</div>
<div><span className='text-sky-400'>that</span> is my house(la casa un poquito más lejos de vos, es muy probable que digas esto en la vereda un poquito más lejos)</div>
<div><span className='text-sky-400'>it</span> is my house(no especifica ninguna distancia, usualmente usamos 'it' cuando ni si quiera estamos en el lugar casi siempre)</div>
</div>

<div>
<div>Eating dogs is terrifying. <span className='text-sky-400'>This</span> is not ok('esto no está bien' se usa cuando la distancia es menor que 'eso no está bien', está mal pero hay una distancia mayor en lo que esa persona hace y lo que le afecta)</div>
<div>Eating dogs is terrifying. <span className='text-sky-400'>It</span> is not ok(no especifica ninguna distancia.. es como la gente que dice 'no está bien' y no tiene ninguna distancia. Usualmente usamos 'it' cuando ni si quiera te afecta)</div>
</div>


			</div>)} / >

	<ExplanationContainer  explanation={<><span className='text-sky-400'>this</span> y <span className='text-sky-400'>that</span> tiene mayor énfasis e importancia</>} example={(<div className="flex flex-col items-center justify-center text-center gap-3">
			<div>
<div><span className='text-sky-400'>this</span> is wonderful</div>
<div><span className='text-sky-400'>esto</span> es maravilloso</div>
			</div>


			<div>
<div><span className='text-sky-400'>it</span> is wonderful</div>
<div> es maravilloso</div>
			</div>

			</div>)} / >


	<ExplanationContainer  explanation={<> <span className='text-sky-400'>this</span> y <span className='text-sky-400'>that</span> pueden ser mesclado con un <span className='text-orange-400'>sustantivo</span> mientras que <span className='text-sky-400'>it</span> no
		</>} example={(<>
<div><span className='text-sky-400'>this </span> <span className='text-orange-400'>car</span> is good</div>
<div><span className='text-sky-400'>that </span> <span className='text-orange-400'>dog</span> is good</div>
<div><span className='text-sky-400'>it </span> is good</div>
			</>)} / >

	<ExplanationContainer  explanation={<>en español <span className='text-sky-400'>it</span> suele ser invisible</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
<div>
<div><span className='text-sky-400'>it</span> is good</div>
<div>es bueno</div>
</div>


<div>
<div>I love <span className='text-sky-400'>it</span></div>
<div>me encanta</div>
</div>

		</div>)} / >

	<ExplanationContainer  explanation={<><span className='text-sky-400'>it</span> es como <span className='text-sky-400'>she</span> y <span className='text-sky-400'>he</span> tambien en el sentido que es singular, que solo se usa cuando hablas de una cosa. cuando hablás de más de un objeto/cosa/concepto.. Se usa <span className='text-sky-400'>they</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-3">
<div>
<div><span className='text-sky-400'>the computer</span> is good</div>
<div><span className='text-sky-400'>it</span> is good</div>
</div>


<div>
<div><span className='text-sky-400'>the computers</span> are good</div>
<div><span className='text-sky-400'>they</span> are good</div>
</div>
		</div>)} / >



<TitleContainer  title={<>exercise </>} / >
<div className='bg-red-800 rounded-xl'>write the pronoun replacement in the orange containers</div>
<div className='bg-green-800 rounded-xl'>translate in the green containers</div>

<ListOfTest list={
	[
	[(<div>the orange carrot is wonderful</div>), (<div>la zanahoria naranja es maravillosa</div>)],
	[(<div>comer sandia no es cool</div>), (<div>eating watermelon is not cool</div>)],
	[(<div>hay cebollas en la cocina</div>), (<div>there are onions in the kitchen</div>)],
	[(<div>there is ice cream  on the folder</div>), (<div>hay helado en la carpeta</div>)],
	]
} / >

<ListOfTest color='orange' list={
	[
	[(<>Luis eats carrot</>), (<>he eats carrot</>)],
	[(<>Maria wants to eat rice</>), (<>she wants to eat rice</>)],
	[(<>Luis and Maria drink water</>), (<>they drink water</>)],
	[(<>Maria and I drink water</>), (<>we drink water</>)],
	]
} / >

<ListOfTest list={
	[
	[(<div>the grapes are delicious</div>), (<div>las uvas son deliciosas</div>)],
	[(<div>eating strawberries is good</div>), (<div>comer frutillas es bueno</div>)],
	[(<div>no quiero comer papas fritas</div>), (<div>I don't want to eat french fries</div>)],
	[(<div>nosotros necesitamos comer helado</div>), (<div>we need to eat ice cream</div>)],
	]
} / >


<ListOfTest color='orange' list={
	[
	[(<>the computer is not a vegetable</>), (<>it is not a vegetable</>)],
	[(<>happiness is wonderful</>), (<>it is wonderful</>)],
	[(<>happiness and depression are a false dichotomy</>), (<>they are a false dochotomy</>)],
	[(<>the computer and I kill people</>), (<>we kill people</>)],
	]
} / >

	<Word word={[(<>but</>), (<>pero</>)]}/>
	<Word word={[(<>like</>), (<>como</>)]}/>
	<Word word={[(<>you fly like Batman</>), (<>vuelas como batban</>)]}/>
	<Word word={[(<>to write</>), (<>escribir</>)]}/>
	<Word word={[(<>to read</>), (<>leer</>)]}/>
<ListOfTest list={
	[
	[(<div>the computers are fast but they're don't run like sonic</div>), (<div>las computadoras son rapidas pero no son como sonic</div>)],
	[(<div>el lapiz es rojo pero no está enojado</div>), (<div>the pen is red but it's not angry</div>)],
	[(<div>me gusta escribir con el lapiz</div>), (<div>I like to write with the pen</div>)],
	[(<div>she doesn't like to write with pencil because it's black</div>), (<div>a ella no le gusta escribir con la lapicera porque es negro</div>)],
	[(<div>she reads the black book but it's not a good book</div>), (<div>ella lee el libro negro pero no es un buen libro</div>)],
	]
} / >


	</>);
}

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
	</>);
}

import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest, TinyExplanationContainer } from './../../explanationUtilities'

import thisBirdImg from './thisBird.png';
import thisOneImg from './thisOne.png';


import whichOneImg from './whichOne.png';
import whichFruitImg from './whichFruit.png';

import thisOneFruitImg from './thisOneFruit.png';
import thisFruitImg from './thisFruit.png';

export function A1_14(){
return (<> 

<TitleContainer  title={<>'one' replaces noun</>} / >
	<Word word={[(<>like</>), (<>como</>)]}/>
	<Word word={[(<>accompanied by</>), (<>acompañado por</>)]}/>


<ExplanationContainer  explanation={<>
Demostratives adjetives like <span className='text-orange-400'>this</span> and <span className='text-orange-400'>that</span> are often accompanied by <span className='text-blue-400'>nouns</span> 
	</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
	<div>
		<div>
			<span className='text-orange-400'>this</span> <span className='text-blue-400'>car</span> is cute
		</div>
		<div>
			<span className='text-orange-400'>este</span> <span className='text-blue-400'>auto</span> es tierno
		</div>
		</div>

		<div>
		<div>
			<span className='text-orange-400'>that</span> <span className='text-blue-400'>cat</span> is crazy
		</div>
		<div>
			<span className='text-orange-400'>ese</span> <span className='text-blue-400'>gato</span> está loco
		</div>
		</div>


		<div>
			<div>
				<span className='text-orange-400'>these </span> <span className='text-blue-400'>houses</span> are really wonderful
			</div>
			<div>
				<span className='text-orange-400'>estas</span> <span className='text-blue-400'>casas</span> son realmente maravilloso
			</div>
		</div>


		<div>
			<div>
				<span className='text-orange-400'>those </span> <span className='text-blue-400'>puzzles</span> are confusing
			</div>
			<div>
				<span className='text-orange-400'>esos</span> <span className='text-blue-400'>puzzles</span> son realmente confuso
			</div>
		</div>

	</div>)} / >

	<div className="flex flex-col items-center justify-center text-center">
		<img src={thisBirdImg} alt="this bird image"/>
	</div>

	<ExplanationContainer  explanation={<>but sometimes, you want to specifying a <span className='text-blue-400'>noun</span> you don't know the name of or you don't want to specify the <span className='text-blue-400'>noun</span>. well.. in that case, you can use <span className='text-blue-400'>one</span> so you don't specify the <span className='text-blue-400'>noun</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-6">

<div className="flex flex-col items-center justify-center text-center gap-1">
		<div>
			<div>
				<span className='text-orange-400'>this</span> <span className='text-blue-400'>cow</span> is really big
			</div>
			<div>
				<span className='text-orange-400'>esta</span> <span className='text-blue-400'>vaca</span> es realmente grande
			</div>
		</div>

		<div>
			<div>
				<span className='text-orange-400'>this</span> <span className='text-blue-400'>one</span> is really big
			</div>
			<div>
				<span className='text-orange-400'>esta</span> es realmente grande
			</div>
		</div>
</div>



<div className="flex flex-col items-center justify-center text-center gap-1">
		<div>
			<div>
				<span className='text-orange-400'>that</span> <span className='text-blue-400'>butterfly</span> is awesome
			</div>
			<div>
				<span className='text-orange-400'>esa</span> <span className='text-blue-400'>mariposa</span> es genial
			</div>
		</div>

		<div>
			<div>
				<span className='text-orange-400'>that</span> <span className='text-blue-400'>one</span> is awesome
			</div>
			<div>
				<span className='text-orange-400'>esa</span> es genial
			</div>
		</div>
</div>

<div className="flex items-center justify-center flex-col text-center gap-1">
		<div>
			<div>
				<span className='text-orange-400'>these </span> <span className='text-blue-400'>cats</span> are perfect
			</div>
			<div>
				<span className='text-orange-400'>estas</span> <span className='text-blue-400'>gatos</span> son perfecto
			</div>
		</div>

		<div>
			<div>
				<span className='text-orange-400'>these </span> <span className='text-blue-400'>ones</span> are really wonderful
			</div>
			<div>
				<span className='text-orange-400'>estas</span> son realmente maravilloso
			</div>
		</div>
</div>


<div className="flex items-center justify-center flex-col text-center gap-1">

		<div>
			<div>
				<span className='text-orange-400'>those </span> <span className='text-blue-400'>sidewalk</span> are confusing
			</div>
			<div>
				<span className='text-orange-400'>esas</span> <span className='text-blue-400'>veredas</span> son realmente confusas
			</div>
		</div>

		<div>
			<div>
				<span className='text-orange-400'>those </span> <span className='text-blue-400'>ones</span> are confusing
			</div>
			<div>
				<span className='text-orange-400'>esos</span> son realmente confuso
			</div>
		</div>
</div>


	</div>
)} / >

	<div className="flex flex-col items-center justify-center text-center">
		<img src={thisOneImg} alt="this one image"/>
	</div>

	<ExplanationContainer  explanation={<>
there's less specificity when you don't include the <span className='text-blue-400'>noun</span>, it's more general.
		</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
			<div>
				<div>
					<span className='text-orange-400'>this</span> is bad
				</div>
				<div>
					<span className='text-orange-400'>esto</span> es malo
				</div>
			</div>

			<div>
				<div>
					<span className='text-orange-400'>that</span>'s not good
				</div>
				<div>
					<span className='text-orange-400'>eso</span> no es bueno
				</div>
			</div>


			<div>
				<div>
					<span className='text-orange-400'>these</span> don't feel cold
				</div>
				<div>
					<span className='text-orange-400'>estos</span> no se sienten frio
				</div>
			</div>


			<div>
				<div>
					<span className='text-orange-400'>those</span> are great
				</div>
				<div>
					<span className='text-orange-400'>esos</span> son genial
				</div>
			</div>
	</div>)} / >
	<Word word={[(<><span className="textSize-3">To</span> ask</>), (<>preguntar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> answer</>), (<>responder</>)]}/>
	<div>you can ask</div>
	<div className="flex flex-col items-center justify-center text-center p-5 ">
		<img src={whichFruitImg} className='rounded-full h-96' alt="this one"/>
	</div>
	<TinyExplanationContainer  explanation={<>.. or you can ask.. </>} / >
	<div className="flex flex-col items-center justify-center text-center  p-5">
		<img src={whichOneImg} className='rounded-full h-96 ' alt="this fruit"/>
	</div>
		 .. And then you can answer..
	<div className="flex flex-col items-center justify-center text-center  p-5">
		<img src={thisFruitImg} className='rounded-full h-96 ' alt="this fruit"/>
	</div>
		 .. Or you can answer..
	<div className="flex flex-col items-center justify-center text-center  p-5">
		<img src={thisOneFruitImg} className='rounded-full h-96 ' alt="this fruit"/>
	</div>


	<Word word={[(<>used</>), (<>usado</>)]}/>
	<ExplanationContainer  explanation={<> <span className='text-blue-400'>one</span> is also used to replace other <span className='text-blue-400'>nouns</span> when you or the other person/people know what you talk about</>} example={(
		<div className="flex flex-col items-center justify-center text-center gap-4">

		<div>
			<div>
				you're the <span className='text-blue-400'>lion</span> 
			</div>
			<div>
				you're the <span className='text-blue-400'>one</span> 
			</div>
		</div>
		

		<div>
			<div>
				give me the beautiful <span className='text-blue-400'>cat</span> 
			</div>
			<div>
				give me the beautiful <span className='text-blue-400'>one</span> 
			</div>
		</div>

	</div>)} / >


	<TitleContainer  title={<> <span className='text-amber-400'>every</span> , <span className='text-amber-400'>some</span>, <span className='text-amber-400'>no</span> and <span className='text-amber-400'>any</span></>} / >
<Word word={[(<>mixed</>), (<>mesclado</>)]}/>
<Word word={[(<>thing</>), (<>cosa</>)]}/>
<Word word={[(<>while</>), (<>mientras</>)]}/>
<Word word={[(<>also</>), (<>tambien</>)]}/>
<Word word={[(<>special</>), (<>especial</>)]}/>

<ExplanationContainer  explanation={<>while we use <span className='text-blue-400'>a</span> for singular nouns, for plural or uncountable nouns  We use <span className='text-blue-400'>some</span> and <span className='text-blue-400'>any</span>. Specially for talking about things with indefinite amount </>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
	<div>I want <span className='text-blue-400'>an</span> apple</div>
	<div>yo quiero <span className='text-blue-400'>una</span> manzana</div>
</div>


<div>
	<div>I want <span className='text-blue-400'>three</span> apples </div>
	<div>yo quiero <span className='text-blue-400'>tres</span> manzanas</div>
</div>

<div>
	<div>I want <span className='text-blue-400'>some</span> apples</div>
	<div>quiero <span className='text-blue-400'>algunas</span> manzanas</div>
</div>
	</div>)} / >

<ExplanationContainer  explanation={<> <span className='text-blue-400'>Some</span>  is used for positive sentences</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
	<div>I can give you <span className='text-blue-400'>some</span> potatoes</div>
	<div>puedo darte <span className='text-blue-400'>algunas</span> papas</div>
</div>


<div>
	<div>I want <span className='text-blue-400'>some</span> tables!</div>
	<div>quiero <span className='text-blue-400'>algunas</span> mesas!</div>
</div>


<div>
	<div>eating <span className='text-blue-400'>some</span> vegetables is not fun!</div>
	<div>comer <span className='text-blue-400'>algunos</span> vegetales no es divertido!</div>
</div>

</div>)} / >


	<ExplanationContainer  explanation={<><span className='text-blue-400'>Any</span> is used in interrogative sentences or negative sentences</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
	<div>does she want <span className='text-blue-400'>any</span> ideas?</div>
	<div>¿ella quiere <span className='text-blue-400'>algunas</span> ideas?</div>
</div>

<div>
	<div>Do you have any <span className='text-blue-400'>any</span> fruits?</div>
	<div>¿Tenés <span className='text-blue-400'>algunas</span> fruta?</div>
</div>


<div>
	<div>I don't have <span className='text-blue-400'>any</span> pen</div>
	<div>No tengo <span className='text-blue-400'>ninguna</span> lapicera</div>
</div>


<div>
	<div>She doesn't want <span className='text-blue-400'>any</span> animal</div>
	<div>Ella no quiere <span className='text-blue-400'>ningun</span> animal</div>
</div>

	</div>)} / >

<ExplanationContainer  explanation={<>we use <span className='text-blue-400'>some</span> in a question sometimes, but it's only used when we limit what we offer to the other person. </>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
	<div>Can I get you <span className='text-blue-400'>some</span>thing to drink? – Coffee, or tea?</div>
	<div>puedo obtenerte <span className='text-blue-400'>alguna</span> cosa para tomar? - cafe o te?</div>
</div>

<div>
	<div>Can I get you <span className='text-blue-400'>any</span>thing to drink? <span className='text-orange-400'>(there are a lot of drinks)</span></div>
	<div>puedo obtenerte <span className='text-blue-400'>alguna</span> cosa para tomar? <span className='text-orange-400'>(hay un monton de bebidas)</span></div>
</div>

</div>)} / >

<ExplanationContainer  explanation={<>Notice how <span className='text-blue-400'>any</span> is used when there's a lack of that thing(the english equivalent for the spanish word <span className='text-blue-400'>ningun/ninguno/ninguna</span>)</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
<div>
	<div>She doesn't have <span className='text-blue-400'>any</span> houses</div>
	<div>Ella no tiene <span className='text-blue-400'>algunas</span>(literal translation) casas</div>
	<div>Ella no tiene <span className='text-blue-400'>ninguna</span>(proper translation) casa</div>
</div>
<div>
	<div>You don't have <span className='text-blue-400'>any</span> fire</div>
	<div>Vos no tenes <span className='text-blue-400'>algun</span>(literal translation) fuego</div>
	<div>Vos no tenés <span className='text-blue-400'>ningun</span>(proper translation) fuego</div>
</div>
</div>)} / >

	<Word word={[(<><span className="textSize-3">To</span> Matter</>), (<>importar</>)]}/>
	<Word word={[(<>no matter which</>), (<>sin importar cual</>)]}/>
// give more examples
<ExplanationContainer  explanation={<>
if you use <span className='text-blue-400'>any</span> with positive nouns is like saying "not matter which"(it's the spanish equivalent of <span className='text-blue-400'>cualquier</span>, <span className='text-blue-400'>cualquiera</span>)
</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
<div className="flex flex-col items-center justify-center text-center gap-2">
	<div>
	<div>she can kill <span className='text-blue-400'>any</span> cat</div>
	<div>ella puede matar <span className='text-blue-400'>cualquier</span> gato</div>
	</div>


	<div>
	<div>she can kill cats <span className='text-blue-400'>no matter which</span></div>
	<div>ella puede matar gatos <span className='text-blue-400'>sin importar cual</span> </div>
	</div>
</div>


<div >
	<div>I want <span className='text-blue-400'>any</span>thing</div>
	<div>quiero <span className='text-blue-400'>cualquier</span> cosa</div>
</div>


<div >
	<div>Amanda likes <span className='text-blue-400'>any</span> dog</div>
	<div>a amanda le gusta <span className='text-blue-400'>cualquier</span> perro</div>
</div>

</div>)} / >

<ExplanationContainer  explanation={<>we use <span className='text-blue-400'>every</span> when all the amount is present. we use <span className='text-blue-400'>every</span> in <span className='text-orange-400'>singular</span>(the spanish equivalent <span className='text-blue-400'>todos</span> is used in <span className='text-purple-400'>plural</span>)</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
	<div> <span className='text-blue-400'>every</span><span className='text-orange-400'> cat is</span> great </div>
	<div> <span className='text-blue-400'>todos</span><span className='text-purple-400'> los gatos</span> <span className='text-purple-400'>son</span>  geniales </div>
</div>


<div>
	<div> <span className='text-blue-400'>every</span><span className='text-orange-400'> sibling wants</span> to be a youtuber in this family </div>
	<div> <span className='text-blue-400'>todos/todas</span> <span className='text-purple-400'>los hermanos/hermanas quieren</span>  ser youtuber en esta family </div>
</div>

<div>
	<div> <span className='text-blue-400'>every</span> <span className='text-orange-400'>computer has</span> keyboards </div>
	<div> <span className='text-blue-400'>todas</span> <span className='text-purple-400'>las computadoras tienen</span> teclado </div>
</div>
</div>)} / >


<ExplanationContainer  explanation={<> <span className='text-blue-400'>each</span> is like <span className='text-blue-400'>every</span>, but we use it to talk about the <span className='text-orange-400'>noun</span> individually</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

<div>
<div> <span className='text-blue-400'>each</span>  <span className='text-orange-400'>cat</span>  is different </div>
<div> <span className='text-blue-400'>cada</span>  <span className='text-orange-400'>gata</span> es diferente </div>
</div>



<div>
	<div>I killed <span className='text-blue-400'>each</span>  <span className='text-orange-400'>women</span>  in the house</div>
	<div> yo maté a <span className='text-blue-400'>cada</span>  <span className='text-orange-400'>gata</span></div>
</div>


<div>
		<div>I play Minecraft with <span className='text-blue-400'>each</span>  <span className='text-orange-400'>parent</span>  <span className='text-blue-400'>each</span>  <span className='text-orange-400'>night</span>
		</div>
	<div>yo juego Minecraft con <span className='text-blue-400'>cada</span>  <span className='text-orange-400'>padre/madre</span>  <span className='text-blue-400'>cada</span>  <span className='text-orange-400'>noche</span>
		 </div>

</div>

</div>)} / >

<ExplanationContainer  explanation={<>
<span className='text-blue-400'>each</span> can also be used as <span className='text-blue-400'>every person/animal/object individually</span>
	</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">

<div>
	<div>get one cookie <span className='text-blue-400'>each</span></div>
	<div>obtengan una galletita <span className='text-blue-400'>cada uno</span></div>
</div>


<div>
	<div>it costs 10$ <span className='text-blue-400'>each</span></div>
	<div>cuestan 10$ <span className='text-blue-400'>cada uno</span></div>
</div>

</div>)} / >

	<ExplanationContainer  explanation={<>we use <span className='text-orange-400'>no</span> to negate that you have something(just like <span className='text-orange-400'>not any</span>)</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
		<div>I have <span className='text-orange-400'>no</span> cat</div>
		<div> <span className='text-orange-400'>no</span> tengo <span className='text-orange-400'>ningun</span> gato</div>
</div>


<div>
		<div><span className='text-orange-400'>no</span> monkey eats noodles</div>
		<div> <span className='text-orange-400'>ningun</span> mono come fideos</div>
</div>

	</div>)} / >

	<ExplanationContainer  explanation={<>notice you have to negate <span className='text-orange-400'>any</span> to say the exact same</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
	<div>the cat wants <span className='text-orange-400'>no</span> fish</div>
	<div>the cat does <span className='text-orange-400'>not</span> want <span className='text-orange-400'>any</span> fish</div>

	<div>el gato <span className='text-orange-400'>no</span> quiere <span className='text-orange-400'>ningun</span> pescado</div>
		</div>

<div>
	<div>in this city, <span className='text-orange-400'>no</span> truck is fast.</div>
	<div>in this city, <span className='text-orange-400'>any</span> truck is <span className='text-orange-400'>not</span> fast.</div>
	<div>en esta ciudad, <span className='text-orange-400'>ningun</span> camion rapido.</div>
</div>


	</div>)} / >

	<TitleContainer  title={<> <span className='text-blue-400'>every</span> , <span className='text-blue-400'>no</span>, <span className='text-blue-400'>any</span>, <span className='text-blue-400'>some</span> + <span className='text-orange-400'>one</span>/<span className='text-orange-400'>body</span></>} / >

<ExplanationContainer  explanation={<>
words like <span className='text-blue-400'>every</span>,<span className='text-blue-400'>no</span>,<span className='text-blue-400'>any</span>, and <span className='text-blue-400'>some</span> can be used with <span className='text-orange-400'>body</span> to talk about people
	</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
<div>
		<div> <span className='text-blue-400'>every</span><span className='text-orange-400'>body</span>  can do that </div>
		<div> <span className='text-blue-400'>todas</span><span className='text-orange-400'> las personas</span>  pueden hacer eso </div>
		<div> <span className='text-blue-400'>todos</span>  pueden hacer eso </div>
		<div></div>
</div>


<div>
		<div> <span className='text-blue-400'>no</span><span className='text-orange-400'>body</span> can do that </div>
		<div> <span className='text-blue-400'>ninguna</span> <span className='text-orange-400'>persona</span>  puede hacer eso </div>
		<div> <span className='text-blue-400'>nadie</span> puede hacer eso </div>
		<div></div>
</div>


<div>
		<div> does <span className='text-blue-400'>any</span><span className='text-orange-400'>body</span> go to school on saturday? </div>
		<div> <span className='text-blue-400'>alguna</span> <span className='text-orange-400'>persona</span> va a la escuela los sabados? </div>
		<div> <span className='text-blue-400'>alguien</span> va a la escuela los sabados? </div>
		<div></div>
</div>


<div>
		<div> I don't hate <span className='text-blue-400'>any</span><span className='text-orange-400'>body</span></div>
		<div> no odio a <span className='text-blue-400'>ninguna</span><span className='text-orange-400'> persona</span></div>
		<div> no odio a <span className='text-blue-400'>nadie</span></div>
</div>


<div>
		<div><span className='text-blue-400'>some</span><span className='text-orange-400'>body</span> is an imposter among us</div>
		<div><span className='text-blue-400'>alguna</span><span className='text-orange-400'> persona</span> es un impostor entre nosotros</div>
		<div><span className='text-blue-400'>alguien</span> es un impostor entre nosotros</div>
</div>


</div>)} / >



<ExplanationContainer  explanation={<>
 when it comes to talking to people, it's the same case with <span className='text-orange-400'>one</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
<div>
		<div> <span className='text-blue-400'>every</span><span className='text-orange-400'>one</span>  can do that </div>
		<div> <span className='text-blue-400'>todas</span><span className='text-orange-400'> las personas</span>  pueden hacer eso </div>
		<div> <span className='text-blue-400'>todos</span>  pueden hacer eso </div>
		<div></div>
</div>


<div>
		<div> <span className='text-blue-400'>no</span><span className='text-orange-400'>one</span> can do that </div>
		<div> <span className='text-blue-400'>ninguna</span> <span className='text-orange-400'>persona</span>  puede hacer eso </div>
		<div> <span className='text-blue-400'>nadie</span> puede hacer eso </div>
		<div></div>
</div>


<div>
		<div> does <span className='text-blue-400'>any</span><span className='text-orange-400'>one</span> go to school on saturday? </div>
		<div> <span className='text-blue-400'>alguna</span> <span className='text-orange-400'>persona</span> va a la escuela los sabados? </div>
		<div> <span className='text-blue-400'>alguien</span> va a la escuela los sabados? </div>
		<div></div>
</div>


<div>
		<div> I don't hate <span className='text-blue-400'>any</span><span className='text-orange-400'>one</span></div>
		<div> no odio a <span className='text-blue-400'>ninguna</span><span className='text-orange-400'> persona</span></div>
		<div> no odio a <span className='text-blue-400'>nadie</span></div>
</div>


<div>
		<div><span className='text-blue-400'>some</span><span className='text-orange-400'>one</span> is an imposter among us</div>
		<div><span className='text-blue-400'>alguna</span><span className='text-orange-400'> persona</span> es un impostor entre nosotros</div>
		<div><span className='text-blue-400'>alguien</span> es un impostor entre nosotros</div>
</div>


</div>)} / >


	<TitleContainer  title={<> <span className='text-blue-400'>every</span> , <span className='text-blue-400'>no</span>, <span className='text-blue-400'>any</span>, <span className='text-blue-400'>some</span> + <span className='text-orange-400'>where</span></>} / >

<ExplanationContainer  explanation={<>
words like <span className='text-blue-400'>every</span>,<span className='text-blue-400'>no</span>,<span className='text-blue-400'>any</span>, and <span className='text-blue-400'>some</span> can be used with <span className='text-orange-400'>where</span> to talk about places
	</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
<div>
		<div> it's wonderful <span className='text-blue-400'>every</span><span className='text-orange-400'>where</span></div>
		<div> es maravilloso en <span className='text-blue-400'>todos</span><span className='text-orange-400'> los lugares</span></div>
		<div> es maravilloso en <span className='text-blue-400'>todos</span><span className='text-orange-400'> lados</span></div>
</div>


<div>
		<div> <span className='text-blue-400'>no</span><span className='text-orange-400'>where</span> is perfect</div>
		<div>en <span className='text-blue-400'>ningun</span> <span className='text-orange-400'>lugar</span> es perfecto </div>
		<div>en <span className='text-blue-400'>ningun</span> <span className='text-orange-400'>lado</span> es perfecto </div>
</div>


<div>
		<div>Can you find your keys <span className='text-blue-400'>any</span> <span className='text-orange-400'>where</span>?</div>
		<div>podés encontrar tus llaves en  <span className='text-blue-400'>algun</span> <span className='text-orange-400'>lugar</span>?</div>
		<div>podés encontrar tus llaves en  <span className='text-blue-400'>algun</span> <span className='text-orange-400'>lado</span>?</div>
</div>


<div>
		<div> I don't like <span className='text-blue-400'>any</span><span className='text-orange-400'>where</span></div>
		<div> no me gusta <span className='text-blue-400'>ningun</span> <span className='text-orange-400'>lado</span></div>
</div>


<div>
		<div>there's dancing cat <span className='text-blue-400'>some</span><span className='text-orange-400'>where</span></div>
		<div>hay un gato bailarin en <span className='text-blue-400'>algun</span><span className='text-orange-400'> lugar</span></div>
		<div>hay un gato bailarin en <span className='text-blue-400'>algun</span><span className='text-orange-400'> lado</span></div>
</div>


</div>)} / >


	<TitleContainer  title={<> <span className='text-blue-400'>every</span> , <span className='text-blue-400'>no</span>, <span className='text-blue-400'>any</span>, <span className='text-blue-400'>some</span> + <span className='text-orange-400'>thing</span></>} / >

<ExplanationContainer  explanation={<>
words like <span className='text-blue-400'>every</span>,<span className='text-blue-400'>no</span>,<span className='text-blue-400'>any</span>, and <span className='text-blue-400'>some</span> can be used with <span className='text-orange-400'>things</span> to talk about things(alright, this is funny.. I know..)
	</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
<div>
		<div> <span className='text-blue-400'>every</span><span className='text-orange-400'>thing</span> is corrupted</div>
		<div> <span className='text-blue-400'>todas</span><span className='text-orange-400'> los cosas</span> están corruptas</div>
		<div> <span className='text-blue-400'>todo</span> está corrupto</div>
</div>


<div>
		<div> <span className='text-blue-400'>no</span><span className='text-orange-400'>thing</span> is good in here</div>
		<div><span className='text-blue-400'>ninguna</span> <span className='text-orange-400'>cosa</span> es bueno acá</div>
		<div><span className='text-blue-400'>nada</span> es bueno acá</div>
</div>


<div>
		<div>is  <span className='text-blue-400'>any</span><span className='text-orange-400'>thing</span> good in here?</div>
		<div>es  <span className='text-blue-400'>alguna</span><span className='text-orange-400'>cosa</span> buena acá?</div>
		<div>es  <span className='text-blue-400'>algo</span> buena acá?</div>
</div>


<div>
		<div> I don't want to do <span className='text-blue-400'>any</span><span className='text-orange-400'>thing</span></div>
		<div> no quiero hacer <span className='text-blue-400'>nada</span></div>
</div>


<div>
		<div> <span className='text-blue-400'>some</span><span className='text-orange-400'>thing</span> is off</div>
		<div> <span className='text-blue-400'>alguna</span><span className='text-orange-400'> cosa</span> está mal(alguna cosa no encaja)</div>
		<div> <span className='text-blue-400'>algo</span> está mal(algo no encaja)</div>
</div>


</div>)} / >


<ExplanationContainer  explanation={<>
hello world
</>} example={(<div className="flex flex-col items-center justify-center text-center">
</div>)} / >
	</>);
}

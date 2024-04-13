import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

export function A1_6(){
return (<> 
<TitleContainer  title={<>Verb</>} / >
	<Word word={[(<><span className="textSize-3">To</span> feel</>), (<>sentir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> worry</>), (<>preocupar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> surprise</>), (<>sorprender</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> confuse</>), (<>confundir</>)]}/>

	<TitleContainer  title={<>Pronoun</>} / >
	<Word word={[(<>they</>), (<>ellos/ellas(hablando de otras personas pero más de 1)</>)]}/>

	<TitleContainer  title={<>adjetivos que terminan con -ed y -ing</>} / >
	<ExplanationContainer  explanation={<>adjetivos que terminan con -ed como:tir<span className='text-orange-500'>ed</span>, bor<span className='text-orange-500'>ed</span>, worr<span className='text-orange-500'>ied</span>, surpris<span className='text-orange-500'>ed</span>, confus<span className='text-orange-500'>ed</span>, etc.. Pueden convertirse en otras palabras terminando con 'ing' para decir que ese sentimiento le causan a otras personas como: bor<span className='text-sky-500'>ing</span>, worry<span className='text-sky-500'>ing</span>, surpris<span className='text-sky-500'>ing</span>, confus<span className='text-sky-500'>ing</span> </>} example={(<><div>bor<span className='text-sky-500'>ing</span>  dog</div>
<div>bor<span className='text-orange-500'>ed</span> dog</div></>)} / >

<ExplanationContainer  explanation={<>'boring dog'(perro aburrido) es un perro que hace sentir 'bored'(aburrido) a otros perros,mientras que 'bored cat' significa que el gato está aburrido, no que hace sentir a los demas aburrido</>} example={(<>I feel tir<span className='text-orange-500'>ed</span>. The dog is tir<span className='text-sky-500'>ing</span></>)} / >

	<ExplanationContainer  explanation={<>lo mismo con las otras palabras, 'a worrying fish' significa 'un pez preocupante' porque preocupa a los demas mientras que 'a worried fish' es un pescado que está aburrido, no aburre a los demas.</>} example={(<>
<div>the bor<span className='text-orange-500'>ed</span> cat hates the bor<span className='text-sky-500'>ing</span> dog</div>
<div>the surpris<span className='text-sky-500'>ing</span> cat surprises the surpris<span className='text-orange-500'>ed</span> fly</div>
		</>)} / >

	<TitleContainer  title={<>list of adjetives</>} / >
	<ul> <li><Word word={[(<span className="text-white">tir<span className='text-orange-500'>ed</span></span>), (<span className="text-white">tir<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">worr<span className='text-orange-500'>ied</span></span>), (<span className="text-white">worry<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">concern<span className='text-orange-500'>ed</span></span>), (<span className="text-white">concern<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">surpris<span className='text-orange-500'>ed</span></span>), (<span className="text-white">surpris<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">bor<span className='text-orange-500'>ed</span></span>), (<span className="text-white">bor<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">interest<span className='text-orange-500'>ed</span></span>), (<span className="text-white">interest<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">dissapoint<span className='text-orange-500'>ed</span></span>), (<span className="text-white">dissapoint<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">shock<span className='text-orange-500'>ed</span></span>), (<span className="text-white">shock<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">embarras<span className='text-orange-500'>ed</span></span>), (<span className="text-white">embarras<span className='text-sky-500'>ing</span></span>)]}/></li>
	<li><Word word={[(<span className="text-white">confus<span className='text-orange-500'>ed</span></span>), (<span className="text-white">confus<span className='text-sky-500'>ing</span></span>)]}/></li>
	</ul>
<TitleContainer  title={<>exersices</>} / >
	<ListOfTest list={
		[
		[(<>ellas se sienten cansada</>), (<>they feel tired</>)],
		[(<>ella se siente cansada</>), (<>she feels tired</>)],
		[(<>nosotros nos sentimos shockeados. Ellos se sienten sorprendidos</>), (<>We feel Shocked. They feel surprised</>)],
		[(<>me siento cansado en el bosque verde</>), (<>I feel tired in the green forest</>)],
		[(<>el gato preocupante se preocupa</>), (<>the worrying cat worries </>)],
		[(<>la gallina purpura confunde</>), (<>the purple chicken confuses </>)],
		[(<> nos sentimos feliz </>), (<>we feel happy</>)],
		[(<>el shockea </>), (<>he shocks </>)],
		[(<>ellos schockean </>), (<>they shock </>)],
		[(<>ella shockea </>), (<>she shocks </>)],
		[(<>ellas shockean </>), (<>they shock </>)],
		[(<>el caballo decepcionante </>), (<>the dissapointing horse </>)],
		[(<>el vaca decepcionada </>), (<>the dissapointed cow</>)],
		[(<>me siento aburrido en el bosque aburrido </>), (<>I feel bored in the boring forest</>)],
		[(<>el perro feliz sorprende </>), (<>the happy dog surprises</>)],
		[(<>tengo un caballo triste </>), (<>I have a sad horse</>)],
		[(<>me siento cansado </>), (<>I feel tired</>)],
		[(<>el cerdo cansador </>), (<>the tiring pig</>)],
		[(<>me siento avergonzado. </>), (<>I feel embarrasing</>)],
		[(<> la abeja preocupa el perro. el perro se siente asustado </>), (<>the bee worries the dog. the dog feels afraid</>)],
		[(<> tengo veinte obejas asustadas </>), (<>I have twenty afraid sheeps</>)],
		[(<> los gatos felices cocinan </>), (<>the happy cats cook</>)],
		[(<> el perro feliz cocina un pescado </>), (<>the happy dog cook a fish</>)],
		[(<> me siento feliz </>), (<>I feel happy</>)],
		]
	} / >
</>);}

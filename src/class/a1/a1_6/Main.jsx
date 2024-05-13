import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

export function A1_6(){
	return (<> 
		<TitleContainer  title={<>Verb</>} / >
		<div className="flex flex-col items-center justify-center text-center gap-4">
			<div>
				<Word word={[(<><span className="textSize-3">To</span> feel</>), (<>sentir/sentirse</>)]}/>
				<Word word={[(<> <span className='text-blue-400'>I feel</span>  bored</>), (<> <span className='text-blue-400'>me siento</span>  aburrido</>)]}/>
				<Word word={[(<> <span className='text-blue-400'>you feel</span>  bored</>), (<> <span className='text-blue-400'>te sientes</span>  aburrido</>)]}/>
			</div>
			<div>
				<Word word={[(<><span className="textSize-3">To</span> worry</>), (<>preocuparse</>)]}/>
				<Word word={[(<><span className='text-blue-400'>I worry</span> to people </>), (<> <span className='text-blue-400'>yo preocupo</span> a la gente </>)]}/>
				<Word word={[(<><span className='text-blue-400'>I worry</span> </>), (<> <span className='text-blue-400'>yo me preocupo</span> </>)]}/>
				<Word word={[(<> <span className='text-blue-400'>she worries</span> </>), (<> <span className='text-blue-400'>ella se preocupa</span> </>)]}/>
			</div>

			<div>
				<Word word={[(<><span className="textSize-3">To</span> surprise</>), (<>sorprender/sorprenderse</>)]}/>
				<Word word={[(<> <span className='text-blue-400'>you surprise</span> </>), (<> <span className='text-blue-400'>vos te sorprendes</span></>)]}/>
				<Word word={[(<> <span className='text-blue-400'>you surprise</span> to me </>), (<><span className='text-blue-400'>vos</span> me <span className='text-blue-400'>sorprendes</span> a mí </>)]}/>
			</div>

			<div>
				<Word word={[(<><span className="textSize-3">To</span> confuse</>), (<>confundirse/confundir</>)]}/>
				<Word word={[(<> <span className='text-blue-400'>I confuse</span></>), (<> <span className='text-blue-400'>me confundo</span> </>)]}/>
				<Word word={[(<> <span className='text-blue-400'>I confuse</span> to you</>), (<> <span className='text-blue-400'>yo</span> te <span className='text-blue-400'>confundo</span> a tí </>)]}/>
			</div>

			<div>
				<Word word={[(<><span className="textSize-3">To</span> disappoint</>), (<>decepcionar</>)]}/>
				<Word word={[(<> <span className='text-blue-400'>he dissapoints</span> </>), (<> <span className='text-blue-400'>él decepciona</span> </>)]}/>
			</div>
			<div>
				<Word word={[(<><span className="textSize-3">To</span> bore</>), (<>aburrir/aburrirse</>)]}/>
				<Word word={[(<> <span className='text-blue-400'>you bore</span> </>), (<> <span className='text-blue-400'> te aburres</span></>)]}/>
				<Word word={[(<> <span className='text-blue-400'>you bore</span> </>), (<> <span className='text-blue-400'>aburres</span></>)]}/>
			</div>
		</div>
		<TitleContainer  title={<>Pronoun</>} / >
		<Word word={[(<>they</>), (<>ellos/ellas(hablando de otras personas pero más de 1)</>)]}/>

		<TitleContainer  title={<>adjetivos que terminan con -ed y -ing</>} / >
		<ExplanationContainer  explanation={<>adjetivos que terminan con -ed como:tir<span className='text-orange-500'>ed</span>, bor<span className='text-orange-500'>ed</span>, worr<span className='text-orange-500'>ied</span>, surpris<span className='text-orange-500'>ed</span>, confus<span className='text-orange-500'>ed</span>, etc.. Pueden convertirse en otras palabras terminando con 'ing' para decir que ese sentimiento le causan a otras personas como: bor<span className='text-sky-500'>ing</span>, worry<span className='text-sky-500'>ing</span>, surpris<span className='text-sky-500'>ing</span>, confus<span className='text-sky-500'>ing</span> </>} example={(<>

			<div>bor<span className='text-sky-500'>ing</span>  dog(es un perro que hace sentir otros perros aburrido)</div>
			<div>bor<span className='text-orange-500'>ed</span> dog(ese perro se siente aburrido)</div>


			</>)} / >

		<ExplanationContainer  explanation={<> 'bor<span className='text-sky-400'>ing</span>  dog'(perro aburrido) es un perro que hace sentir 'bor<span className='text-orange-400'>ed</span>'(aburrido) a otros perros,mientras que 'bor<span className='text-orange-400'>ed</span> cat' significa que el gato está aburrido, no que hace sentir a los demas aburrido</>} example={(<>I feel tir<span className='text-orange-500'>ed</span>. The dog is tir<span className='text-sky-500'>ing</span></>)} / >

		<ExplanationContainer  explanation={<>lo mismo con las otras palabras. 'a worry<span className='text-orange-400'>ing</span> fish' significa 'un pez preocupante' porque preocupa a los demas mientras que 'a worri<span className='text-blue-400'>ed</span>  fish' es un pescado que está preocupado, no preocupa a los demas.</>} example={(<>
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
		<li><Word word={[(<span className="text-white">disappoint<span className='text-orange-500'>ed</span></span>), (<span className="text-white">disappoint<span className='text-sky-500'>ing</span></span>)]}/></li>
		<li><Word word={[(<span className="text-white">shock<span className='text-orange-500'>ed</span></span>), (<span className="text-white">shock<span className='text-sky-500'>ing</span></span>)]}/></li>
		<li><Word word={[(<span className="text-white">embarras<span className='text-orange-500'>ed</span></span>), (<span className="text-white">embarras<span className='text-sky-500'>ing</span></span>)]}/></li>
		<li><Word word={[(<span className="text-white">confus<span className='text-orange-500'>ed</span></span>), (<span className="text-white">confus<span className='text-sky-500'>ing</span></span>)]}/></li>
		</ul>
		<TitleContainer  title={<>exersices</>} / >
		<ListOfTest list={
			[
				[(<>ellas se sienten cansada</>), (<>they feel tired</>)],
				[(<>ella se siente cansada</>), (<>she feels tired</>)],
				[(<>they feel happy</>), (<>ellas se sienten feliz</>)],
				[(<>nosotros nos sentimos shockeados. Ellos se sienten sorprendidos</>), (<>We feel Shocked. They feel surprised</>)],
				[(<>me siento cansado en el bosque verde</>), (<>I feel tired in the green forest</>)],
				[(<>el gato preocupante se preocupa</>), (<>the worrying cat worries </>)],
				[(<>la gallina purpura confunde</>), (<>the purple chicken confuses </>)],
				[(<> nos sentimos feliz </>), (<>we feel happy</>)],
				[(<>el shockea </>), (<>he shocks </>)],
				[(<>ellos schockean </>), (<>they shock </>)],
				[(<>ella shockea </>), (<>she shocks </>)],
				[(<>ellas shockean </>), (<>they shock </>)],
				[(<>el caballo decepcionante </>), (<>the disappointing horse </>)],
				[(<>el vaca decepcionada </>), (<>the disappointed cow</>)],
				[(<>the embarrasing orange chicken</>), (<>la gallina naranja avergonzante</>)],
				[(<>me siento aburrido en el bosque aburrido </>), (<>I feel bored in the boring forest</>)],
				[(<>el perro feliz sorprende </>), (<>the happy dog surprises</>)],
				[(<>tengo un caballo triste </>), (<>I have a sad horse</>)],
				[(<>me siento cansado </>), (<>I feel tired</>)],
				[(<>el cerdo cansador </>), (<>the tiring pig</>)],
				[(<>the spider feels tired</>), (<>la arañá se siente cansada</>)],
				[(<>me siento avergonzado. </>), (<>I feel embarrasing</>)],
				[(<> la abeja preocupa el perro. el perro se siente asustado </>), (<>the bee worries the dog. the dog feels afraid</>)],
				[(<> tengo veinte obejas asustadas </>), (<>I have twenty afraid sheeps</>)],
				[(<> los gatos felices cocinan </>), (<>the happy cats cook</>)],
				[(<> el perro feliz cocina un pescado </>), (<>the happy dog cook a fish</>)],
				[(<> me siento feliz </>), (<>I feel happy</>)],
			]
		} / >
		</>);}

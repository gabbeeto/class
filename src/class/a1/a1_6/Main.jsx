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
	<ExplanationContainer  explanation={<>adjetivos que terminan con -ed como:tired, bored, worried, surprised, confused, etc.. Pueden convertirse en otras palabras terminando con 'ing' para decir que ese sentimiento le causan a otras personas como: boring, worrying, surprising, confusing </>} example={(<><div>boring dog</div>
<div>bored dog</div></>)} / >

<ExplanationContainer  explanation={<>'boring dog'(perro aburrido) es un perro que hace sentir 'bored'(aburrido) a otros perros,mientras que 'bored cat' significa que el gato está aburrido, no que hace sentir a los demas aburrido</>} example={(<>I feel tired. The dog is tiring</>)} / >

	<ExplanationContainer  explanation={<>lo mismo con las otras palabras, 'a worrying fish' significa 'un pez preocupante' porque preocupa a los demas mientras que 'a worried fish' es un pescado que está aburrido, no aburre a los demas.</>} example={(<>
<div>the bored cat hates the boring dog</div>
<div>the surprising cat surprises the surprised fly</div>
		</>)} / >

	<TitleContainer  title={<>list of adjetives</>} / >
	<ul> <li><Word word={[(<>tired</>), (<>tiring</>)]}/></li>
	<li><Word word={[(<>worried</>), (<>worrying</>)]}/></li>
	<li><Word word={[(<>concerned</>), (<>concerning</>)]}/></li>
	<li><Word word={[(<>surprised</>), (<>surprising</>)]}/></li>
	<li><Word word={[(<>bored</>), (<>boring</>)]}/></li>
	<li><Word word={[(<>interested</>), (<>interesting</>)]}/></li>
	<li><Word word={[(<>dissapointed</>), (<>dissapointing</>)]}/></li>
	<li><Word word={[(<>shocked</>), (<>shocking</>)]}/></li>
	<li><Word word={[(<>embarrased</>), (<>embarrasing</>)]}/></li>
	<li><Word word={[(<>confused</>), (<>confusing</>)]}/></li>
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
		]
	} / >
</>);}

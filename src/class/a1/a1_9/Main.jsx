import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'


export function A1_9(){
return (<> 

	<TitleContainer  title={<>here and there</>} / >
	<Word word={[(<>here</>), (<>aqui</>)]}/>
	<Word word={[(<>there</>), (<>ahí</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> Come</>), (<>venir</>)]}/>
	<TitleContainer  title={<>examples of here and there:</>} / >
	<Word word={[(<>she comes here </>), (<>ella viene acá</>)]}/>
	<Word word={[(<>I go there </>), (<>voy ahí</>)]}/>
	<TitleContainer  title={<>there is and there are</>} / >
	<ExplanationContainer  explanation={<>Ambos 'there is' y 'there are' significa hay de haber</>} example={(<div className="flex flex-col items-center justify-center text-center"> <div>there is a dog</div> <div>hay un perro</div></div>)} / >
<ExplanationContainer  explanation={<>Al igual que el verbo to be. se usa 'is' cuando hablas de otra persona/cosa y a la vez es solo una cosa/persona mientras que 'are' se usa cuando es más de 1.</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
	<div>
<div>There <span className='text-red-400'>is</span> one dog</div>
<div>hay un perro</div>
</div>
	<div>
<div>There <span className='text-red-400'>are</span> two dogs</div>
<div>hay dos perros</div>
</div>
	</div>)} / >
<TitleContainer  title={<>how to say no</>} / >
<ExplanationContainer  explanation={<>en las situaciones normales se le agrega 'do not' antes del verbo</>} example={(<div className="flex flex-col items-center justify-center text-center"><div>I eat rice</div><div>I do not eat rice</div></div>)} / >

<ExplanationContainer  explanation={<>cuando 'to do' no tiene el 'not' significa 'hacer'</>} example={(<div><div>you do homework</div><div>tu haces tarea</div>
	</div>)} / >


<ExplanationContainer  explanation={<>es posible usar 'to do' negandolo tambien</>} example={(<div><div>you do not do homework</div><div>tu no haces tarea</div>
	</div>)} / >


<ExplanationContainer  explanation={<>en tercera persona singular, el la s del verbo se va al 'do not' y se convierte en 'does not'</>} example={(<div  className="flex flex-col items-center justify-center text-center gap-4">

<div>
	<div>she eat<span className='text-red-400'>s</span> </div><div>she do<span className='text-red-400'>es</span> not eat</div>
</div>

	<div>
	<div>she has dogs</div><div>she does not have dogs</div>
	</div>

	</div>)} / >
<ExplanationContainer  explanation={<>con los verbos que funcionan raro como; 'to be', 'to may', 'to can', 'to must'.. Simplemente se e agrega el 'not' despues de esos verbos</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

<div>
<div>they are happy</div>
<div>they're not happy</div>
</div>

<div>
<div> he can eat rice</div>
<div> he can not eat rice</div>
</div>

<div>
	<div>she must drink water</div>
	<div>she must not drink water</div>
	</div>

</div>)} / >



	<TitleContainer  title={<>exercise</>} / >
<ListOfTest list={
	[
	[(<>ella no bebe agua</>), (<>she does not drink water</>)],
	[(<>nosotros no comemos en el edificio</>), (<>we do not eat inside building</>)],
	[(<>they eat in the forest</>), (<>ellos comen en el bosque</>)],
	[(<>they do not eat in the forest</>), (<>ellos no comen en el bosque</>)],
	[(<>el no puede tomar agua</>), (<>he can not drink water</>)],
	[(<>there is a dog in the house</>), (<>hay un perro en la casa</>)],
	]
} / >

<TitleContainer  title={<>abbreviations</>} / >

	<Word word={[(<><span className='text-white'>there is</span> a cow</>), (<><span className='text-white'>there's</span> a cow</>)]}/>
	<Word word={[(<>he <span className='text-white'>can not</span> eat</>), (<>he <span className='text-white'>can't</span> eat</>)]}/>
	<Word word={[(<>he <span className='text-white'>is not</span> happy</>), (<>he <span className='text-white'>isn't</span> happy</>)]}/>
	<Word word={[(<>they <span className='text-white'>are not</span> confusing</>), (<>they <span className='text-white'>aren't</span> confusing</>)]}/>
	<Word word={[(<>this <span className='text-white'>does not</span> feel shocking</>), (<>this <span className='text-white'>doesn't</span> feel shocking</>)]}/>
	<Word word={[(<>these dogs <span className='text-white'>do not</span> feel surprised</>), (<>these dogs <span className='text-white'>don't</span> feel surprised</>)]}/>

	<TitleContainer  title={<>exercise with abbreviations</>} / >

		<ListOfTest list={
			[
			[(<>Mike doesn't need to sleep</>), (<>Mike no necesita dormir</>)],
			[(<>hay una vaca verde en el bosque</>), (<>there's a green cow in the forest</>)],
			[(<>esas gatas no son felices acá</>), (<>those cats are not happy here</>)],
			[(<>no voy ahí</>), (<> I don't go there</>)],
			[(<>los gatos no están aqúí</>), (<> the cats aren't here</>)],
			[(<>ella no come pescado</>), (<> she doesn't eat fish</>)],
			[(<>los caballos no vienen a esta casa</>), (<> the horses don't come to this house</>)],
			[(<>ese gato está ahí </>), (<> that cat is there</>)],
			[(<>here is the book you want </>), (<> acá está el libro que querés</>)],
			[(<>querer ir a la playa no es cool  </>), (<> wanting to go to the beach is not cool</>)],
			[(<>I don't want to escape the forest  </>), (<> no me quiero escapar del bosque</>)],
			[(<>I don't need to eat cheese, the dog needs to  </>), (<> yo no necesito comer queso, el perro necesita</>)],
			[(<>no quiero ir a mi casa  </>), (<> I don't want to go to my house</>)],
			[(<>Maria no quiere comer  </>), (<> Maria doesn't want to eat</>)],
			[(<>nosotros no queremos manzanas cianes </>), (<> we don't want cyan apples</>)],
			[(<>Julia and Mario don't need pizza</>), (<>Julia y Mario no necesita pizza</>)],
			[(<>the cyan cat doesn't like potatoes</>), (<>el gato cian no le gusta las papas</>)],
			[(<>the purple cat likes potatoes</>), (<>el gato purpura le gusta las papas</>)],
			[(<>eating potato is not embarrasing</>), (<>comer papas no es avergozante</>)],
			]
		} / >

	</>);
}

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

	<Word word={[(<>there is a cow</>), (<>there's a cow</>)]}/>
	<Word word={[(<>he can not eat</>), (<>he can't eat</>)]}/>
	<Word word={[(<>he is not happy</>), (<>he isn't happy</>)]}/>
	<Word word={[(<>they are not confusing</>), (<>they aren't confusing</>)]}/>
	<Word word={[(<>this does not feel shocking</>), (<>this doesn't feel shocking</>)]}/>
	<Word word={[(<>these dogs do not feel surprised</>), (<>these dogs don't feel surprised</>)]}/>

	<TitleContainer  title={<>exercise with abbreviations</>} / >

		//continue with this later on
		<ListOfTest list={
			[
			[(<>hay una vaca verde en el bosque</>), (<>there's a green cow in the forest</>)],
			[(<>esas gatas no son felices acá</>), (<>those cats are not happy here</>)],
			[(<>no voy ahí</>), (<> I don't go there</>)],
			[(<>los gatos no están aqúí</>), (<> the cats aren't here</>)],
			[(<>ella no come pescado</>), (<> she doesn't eat fish</>)],
			[(<>los caballos no vienen a esta casa</>), (<> the horses don't come to this house</>)],
			]
		} / >

	</>);
}

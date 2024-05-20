import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'


export function A1_9() {
	return (<>

		<TitleContainer title={<>here and there</>} />
		<Word word={[(<>here</>), (<>aqui</>)]} />
		<Word word={[(<>there</>), (<>ahí</>)]} />
		<Word word={[(<><span className="textSize-3">To</span> Come</>), (<>venir</>)]} />
		<TitleContainer title={<>examples of here and there:</>} />
		<Word word={[(<>she comes here </>), (<>ella viene acá</>)]} />
		<Word word={[(<>I go there </>), (<>voy ahí</>)]} />
		<TitleContainer title={<> <span className='text-blue-400'>there is</span> and <span className='text-blue-400'>there are</span></>} />
		<ExplanationContainer explanation={<>Ambos <span className='text-blue-400'>there is</span> y <span className='text-blue-400'>there are</span>  significan <span className='text-blue-400'>hay</span>  de la palabra <span className='text-blue-400'>haber</span> </>} example={(<div className="flex flex-col items-center justify-center text-center"> <div>
			<span className='text-blue-400'>there is</span> a dog</div> <div> <span className='text-blue-400'>hay</span>  un perro</div></div>)} />


		<ExplanationContainer explanation={<>Al igual que el verbo to be. se usa <span className='text-red-400'>is</span>  cuando <span className='text-blue-400'>hay</span>   solo una cosa/persona mientras que <span className='text-red-400'>are</span>  se usa cuando es <span className='text-blue-400'>hay</span>  de 1.</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">
			<div>
				<div> <span className='text-blue-400'>There <span className='text-red-400'>is</span></span>  one dog</div>
				<div> <span className='text-blue-400'>hay</span> un perro</div>
			</div>
			<div>
				<div><span className='text-blue-400'>There <span className='text-red-400'>are</span></span> two dogs</div>
				<div><span className='text-blue-400'>hay</span> dos perros</div>
			</div>
		</div>)} />

		<TitleContainer title={<>how to say no</>} />
		<ExplanationContainer explanation={<>en las situaciones normales se le agrega <span className='text-purple-400'>do not</span> antes del verbo</>} example={(<div className="flex flex-col items-center justify-center text-center"><div>I eat rice</div><div>I <span className='text-purple-400'>do not</span>  eat rice</div></div>)} />

		<ExplanationContainer explanation={<>Cuando el verbo  <span className='text-purple-400'>to do</span>  no tiene el <span className='text-red-400'>not</span>  significa <span className='text-purple-400'>hacer</span> </>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div>
				<div>you <span className='text-purple-400'>do</span>  homework</div>
				<div>tu <span className='text-purple-400'>haces</span>  tarea</div>
			</div>


			<div>
				<div>I <span className='text-red-400'>do not</span>  eat banana</div>
				<div>yo <span className='text-red-400'>no</span> como banana</div>
			</div>

		</div>)} />


		<ExplanationContainer explanation={<>es posible usar <span className='text-purple-400'>to do</span>  negandolo tambien</>} example={(<div><div>you <span className='text-red-400'>do not</span>  <span className='text-purple-400'>do</span> homework</div><div>tu <span className='text-red-400'>no</span> <span className='text-purple-400'>haces</span> tarea</div>
		</div>)} />


		<ExplanationContainer explanation={<>En tercera persona singular, la <span className='text-red-400'>s</span> del <span className='text-purple-400'>verbo</span>  se va al <span className='text-amber-400'>do not</span> y se convierte en <span className='text-amber-400'>does not</span> y la <span className='text-red-400'>s</span> del <span className='text-purple-400'>verbo</span> se elimina por eso  </>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div>
				<div>she <span className='text-purple-400'>eat<span className='text-red-400'>s</span></span>  </div><div>she <span className='text-amber-400'>do<span className='text-red-400'>es</span> not</span>  <span className='text-purple-400'>eat</span> </div>
			</div>

			<div>
				<div>she <span className='text-purple-400'>ha</span><span className='text-red-400'>s</span>  dogs</div>
				<div>she <span className='text-amber-400'>do<span className='text-red-400'>es</span> not <span className='text-purple-400'>have</span> </span>  dogs</div>
			</div>

		</div>)} />
		<ExplanationContainer explanation={<>con los verbos que funcionan raro como; <span className='text-blue-400'>to be</span> , <span className='text-blue-400'>to may</span> ,  <span className='text-blue-400'>to can</span> , <span className='text-blue-400'>to must</span> .. Simplemente se e agrega el <span className='text-red-400'>not</span>  despues de esos verbos</>} example={(<div className="flex flex-col items-center justify-center text-center gap-4">

			<div>
				<div>they <span className='text-blue-400'>are</span>  happy</div>
				<div>they<span className='text-blue-400'>'re</span> <span className='text-red-400'>not</span> happy</div>
			</div>

			<div>
				<div> he <span className='text-blue-400'>can</span>  eat rice</div>
				<div> he <span className='text-blue-400'>can</span> <span className='text-red-400'>not</span>  eat rice</div>
			</div>

			<div>
				<div>she <span className='text-blue-400'>must</span>  drink water</div>
				<div>she <span className='text-blue-400'>must</span> <span className='text-red-400'>not</span> drink water</div>
			</div>


			<div>
				<div>there <span className='text-blue-400'>is</span> a cat</div>
				<div>there <span className='text-blue-400'>is</span> <span className='text-red-400'>not</span> a cat</div>
			</div>

		</div>)} />



		<TitleContainer title={<>exercise</>} />
		<ListOfTest list={
			[
				[(<>ella no bebe agua</>), (<>she does not drink water</>)],
				[(<>nosotros no comemos en el edificio</>), (<>we do not eat inside building</>)],
				[(<>nosotros no usamos sacapuntas</>), (<>we do not use pencil sharperner</>)],
				[(<>they eat in the forest</>), (<>ellos comen en el bosque</>)],
				[(<>they do not eat in the forest</>), (<>ellos no comen en el bosque</>)],
				[(<>el no puede tomar agua</>), (<>he can not drink water</>)],
				[(<>there is a dog in the house</>), (<>hay un perro en la casa</>)],
				[(<>she does not need to erase with the eraser</>), (<>ella no necesita borrar con el borrador</>)],
			]
		} />

		<TitleContainer title={<>abbreviations</>} />

		<Word word={[(<><span className='text-white'>there is</span> a cow</>), (<><span className='text-white'>there's</span> a cow</>)]} />
		<Word word={[(<>he <span className='text-white'>can not</span> eat</>), (<>he <span className='text-white'>can't</span> eat</>)]} />
		<Word word={[(<>he <span className='text-white'>is not</span> happy</>), (<>he <span className='text-white'>isn't</span> happy</>)]} />
		<Word word={[(<>they <span className='text-white'>are not</span> confusing</>), (<>they <span className='text-white'>aren't</span> confusing</>)]} />
		<Word word={[(<>this <span className='text-white'>does not</span> feel shocking</>), (<>this <span className='text-white'>doesn't</span> feel shocking</>)]} />
		<Word word={[(<>these dogs <span className='text-white'>do not</span> feel surprised</>), (<>these dogs <span className='text-white'>don't</span> feel surprised</>)]} />

		<TitleContainer title={<>exercise with abbreviations</>} />

		<ListOfTest list={
			[
				[(<>I don't have pens</>), (<> no tengo lapizeras</>)],
				[(<>Mike doesn't need scissor</>), (<>Mike no necesita tijeras</>)],
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
				[(<>the purple cat likes to read the book</>), (<>el gato purpura le gusta leer el libro</>)],
				[(<>eating potato is not embarrasing</>), (<>comer papas no es avergozante</>)],
				[(<>you don't want gluestick</>), (<> no quieres pegamento</>)],
			]
		} />

	</>);
}

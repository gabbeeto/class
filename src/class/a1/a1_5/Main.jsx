import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

export function A1_5(){
return (<> 
	<TitleContainer  title={<>verbs</>} / >
	<Word word={[(<><span className="textSize-3">To</span> go</>), (<>ir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> walk</>), (<>caminar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> run</>), (<>correr</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> drive</>), (<>conducir/manejar/andar(vehiculo con motor)</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> ride </>), (<>Montar animal o conducir (moto/vehiculo sin motor)</>)]}/>

	<TitleContainer  title={<>pronoun</>} / >
	<Word word={[(<>we</>), (<>nosotros</>)]}/>

	<TitleContainer  title={<>adverbs and other words</>} / >
	<Word word={[(<>and</>), (<>y</>)]}/>
	<Word word={[(<>on</>), (<>sobre/encima/en</>)]}/>

	<Word word={[(<>in</>), (<>adentro/en</>)]}/>
	<Word word={[(<>to</>), (<>hacia/a/para</>)]}/>

	<TitleContainer  title={<>examples</>} / >
	<Word word={[(<>she goes to school</>), (<>ella va a la escuela</>)]}/>
	<Word word={[(<>the cat and the dog hate cows</>), (<>la perra y el gato odian la vaca</>)]}/>
	<Word word={[(<>I go to school</>), (<>voy a la escuela</>)]}/>
	<Word word={[(<>I ride a bike</>), (<>ando en vicicleta</>)]}/>
	<Word word={[(<>I ride a motorbike</>), (<>ando en moto</>)]}/>
	<Word word={[(<>I ride a horse</>), (<>monto un caballo / ando en caballo</>)]}/>
	<Word word={[(<>I drive a truck</>), (<>manejo un auto</>)]}/>
<TitleContainer  title={<>Exercises</>} / >
	<ListOfTest list={
		[
		[(<>comemos manzana</>), (<>we eat apple</>)],
		[(<>caminamos en la vereda</>), (<>we walk on the sideway</>)],
		[(<>ella camina en el autopista</>), (<>she walks on the highway</>)],
		[(<>ella camina en la casa</>), (<>she walks in the house</>)],
		[(<>voy a la playa</>), (<>I go to the beach</>)],
		[(<>manejo un auto. voy hacia la plaza</>), (<>I drive a car. I go to the square</>)],
		[(<>ella anda en vici</>), (<>she rides a bike</>)],
		[(<>manejas un camion</>), (<>you drive a truck</>)],
		[(<>corremos en la vereda y andamos en camion en el autopista</>), (<>we run on the sidewalk and we drive a truck on the highway</>)],
		[(<>Voy a la carretera. Maria maneja un auto</>), (<>I go to the road. Maria drives a car</>)],
		[(<>él va al bote en el rio</>), (<>he goes to the boat on the river</>)],
		[(<>ella camina en el edificio</>), (<>she walks in the building</>)],
		[(<>la ciudad tiene dies calles</>), (<>the city has ten streets</>)],
		[(<>tres caballos en el bosque</>), (<>three horses in the forest</>)],
		[(<>vamos al hospital</>), (<>we go to the hospital</>)],
		[(<>odio la casa azul</>), (<>I hate the blue house</>)],
		[(<>los gatos verdes le gustan el bosque</>), (<>the green cats like the forest</>)],
		[(<>comemos peces amarillos</>), (<>we eat yellow fish</>)],
		[(<>el rio tiene agua rosada</>), (<>the river has pink water</>)],
		[(<>la arañas verde va al bosque marron</>), (<>the green spider goes to the brown forest</>)],
		[(<>los cerdos naranjas van la ciudad negra</>), (<>the green pigs go to the black city</>)],
		[(<>el bosque tiene arañas grises</>), (<>the forest has gray spiders</>)],
		]
	} / >


	</>);
}

import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'
import driveAndRideImg from './driveAndRide.png';
import inAndOnImg from './in and on.png';

export function A1_5(){
return (<> 
	<TitleContainer  title={<>verbs</>} / >
	<Word word={[(<><span className="textSize-3">To</span> go</>), (<>ir</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> walk</>), (<>caminar</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> run</>), (<>correr</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> drive</>), (<>conducir/manejar/andar(vehiculo con motor)</>)]}/>
	<Word word={[(<><span className="textSize-3">To</span> ride </>), (<>Montar animal o conducir (moto/vehiculo sin motor)</>)]}/>
	<div className="flex flex-col items-center justify-center text-center">
	<img src={driveAndRideImg} alt="drive and ride" className="p-2 rounded-xl" />
	</div>

	<TitleContainer  title={<>examples for riding and driving</>} / >
	<Word word={[(<>I ride a bike</>), (<>manejo una vici/ando en vicicleta</>)]}/>
	<Word word={[(<>I ride a motorcycle</>), (<>manejo una moto/ando en moto</>)]}/>
	<Word word={[(<>I ride a horse</>), (<>monto un caballo/ando en caballo</>)]}/>
	<Word word={[(<>I drive a truck</>), (<>manejo un camion/ando en camion</>)]}/>

	<TitleContainer  title={<>new pronoun</>} / >
	<Word word={[(<>we</>), (<>nosotros</>)]}/>

	<TitleContainer  title={<>adverbs and other words</>} / >
	<div className="flex flex-col items-center justify-center text-center gap-4">
	<div>
	<Word word={[(<>and</>), (<>y</>)]}/>
	<Word word={[(<>the cat <span className='text-orange-400'>and</span>  the dog hate cows</>), (<>la perra <span className='text-orange-400'>y</span> el gato odian la vaca</>)]}/>
	</div>

	<div className="flex flex-col items-center justify-center text-center">
	<Word word={[(<>on</>), (<>sobre/encima de/en</>)]}/>
	<Word word={[(<>in</>), (<>adentro/en</>)]}/>
	<img src={inAndOnImg} alt="in and on image"/>
	<Word word={[(<>the cat is <span className='text-orange-400'>on</span> the table</>), (<>el gato está <span className='text-orange-400'>en</span> la mesa</>)]}/>
	<Word word={[(<>the dog is <span className='text-orange-400'>in</span> the bathroom</>), (<>el perro está <span className='text-orange-400'>en</span> el baño</>)]}/>
	</div>

	<div>
	<Word word={[(<>to</>), (<>hacia/a/para</>)]}/>
	<Word word={[(<>I go <span className='text-orange-400'>to</span> school</>), (<>voy <span className='text-orange-400'>a</span> la escuela</>)]}/>
	<Word word={[(<>from Buenos Aires <span className='text-orange-400'>to</span> Entre rios</>), (<>desde <span className='text-orange-400'>hasta</span> Entre rios</>)]}/>
	</div>
	</div>

<TitleContainer  title={<>Exercises</>} / >
	<ListOfTest list={
		[
		[(<>comemos manzana</>), (<>we eat apple</>)],
		[(<>caminamos en la vereda</>), (<>we walk on the sidewalk</>)],
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

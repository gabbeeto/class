import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

export function Component(){
return (<> 
	<TitleContainer  title={<>verbs</>} / >
	<Word word={[(<><span classname="textSize-3">To</span> go</>), (<>ir</>)]}/>
	<Word word={[(<><span classname="textSize-3">To</span> walk</>), (<>caminar</>)]}/>
	<Word word={[(<><span classname="textSize-3">To</span> run</>), (<>correr</>)]}/>
	<Word word={[(<><span classname="textSize-3">To</span> drive</>), (<>'conducir/manejar/andar(auto u otro vehiculo con motor)'</>)]}/>
	<Word word={[(<><span classname="textSize-3">To</span> ride </>), (<>'conducir/manejar/andar/montar(manejar algo sin motor como un caballo o una vici, excepto moto porque tiene motor)'</>)]}/>

	<TitleContainer  title={<>pronoun</>} / >
	<Word word={[(<>we</>), (<>nosotros</>)]}/>

	<Word word={[(<>and</>), (<>y</>)]}/>


	<Word word={[(<>on</>), (<>sobre/encima/en</>)]}/>
	<Word word={[(<>in</>), (<>adentro/en</>)]}/>

	<Word word={[(<>she goes to school</>), (<>ella va a la escuela</>)]}/>
	<Word word={[(<>I go to school</>), (<>voy a la escuela</>)]}/>
	<Word word={[(<>to</>), (<>hacia/a/para</>)]}/>

	<ListOfTest list={
		[
		[(<>comemos manzana</>), (<>we eat apple</>)],
		[(<>caminamos en la vereda</>), (<>we walk on the sideway</>)],
		[(<>ella camina en el autopista</>), (<>she walks on the highway</>)],
		[(<>ella camina en la casa</>), (<>she walks in the house</>)],
		[(<>voy a la playa</>), (<>I go to the beach</>)],
		[(<>manejo un auto. voy hacia la plaza</>), (<>I drive a car. I go to the square</>)],
		[(<></>), (<>I drive a car. I go to the square</>)],
		]
	} / >


	</>);
}

import {ListOfWords} from './../../../list'
import {ExplanationContainer, TitleContainer} from './../../../explanationUtilities'
import { getNumberText } from './../../../randomizer/randomizer.js'

const numbers = [
	[(<><span className='text-red-300'>one</span></>),false],
	[(<><span className='text-red-300'>two</span></>),false],
	[(<><span className='text-red-300'>three</span></>),false],
	[(<><span className='text-red-300'>four</span></>),false],
	[(<><span className='text-red-300'>five</span></>),false],
	[(<><span className='text-red-300'>six</span></>),false],
	[(<><span className='text-red-300'>seven</span></>),false],
	[(<><span className='text-red-300'>eight</span></>),false],
	[(<><span className='text-red-300'>nine</span></>),false],
	[(<><span className='text-red-300'>ten</span></>),false],
	[(<><span className='text-red-300'>eleven</span></>),false],
	[(<><span className='text-red-300'>twelve</span></>),false],
	[(<><span className='text-red-300'>thirteen</span></>),false],
	[(<>four<span className='text-red-300'>teen</span></>),false],
	[(<><span className='text-red-300'>fifteen</span></>),false],
	[(<>six<span className='text-red-300'>teen</span></>),false],
	[(<>seven<span className='text-red-300'>teen</span></>),false],
	[(<>eight<span className='text-red-300'>teen</span></>),false],
	[(<>nine<span className='text-red-300'>teen</span></>),false],
	[(<><span className='text-red-300'>twenty</span></>),false],
	[(<><span className='text-red-300'>twenty</span> two</>), 22],
	[(<><span className='text-red-300'>twenty</span> five</>), 25],
	[(<><span className='text-red-300'>thirty</span></>), 30],
	[(<><span className='text-red-300'>forty</span></>), 40],
	[(<><span className='text-red-300'>fifty</span></>), 50],
	[(<>six<span className='text-red-300'>ty</span></>), 60],
	[(<>seven<span className='text-red-300'>ty</span></>), 70],
	[(<>eight<span className='text-red-300'>ty</span></>), 80],
	[(<>nine<span className='text-red-300'>ty</span></>), 90],
	[(<>a <span className='text-red-300'>hundred</span></>), 100],
	[(<>one <span className='text-red-300'>hundred</span></>), 100],
	[(<>two <span className='text-red-300'>hundred</span></>), 200],
	[(<>three <span className='text-red-300'>hundred</span></>), 300],
	[(<>four <span className='text-red-300'>hundred</span></>), 400],
	[(<>five <span className='text-red-300'>hundred</span></>), 500],
	[(<>six <span className='text-red-300'>hundred</span></>), 600],
	[(<>seven <span className='text-red-300'>hundred</span></>), 700],
	[(<>eight <span className='text-red-300'>hundred</span></>), 800],
	[(<>nine <span className='text-red-300'>hundred</span></>), 900],
	[(<><span className='text-red-300'>one hundred</span> and twenty four</>), 124],
	[(<><span className='text-red-300'>one hundred</span> twenty four</>), 124],
	[(<><span className='text-red-300'>three hundred</span> and sixty nine</>), 369],
	[(<>nine hundred and ninety nine</>), 999],
	]


export function A1Number(){

console.log(getNumberText(1, 'english', false, false, true ))


return (<>
	<ListOfWords list={numbers} name={'number'} />
<TitleContainer  title={<>test number</>} / >
	<detail className="flex flex-col items-center justify-center text-center rounded-3xl bg-purple-400 p-2 text-black">
		<summary>
	    Type your number:<input onChange={(e) => {
			console.log(getNumberText(Number(e.target.value), 'english', false, false, true ))
			let output = document.querySelector('output');
			output.innerHTML =  getNumberText(Number(e.target.value), 'english', false, false, true );
		}} id='number' className='p-2 rounded-3xl border-black border-2' type="number"/></summary>
		<output className='bg-purple-500 p-2 rounded-xl m-2' />
	</detail>
	{}
	<TitleContainer  title={<>basics of plurarity</>} / >
	<ExplanationContainer explanation={(<>ahora podés usar los numeros en el inglés para hablar de más de 1 animal. Solo tenés que usar el numero y tenés que  agregarle <span className='bg-orange-500'>s</span> al sustantivo como en Español
		</>)}

color='green'
example={(<><div>three cow<span className='bg-orange-500'>s</span></div>
<div>twenty five dogs<span className='bg-orange-500'>s</span></div>
	</>)}
	/>

	<ExplanationContainer explanation={(<>ten en cuenta que en inglés solo los sustantivos se le agrega <span className='bg-orange-500'>s</span>. No es como el español que se le agrega <span className='bg-orange-500'>s</span> a los adjetivos</>)}
color='green'
example={(<><div>three green cow<span className='bg-orange-500'>s</span></div>
<div>tres perro<span className='bg-orange-500'>s</span> verde<span className='bg-orange-500'>s</span></div>
	</>)}
	/>


	<ExplanationContainer explanation={(<>y por alguna extraña razón a <span className='text-purple-400'>fish</span> y <span className='text-purple-400'>sheep</span> no se le agrega <span className='bg-orange-500'>s</span></>)}
color='green'
example={(<>

<div>
	three green  <span className='text-purple-400'>fish</span>
	</div>
<div>four violet <span className='text-purple-400'>sheep</span></div>
	</>)}
	/>

	</>
)
}

import red from './color/red.png'
import blue from './color/blue.png'
import yellow from './color/yellow.png'
import purple from './color/Purple.png'
import black from './color/black.jpg'
import white from './color/white.png'
import brown from './color/brown.png'
import orange from './color/orange.jpeg'
import pink from './color/pink.png'
import green from './color/green.png'
import cyan from './color/cyan.png'

function ColorList({colorText, colorImg}){
return (<li className='w-full flex items-center justify-center text-center'>
<figure className='w-full flex-col-reverse  flex items-center justify-center text-center'>
<img className='w-11/12 border-black border-2 rounded-3xl grid-cols-auto' src={colorImg} alt={colorText}/>
<figcaption>{colorText}</figcaption>
</figure>
</li>
)
}

export  let A1Color = (<ul className='flex flex-col '>
	<ColorList colorText='red' colorImg={red} / >
	<ColorList colorText='blue' colorImg={blue} / >
	<ColorList colorText='green' colorImg={green} / >
	<ColorList colorText='black' colorImg={black} / >
	<ColorList colorText='white' colorImg={white} / >
	<ColorList colorText='yellow' colorImg={yellow} / >
	<ColorList colorText='orange' colorImg={orange} / >
	<ColorList colorText='pink' colorImg={pink} / >
	<ColorList colorText='purple' colorImg={purple} / >
	<ColorList colorText='brown' colorImg={brown} / >
	<ColorList colorText='cyan' colorImg={cyan} / >
	</ul>
)
// export default function Main(){
// return(
// 	<ul>
// 	<ColorList colorText='red' colorImg={red} / >
// 	<ColorList colorText='blue' colorImg={blue} / >
// 	</ul>
// )
// }

import red from './color/red.png'
import blue from './color/blue.png'
import yellow from './color/yellow.png'
import green from './color/green.png'
import purple from './color/Purple.png'
import black from './color/black.jpg'
import white from './color/white.png'
import brown from './color/brown.png'
import orange from './color/orange.jpeg'
import pink from './color/pink.png'
import cyan from './color/cyan.png'
import gray from './color/gray.png'

function ColorList({ colorText, colorImg }) {
	return (<li className='w-full flex justify-center  text-center'>
		<figure className='w-full flex-col-reverse flex text-center'>
			< img className='w-full h-5/6 border-black border-2 rounded-3xl ' src={colorImg} alt={colorText} />
			<figcaption>{colorText}</figcaption>
		</figure >
	</li >
	)
}

export let A1Color = (<ul className='grid grid-cols-autoFit-2 gap-2  justify-items-center'>
	<ColorList colorText='Red' colorImg={red} />
	< ColorList colorText='Blue' colorImg={blue} />
	<ColorList colorText='Green' colorImg={green} />
	<ColorList colorText='Black' colorImg={black} />
	<ColorList colorText='White' colorImg={white} />
	<ColorList colorText='Yellow' colorImg={yellow} />
	<ColorList colorText='Orange' colorImg={orange} />
	<ColorList colorText='Pink' colorImg={pink} />
	<ColorList colorText='Purple' colorImg={purple} />
	<ColorList colorText='Brown' colorImg={brown} />
	<ColorList colorText='Cyan' colorImg={cyan} />
	<ColorList colorText='Gray' colorImg={gray} />
</ul >
)
// export default function Main(){
// return(
// 	<ul>
// 	<ColorList colorText='red' colorImg={red} / >
// 	<ColorList colorText='blue' colorImg={blue} / >
// 	</ul>
// )
// }

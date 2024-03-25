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
import { useState } from 'react'

function ColorList({ colorText, colorImg, isHidden }) {
	return (<li className='w-full flex justify-center  text-center'>
		<figure className='w-full flex-col-reverse flex text-center'>
			< img className='w-full h-5/6 border-black border-2 rounded-3xl ' src={colorImg} alt={colorText} />
			<figcaption className={isHidden && 'hidden'}>{colorText}</figcaption>
		</figure >
	</li >
	)
}

export function A1Color() {
	const [hid, setHid] = useState(false)
	return (<>
		<ul className='grid grid-cols-autoFit-2 gap-2  justify-items-center'>
			<ColorList colorText='Red' colorImg={red} isHidden={hid} />
			<ColorList colorText='Blue' colorImg={blue} isHidden={hid} />
			<ColorList colorText='Green' colorImg={green} isHidden={hid} />
			<ColorList colorText='Black' colorImg={black} isHidden={hid} />
			<ColorList colorText='White' colorImg={white} isHidden={hid} />
			<ColorList colorText='Yellow' colorImg={yellow} isHidden={hid} />
			<ColorList colorText='Orange' colorImg={orange} isHidden={hid} />
			<ColorList colorText='Pink' colorImg={pink} isHidden={hid} />
			<ColorList colorText='Purple' colorImg={purple} isHidden={hid} />
			<ColorList colorText='Brown' colorImg={brown} isHidden={hid} />
			<ColorList colorText='Cyan' colorImg={cyan} isHidden={hid} />
			<ColorList colorText='Gray' colorImg={gray} isHidden={hid} />
		</ul >
		<button onClick={() => setHid(!hid)} className='border-2 border-black p-1 mt-2 rounded-2xl text-center bg-cyan-200 text-black'> hide colors</button>
	</>
	)
}
// export default function Main(){
// return(
// 	<ul>
// 	<ColorList colorText='red' colorImg={red} / >
// 	<ColorList colorText='blue' colorImg={blue} / >
// 	</ul>
// )
// }

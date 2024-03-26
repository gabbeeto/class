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
import {ListOfWords} from './../vocabList'

const colors = [
		['Red', [red]],
		['Blue', [blue]],
		['Green', [green]],
		['Black', [black]],
		['White', [white]],
		['Yellow', [yellow]],
		['Orange', [orange]],
		['Pink', [pink]],
		['Purple', [purple]],
		['Brown', [brown]],
		['Cyan', [cyan]],
		['Gray', [gray]],
	]


export function A1Color(){
return (<ListOfWords list={colors} name={'color'} />
)
}

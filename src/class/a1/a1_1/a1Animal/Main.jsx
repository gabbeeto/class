import {ListOfWords} from './../../../vocabList'
import Dog from './animal/dog.jpg'
import Cat from './animal/cat.jpg'
import Chicken from './animal/chicken.jpg'
import Cow from './animal/Cow.jpg'
import Fish from './animal/fish.jpg'
import Fly from './animal/fly.jpg'
import Horse from './animal/horse.jpg'
import Pig from './animal/pig.jpg'
import Sheep from './animal/sheep.jpg'
import Spider from './animal/spider.jpg'
import Monkey from './animal/monkey.jpg'
import Bee from './animal/bee.jpg'

const animals = [
		['Dog', [Dog]],
		['Cat', [Cat]],
		['Cow', [Cow]],
		['Fish', [Fish]],
		['Fly', [Fly]],
		['Horse', [Horse]],
		['Pig', [Pig]],
		['Sheep', [Sheep]],
		['Spider', [Spider]],
		['Chicken', [Chicken]],
		['Bee', [Bee]],
		['Monkey', [Monkey]],
	]


export function A1Animal(){
return (<ListOfWords list={animals} name={'animal'} />
)
}

import Bed from './items/bed.png';
import Phone from './items/phone.jpg';
import Television from './items/television.jpg';
import Window from './items/window.jpg';
import Chair from './items/chair.jpg';
import Toy from './items/toy.jpg';
import Table from './items/table.jpg';
import Bathtub from './items/bathtub.png';
import Fridge from './items/fridge.jpg';
import Toilet from './items/toilet.jpg';
import Door from './items/door.png';
import Computer from './items/computer.jpg';
import {ListOfWords} from './../../../vocabList';

const items = [
['Bed', [Bed] ],
['Phone', [Phone] ],
['Television', [Television] ],
['Window', [Window] ],
['Chair', [Chair] ],
['Toy', [Toy] ],
['Table', [Table] ],
['Bathtub', [Bathtub] ],
['Fridge', [Fridge] ],
['Toilet', [Toilet] ],
['Door', [Door] ],
['Computer', [Computer] ],
 ];

export function A1Item(){
 return (<ListOfWords list={ items } name={'item'} /> 
)}

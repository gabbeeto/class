import Lettuce from './foods/lettuce.jpg';
import Watermelon from './foods/watermelon.jpg';
import Carrot from './foods/carrot.jpg';
import Icecream from './foods/iceCream.jpg';
import Hotdog from './foods/hotDog.jpg';
import Pineapple from './foods/pineapple.jpeg';
import Strawberry from './foods/strawberry.jpg';
import Frenchfries from './foods/frenchFries.jpg';
import Grape from './foods/grape.jpg';
import Onion from './foods/onion.jpg';
import Hamburger from './foods/hamburger.jpg';
import {ListOfWords} from './../../../vocabList';

const foods = [
['Lettuce', [Lettuce] ],
['Watermelon', [Watermelon] ],
['Carrot', [Carrot] ],
['Icecream', [Icecream] ],
['Hotdog', [Hotdog] ],
['Pineapple', [Pineapple] ],
['Strawberry', [Strawberry] ],
['French fries', [Frenchfries] ],
['Grape', [Grape] ],
['Onion', [Onion] ],
['Hamburger', [Hamburger] ],
 ];

export function A1Food2(){
 return (<ListOfWords list={ foods } name={'food'} /> 
)}

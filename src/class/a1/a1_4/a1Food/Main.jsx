import Milk from './foods/milk.jpg';
import Cheese from './foods/cheese.jpg';
import Coffee from './foods/coffee.jpg';
import Bread from './foods/bread.jpeg';
import Noodles from './foods/noodles.jpg';
import Tea from './foods/tea.jpg';
import Water from './foods/water.jpg';
import Rice from './foods/rice.jpg';
import Tomato from './foods/tomato.jpg';
import Egg from './foods/egg.jpg';
import Apple from './foods/apple.jpeg';
import Potato from './foods/potato.jpeg';
import {ListOfWords} from './../../../vocabList';

const foods = [
 ['Milk', [Milk] ],
['Cheese', [Cheese] ],
['Coffee', [Coffee] ],
['Bread', [Bread] ],
['Noodles', [Noodles] ],
['Tea', [Tea] ],
['Water', [Water] ],
['Rice', [Rice] ],
['Tomato', [Tomato] ],
['Egg', [Egg] ],
['Apple', [Apple] ],
['Potato', [Potato] ],
 ];

export function A1Food(){
 return (<ListOfWords list={ foods } name={'food'} /> 
)}
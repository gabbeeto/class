import Tired from './feelings/tired.png';
import Angry from './feelings/angry.png';
import Worried from './feelings/worried.png';
import Sick from './feelings/sick.png';
import Afraid from './feelings/afraid.png';
import Shocked from './feelings/shocked.png';
import Surprised from './feelings/surprised.png';
import Bored from './feelings/bored.png';
import Sad from './feelings/sad.png';
import Confused from './feelings/confused.png';
import Embarrased from './feelings/embarrased.png';
import Dissapointed from './feelings/dissapointed.png';
import {ListOfWords} from './../../../vocabList';

const feelings = [
['Tired', [Tired] ],
['Angry', [Angry] ],
['Worried', [Worried] ],
['Sick', [Sick] ],
['Afraid', [Afraid] ],
['Shocked', [Shocked] ],
['Surprised', [Surprised] ],
['Bored', [Bored] ],
['Sad', [Sad] ],
['Confused', [Confused] ],
['Embarrased', [Embarrased] ],
['Dissapointed', [Dissapointed] ],
 ];

export function A1Feeling(){
 return (<ListOfWords list={ feelings } name={'feeling'} /> 
)}
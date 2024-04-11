import Building1 from './places/building1.png';
import City from './places/city.jpg';
import School from './places/school.png';
import Road from './places/road.png';
import Street from './places/street.png';
import Building2 from './places/building2.png';
import Beach1 from './places/beach1.png';
import Building from './places/building.png';
import Square from './places/square.jpg';
import School1 from './places/school1.png';
import House from './places/house.png';
import Forest from './places/forest.jpg';
import House1 from './places/house1.jpg';
import Forest1 from './places/forest1.jpg';
import Building3 from './places/building3.png';
import City1 from './places/city1.jpg';
import Sidewalk from './places/sidewalk.png';
import Hospital1 from './places/hospital1.png';
import River from './places/river.png';
import Hospital from './places/hospital.jpg';
import Beach from './places/beach.jpg';
import Highway from './places/highway.png';
import {ListOfWords} from './../../../vocabList';

const places = [
['Building', [Building1 , Building2 , Building , Building3] ],
['City', [City , City1] ],
['School', [School , School1] ],
['Road', [Road] ],
['Street', [Street] ],
['Beach', [Beach1 , Beach] ],
['Square', [Square] ],
['House', [House , House1] ],
['Forest', [Forest , Forest1] ],
['Sidewalk', [Sidewalk] ],
['Hospital', [Hospital1 , Hospital] ],
['River', [River] ],
['Highway', [Highway] ],
 ];

export function A1Place(){
 return (<ListOfWords list={ places } name={'place'} /> 
)}

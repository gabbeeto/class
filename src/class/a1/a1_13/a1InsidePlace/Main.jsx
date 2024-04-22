import Grocerystore from './insidePlaces/groceryStore.jpg';
import Supermarket from './insidePlaces/supermarket.jpg';
import Producestore from './insidePlaces/produceStore.jpg';
import Apartment from './insidePlaces/apartment.jpg';
import Bakery from './insidePlaces/bakery.jpg';
import Hairsalon from './insidePlaces/hairSalon.jpg';
import Butchershop from './insidePlaces/butcherShop.jpg';
import Barbershop from './insidePlaces/barberShop.jpg';
import {ListOfWords} from './../../../vocabList';

const insidePlaces = [
['Grocery Store', [Grocerystore] ],
['Supermarket', [Supermarket] ],
['Produce Store', [Producestore] ],
['Apartment', [Apartment] ],
['Bakery', [Bakery] ],
['Hair Salon', [Hairsalon] ],
['Butcher Shop', [Butchershop] ],
['Barber Shop', [Barbershop] ],
 ];

export function A1InsidePlace(){
 return (<ListOfWords list={ insidePlaces } name={'place'} /> 
)}

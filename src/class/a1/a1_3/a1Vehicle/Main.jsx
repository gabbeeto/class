import airplane from './vehicles/airplane.png'
import bike from './vehicles/bike.jpeg'
import boat from './vehicles/boat.jpg'
import car from './vehicles/car.jpeg'
import helicopter from './vehicles/helicopter.jpeg'
import motorbike from './vehicles/motorbike.jpg'
import ship from './vehicles/ship.jpeg'
import truck from './vehicles/truck.jpg'
import bus from './vehicles/bus.jpg'
import skateboard from './vehicles/skateboard.jpg'

import {ListOfWords} from './../../../vocabList'

const vehicles = [
		[(<>airplane  <span className='textSize-6'>aeroplane</span></>), [airplane]],
		['bike', [bike]],
		['boat', [boat]],
		['car', [car]],
		['helicopter', [helicopter]],
		[(<>motorcycle <span className='textSize-6'>motorbike</span></>), [motorbike]],
		['ship', [ship]],
		['truck', [truck]],
		['bus', [bus]],
		['skateboard', [skateboard]],
	]


export function A1Vehicle(){
return (<ListOfWords list={vehicles} name={'vehicles'} />
)
}

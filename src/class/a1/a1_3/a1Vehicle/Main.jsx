import Truck from './vehicles/truck.jpg';
import Ship from './vehicles/ship.jpeg';
import Bus from './vehicles/bus.jpg';
import Car from './vehicles/car.jpeg';
import Motorbike from './vehicles/motorbike.jpg';
import Skateboard from './vehicles/skateboard.jpg';
import Airplane from './vehicles/airplane.png';
import Bike from './vehicles/bike.jpeg';
import Helicopter from './vehicles/helicopter.jpeg';
import Boat from './vehicles/boat.jpg';
import {ListOfWords} from './../../../vocabList';

const vehicles = [
 [Truck, 'Truck'],
[Ship, 'Ship'],
[Bus, 'Bus'],
[Car, 'Car'],
[Motorbike, 'Motorbike'],
[Skateboard, 'Skateboard'],
[Airplane, 'Airplane'],
[Bike, 'Bike'],
[Helicopter, 'Helicopter'],
[Boat, 'Boat'],
 ];

export function A1Vehicle(){
 return (<ListOfWords list={ vehicles } name={'vehicle'} /> 
)}
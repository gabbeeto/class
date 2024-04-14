const a1_1Animals = ['sheep', 'dog','bee','horse','cat','pig','cow','fly','spider','fish', 'chicken', 'monkey']


const a1_1Colors = ['blue', 'red','yellow','orange','cyan','brown','gray','white','pink', 'green', 'purple', 'black']


const a1_1 = {
		noun: a1_1Animals,
		adjetive: a1_1Colors,
	};




const a1_2Numbers = ['one','two','three','four', 'five','six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen' ,'nineteen', 'twenty','twenty-one', 'twenty-two', 'twenty-tree','twenty-four','twenty-five', 'twenty-six', 'twenty-seven','twenty-eight','twenty-nine','thirty', 'forty', 'fifty','sixty','seventy','eighty','ninety']

const a1_2 = {
    numbers: a1_2Numbers
	};



const a1_3Vehicles = [
'truck',
'ship',
'bus',
'car',
'motorbike',
'skateboard',
'airplane',
'bike',
'helicopter',
'boat',
];



const a1_3 = {
    noun: a1_3Vehicles
	};


const a1_4Foods = [
'milk',
'cheese',
'coffee',
'bread',
'noodles',
'tea',
'water',
'rice',
'tomato',
'egg',
'apple',
'potato',
];


const a1_4 = {
    noun: a1_4Foods
	};


const a1_5Places = [
'building',
'city',
'school',
'road',
'street',
'beach',
'square',
'house',
'forest',
'sidewalk',
'hospital',
'river',
'highway',
];


const a1_5 = {
    noun: a1_5Places
	};


const a1_6Feelings = [
'tired',
'angry',
'worried',
'sick',
'afraid',
'shocked',
'surprised',
'bored',
'sad',
'confused',
'embarrased',
'dissapointed',
'worrying',
'shocking',
'boring',
'surprising',
'confusing',
'embarrasing',
'tiring',
'happy'
];


const a1_6 = {
		adjetive: a1_6Feelings,
	};


const a1_7PartsOfHouses = [
'atic',
'hallway',
'bedroom',
'living room',
'bathroom',
'kitchen',
];


const a1_7 = {
		noun: a1_7PartsOfHouses,
	};


const a1_8Items = [
'bed',
'phone',
'television',
'window',
'chair',
'toy',
'table',
'bathtub',
'fridge',
'toilet',
'door',
'computer',
];


const a1_8 = {
		noun: a1_8Items,
	};

const english = {
	a1_1,
	a1_2,
	a1_3,
	a1_4,
	a1_5,
	a1_6,
	a1_7,
	a1_8,
}


const a1Spanish_1Animals = ['obeja', 'perro','abeja','caballo','gato','cerdo','vaca','mosca','araña','pescado', 'gallina', 'mono']


const a1Spanish_1Colors = ['azul', 'roja','amarilla','naranja','cian','marron','gris','blanca','rosa', 'verde', 'purpura','negra']




const a1Spanish_1 = {
		noun: a1Spanish_1Animals,
		adjetive: a1Spanish_1Colors,
	};







const a1Spanish_2Numbers = ['uno','dos','tres','cuatro', 'cinco','seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce','trece', 'catorce', 'quince', 'dieciséis','diecisiete', 'dieciocho', 'diecinueve', 'veinte','veintiuno','veintidós','veintitres','veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve','treinta', 'cuarenta', 'cicuenta','sesenta','setenta','ochenta','noventa',]



const a1Spanish_2 = {
		numbers:a1Spanish_2Numbers,
	};


const a1Spanish_3Vehicles = [
'camion',
'barco',
'colectivo',
'auto',
'moto',
'patineta',
'avion',
'vicicleta',
'helicoptero',
'bote',
];



const a1Spanish_3 = {
    noun: a1Spanish_3Vehicles
	};


const a1Spanish_4Foods = [
'leche',
'queso',
'cafe',
'pan',
'fideo',
'te',
'agua',
'arroz',
'tomate',
'huevo',
'manzana',
'papas',
];


const a1Spanish_4 = {
    noun: a1Spanish_4Foods
	};




const a1Spanish_5Places = [
'edificio',
'ciudad',
'escuela',
'carretera',
'calle',
'playa',
'plaza',
'casa',
'bosque',
'vereda',
'hospital',
'rio',
'autopista',
];


const a1Spanish_5 = {
    noun: a1Spanish_5Places
	};


const a1Spanish_6Feelings = [
'cansada',
'enojada',
'preocupada',
'enferma',
'asustada',
'shockeada',
'sorprendida',
'aburrida',
'triste',
'confundida',
'avergonzada',
'decepcionada',
'preocupante',
'schockeante',
'aburrida',
'sorprendente',
'confuso',
'avergozante',
'cansante',
'feliz',
];







const a1Spanish_6 = {
		adjetive: a1Spanish_6Feelings,
	};



const a1Spanish_7PartsOfHouses = [
'atico',
'pasillo',
'cuarto',
'living',
'baño',
'cocina',
];


const a1Spanish_7 = {
		noun: a1Spanish_7PartsOfHouses,
	};



const a1Spanish_8Items = [
'cama',
'celular',
'television',
'ventana',
'cilla',
'juguete',
'mesa',
'bañera',
'heladera',
'inodoro',
'puerta',
'computadora',
];


const a1Spanish_8 = {
		noun: a1Spanish_8Items,
	};

const spanish = {
	a1_1: a1Spanish_1,
	a1_2: a1Spanish_2,
	a1_3: a1Spanish_3,
	a1_4: a1Spanish_4,
	a1_5: a1Spanish_5,
	a1_6: a1Spanish_6,
	a1_7: a1Spanish_7,
	a1_8: a1Spanish_8,
}





export const List = {english,spanish}



export function GroupList(lastList){

	const types = {
		a1: 1,
		a2: 2,
		b1: 3,
		b2: 4,
		c1: 5,
		c2: 6,
	}


	const reversedTypes = {
		'1':'a1',
		'2':'a2',
		'3':'b1',
		'4':'b2',
		'5':'c1',
		'6':'c2',
	}

	lastList = lastList.split('_')

	let lastTypeOfEnglish = types[lastList[0]]
	let lastSpecficClass = Number(lastList[1])
	console.log(lastTypeOfEnglish)
	console.log(lastSpecficClass)



	let SpanishNoun = [];
	let EnglishNoun = [];

	let SpanishAdjective = [];
	let EnglishAdjetive = [];

	for(let typeOfEnglish = 1;typeOfEnglish <= lastTypeOfEnglish; typeOfEnglish++){
		for(let specificClass = 1;specificClass <= lastSpecficClass; specificClass++){

		if(typeof english[`${reversedTypes[typeOfEnglish]}_${specificClass}`]['noun'] != 'undefined'){
EnglishNoun = [ ...EnglishNoun, ...english[`${reversedTypes[typeOfEnglish]}_${specificClass}`]['noun'] ];
SpanishNoun = [ ...SpanishNoun, ...spanish[`${reversedTypes[typeOfEnglish]}_${specificClass}`]['noun'] ];
}

if(typeof english[`${reversedTypes[typeOfEnglish]}_${specificClass}`]['adjetive'] != 'undefined'){
EnglishAdjetive = [ ...EnglishAdjetive, ...english[`${reversedTypes[typeOfEnglish]}_${specificClass}`]['adjetive'] ];
SpanishAdjective = [ ...SpanishAdjective, ...spanish[`${reversedTypes[typeOfEnglish]}_${specificClass}`]['adjetive'] ];}

		}
	}
return [EnglishAdjetive, EnglishNoun, SpanishAdjective, SpanishNoun]
}


export function SelectedList(lastListForNoun, lastListForAdjetive){


let EnglishNoun = english[lastListForNoun]['noun'] ;
let SpanishNoun = spanish[lastListForNoun]['noun'];


let EnglishAdjetive = english[lastListForAdjetive]['adjetive'] ;
let SpanishAdjective = spanish[lastListForAdjetive]['adjetive'] ;

		
	
return [EnglishAdjetive, EnglishNoun, SpanishAdjective, SpanishNoun]
}




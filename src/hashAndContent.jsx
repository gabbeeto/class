import { A1Food } from './class/a1/a1_4/a1Food/Main'
import { A1Color } from './class/a1/a1_1/a1Color/Main'
import { A1Animal } from './class/a1/a1_1/a1Animal/Main'
import { A1Number } from './class/a1/a1_2/a1Number/Main'
import { A1_1 } from './class/a1/a1_1/Main'
import { A1_4 } from './class/a1/a1_4/Main'
import { A1Vehicle } from './class/a1/a1_3/a1Vehicle/Main'
import { A1Pronoun } from './class/a1/a1_3/a1Pronoun/Main'
import { Randomizer } from './class/randomizer/Main'
import { FirstClass } from './class/firstClass/Main'

const hashContent = {
	"#firstclass": ['Welcome to the first class', <FirstClass />],
	"#randomizer": ['Randomizer', <Randomizer />],
	"#a1color": ['Color', <A1Color />],
	"#a1animal": ['Animal', <A1Animal />],
	"#a1number": ['Number', <A1Number />],
	"#a1_1": ['Nouns and adjetive', <A1_1 />],
	"#a1vehicle": ['vehicles', < A1Vehicle />],
	"#a1pronoun": ['pronoun and verbs', < A1Pronoun />],
	'#a1food' : ['foods', < A1Food / >], 
	"#a1_4": ['Food and Third Person Singular in present tense', <A1_4 />],
}


export default function ReturnContent() {
	const hash = window.location.hash
	if (hash == '' || !(hash in (hashContent))) {
		return ['invalid classroom', (<h3>selecciona un link correcto</h3>)]
	}
	else {
		return hashContent[hash]
	}
}

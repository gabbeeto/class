import { A1Color } from './class/a1Color/Main'
import { A1Animal } from './class/a1Animal/Main'
import { A1Number } from './class/a1Number/Main'
import { A1_1 } from './class/a1_1/Main'
import { Randomizer } from './class/randomizer/Main'

const hashContent = {
	"#randomizer": ['Randomizer', <Randomizer />],
	"#a1color": ['Color', <A1Color />],
	"#a1animal": ['Animal', <A1Animal />],
	"#a1number": ['Number', <A1Number />],
	"#a1_1": ['Nouns and adjetive', <A1_1 />],
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

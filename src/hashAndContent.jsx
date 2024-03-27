import { A1Color } from './class/a1Color/Main'
import { A1Animal } from './class/a1Animal/Main'
import { A1Number } from './class/a1Number/Main'

const hashContent = {
	"#a1color": ['color', <A1Color />],
	"#a1animal": ['animal', <A1Animal />],
	"#a1number": ['number', <A1Number />]
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

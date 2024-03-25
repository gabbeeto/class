import { A1Color } from './class/a1Color/Main'

const hashContent = {
	"#a1color": ['color', <A1Color />]
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

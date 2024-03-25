const hashContent = {
	"#a1color": ['color', <><h1>hello</h1></>]
}


export default function returnContent(){
const hash = window.location.hash 
if(hash == '' || !(hash in (hashContent))){
return ['invalid classroom', <h3>selecciona un link correcto</h3> ]}
else{
return hashContent[hash]
}
}

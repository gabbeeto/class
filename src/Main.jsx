import returnContent from './hashAndContent'

function Content({title,content}){
return(<>
<section className="textSize-2"><h2>{title}</h2></section>
<section>{content}</section>
<section><button>download pdf</button></section></>)}


export default function Main(){
const [classTile, classContent] = returnContent()
return( <main>
	<Content title={classTile} content={classContent}/>

	</main>)}

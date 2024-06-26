import ReturnContent from './hashAndContent'
import { compareEnglish } from './class/randomizer/Main'
import { getNumberText } from './class/randomizer/randomizer'



function Content({ title, content }) {
compareEnglish(getNumberText(109,'english',false,false), 'a hun')

	return (<div className='flex flex-col justify-center items-center gap-1 bg-sky-200 text-white text-center'>
		<section className="textSize-2 text-center bg-sky-800 p-2 rounded-2xl mt-2"><h2>{title}</h2></section>
		<section className="textSize-3 bg-gradient-to-r p-1 rounded-3xl to-sky-800 from-emerald-800 ">{content}</section>
		<section><button className='text-center textSize-3 bg-emerald-800 p-2 border-2 border-black rounded-3xl mb-1'>Download PDF</button></section></ div>)

}



export default function Main() {
	const [classTile, ClassContent] = ReturnContent()
	return (<main>
		<Content title={classTile} content={ClassContent} />

	</main>)
}

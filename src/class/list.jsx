import ReactDOM from 'react-dom/client'

let wordRoot
let textHidden = false
let newList



function NumberWordList({ wordText, textValue = false }) {
	let correctLi
	if(textValue){
	correctLi = (<li className=' hover:list-decimal textSize-1 hover:text-cyan-200 text-center ' value={textValue}>{wordText}</li >)
	}
	else{
	correctLi = (<li className=' hover:list-decimal textSize-1 hover:text-cyan-200 text-center'>{wordText}</li >)
	}

	return (<> {correctLi}</>)

}


export function ListOfWords({list, name}) {

	newList = list.map((word) => {return <NumberWordList wordText={word[0]} textValue={word[1]}  /> })
let containerStyle = 'list-[square]  list-inside text-white gap-3'
return (<>
<ol id='listOfWords' className={containerStyle} >
	{newList}
</ol >
			
		<div className='flex flex-rows shrink-0 flex-grow-0 gap-2 my-2 items-center justify-center'>
		</div>
	</>
	)}







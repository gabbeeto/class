import { A1Food2 } from './class/a1/a1_10/a1Food2/Main'
import { A1Schoolsupplie } from './class/a1/a1_9/a1SchoolSupply/Main'
import { A1Item } from './class/a1/a1_8/a1Item/Main'
import { A1Feeling } from './class/a1/a1_6/a1Feeling/Main'
import { A1Place } from './class/a1/a1_5/a1Place/Main'
import { A1Food } from './class/a1/a1_4/a1Food/Main'
import { A1Color } from './class/a1/a1_1/a1Color/Main'
import { A1Animal } from './class/a1/a1_1/a1Animal/Main'
import { A1Number } from './class/a1/a1_2/a1Number/Main'
import { A1_1 } from './class/a1/a1_1/Main'
import { A1_4 } from './class/a1/a1_4/Main'
import { A1_5 } from './class/a1/a1_5/Main'
import { A1_6 } from './class/a1/a1_6/Main'
import { A1_7 } from './class/a1/a1_7/Main'
import { A1_8 } from './class/a1/a1_8/Main'
import { A1_9 } from './class/a1/a1_9/Main'
import { A1_10 } from './class/a1/a1_10/Main'
import { A1_11 } from './class/a1/a1_11/Main'
import { A1_12 } from './class/a1/a1_12/Main'
import { A1_13 } from './class/a1/a1_13/Main'
import { A1_14 } from './class/a1/a1_14/Main'
import { A1_15 } from './class/a1/a1_15/Main'
import { A1InsidePlace } from './class/a1/a1_13/a1InsidePlace/Main'
import { A1Vehicle } from './class/a1/a1_3/a1Vehicle/Main'
import { A1Pronoun } from './class/a1/a1_3/a1Pronoun/Main'
import { Randomizer } from './class/randomizer/Main'
import { FirstClass } from './class/firstClass/Main'

const hashContent = {
	"#secret": ['Welcome to the dark side of this website', <AllTheClasses />],
	"#firstclass": ['Welcome to the first class', <FirstClass />],
	"#randomizer": ['Randomizer', <Randomizer />],
	"#a1color": ['Color', <A1Color />],
	"#a1animal": ['Animal', <A1Animal />],
	"#a1number": ['Number', <A1Number />],
	"#a1_1": ['Nouns and adjetive', <A1_1 />],
	"#a1vehicle": ['Vehicles', < A1Vehicle />],
	"#a1pronoun": ['Pronoun and verbs', < A1Pronoun />],
	'#a1food' : ['Foods', < A1Food / >], 
	"#a1_4": ['Food and Third Person Singular in present tense', <A1_4 />],
	"#a1_5": ['The movement class', <A1_5 />],
	'#a1place' : ['Places', < A1Place / >], 
	'#a1feeling' : ['Feelings', < A1Feeling / >], 
	"#a1_6": ['Feelings', <A1_6 />],
	"#a1_7": ['Verb to be and parts of the house', <A1_7 />],
	"#a1_8": ['Infinitive in the English language', <A1_8 />],
	"#a1_9": ['There is/are and how to say no', <A1_9 />],
	'#a1item' : ['Items', < A1Item / >], 
	'#a1schoolsupply' : ['School supplies', < A1Schoolsupplie / >], 
	'#a1food2' : ['Foods', < A1Food2 / >], 
	"#a1_10": ['Plurarity and the \'it\' class', <A1_10 />],
	"#a1_11": ['How to make question', <A1_11 />],
	"#a1_12": ['family members and the possesive pronoun', <A1_12 />],
	'#a1insideplace' : ['Inside the Places', < A1InsidePlace / >], 
	"#a1_13": ['the adverb class(adverb of frequency and the adverb ly)', <A1_13 />],
	"#a1_14": ['adjetives and comparison', <A1_14 />],
	"#a1_15": ['how to talk about time', <A1_15 />],
}

function ClassPortal({hash,title}){
return (<div className='bg-gradient-to-tr from-orange-900 to-purple-900 m-1 p-2 rounded-xl hover:from-purple-950 hover:to-sky-950 '><a target='_blank' className="hover:text-blue-400 " href={`https://gabbeeto.github.io/class/${hash}`}>{title}</a></div>)
}

function AllTheClasses(){
return (
<>
	< ClassPortal hash="#randomizer" title='Randomizer'/>
	<div>first class</div>
	< ClassPortal hash="#firstclass" title='first class'/>
	< ClassPortal hash="#a1color" title='Color'/>
	<div>a1_1</div>
	< ClassPortal hash="#a1animal" title='Animal'/>
	< ClassPortal hash="#a1_1" title='Nouns and adjetive'/>
	<div>a1_2</div>
	< ClassPortal hash="#a1number" title='Number'/>
	<div>a1_3</div>
	< ClassPortal hash="#a1vehicle" title='Vehicles'/>
	< ClassPortal hash="#a1pronoun" title='Pronoun and verbs'/>
	<div>a1_4</div>
	< ClassPortal hash='#a1food' title='Foods' />
	< ClassPortal hash="#a1_4" title='Food and Third Person Singular in present tense'/>
	<div>a1_5</div>
	< ClassPortal hash='#a1place' title='Places' />
	< ClassPortal hash="#a1_5" title='The movement class'/>
	<div>a1_6</div>
	< ClassPortal hash='#a1feeling' title='Feelings' />
	< ClassPortal hash="#a1_6" title='difference between similar adjetives'/>
	<div>a1_7</div>
	< ClassPortal hash="#a1_7" title='Verb to be and parts of the house'/>
	<div>a1_8</div>
	< ClassPortal hash='#a1item' title='Items' />
	< ClassPortal hash="#a1_8" title='Infinitive in the English language'/>
	<div>a1_9</div>
	< ClassPortal hash='#a1schoolsupply' title='School supplies' />
	< ClassPortal hash="#a1_9" title='There is/are and how to say no'/>
	<div>a1_10</div>
	< ClassPortal hash='#a1food2' title='Foods 2' />
	< ClassPortal hash='#a1_10' title="Plurarity and the 'it' pronoun class" />
	<div>a1_11</div>
	< ClassPortal hash='#a1_11' title="how to make question" />
	<div>a1_12</div>
	< ClassPortal hash='#a1_12' title="family members and the possesive pronoun" />
	<div>a1_13</div>
	< ClassPortal hash="#a1insideplace" title="Inside the Places" />  
	< ClassPortal hash="#a1_13" title="adverb of frequency" />  
	<div>a1_14</div>
	< ClassPortal hash="#a1_14" title="comparison(working on this class)" />  
	<div>a1_15</div>
	< ClassPortal hash="#a1_15" title="How to talk about time(working on this class)" />  
	</>
)

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

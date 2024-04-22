import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

import timeImage from './timeImage.png'
import tellingTime from './tellingTime.png'

export function A1_13(){
return (<> 
	<TitleContainer  title={<>parts of the day</>} / >
	<img className='p-2 rounded-xl' src={timeImage} />
	<TitleContainer  title={<>how to talk about time</>} / >
	<img className='p-2 rounded-xl' src={tellingTime} />
	<div className="flex flex-col items-center gap-2 justify-center text-center">

	<div>
	<div>you can say <span className='text-blue-400'>the time is 5 o'clock</span> or you can just replace <span className='text-orange-400'>the time</span> with <span className='text-orange-400'>it</span> and just say <span className='text-blue-400'> <span className='text-orange-400'>it</span>'s 5 o'clock</span>  </div>

	<Word word={[(<>it's five o'clock</>), (<>it's 3:00</>)]}/>
	<Word word={[(<>the time is five o'clock</>), (<>it's 3:00</>)]}/>
	</div>

	<div>
you can either say <span className='text-blue-400'>on the dot</span> or <span className='text-blue-400'>o'clock</span> if 
		the minutes are precisely 0.

	<Word word={[(<>it's six <span className='text-blue-400'>o'clock</span></>), (<>it's 6:<span className='text-blue-400'>00</span></>)]}/>
	<Word word={[(<>it's six <span className='text-blue-400'>on the dot</span></>), (<>it's 6:<span className='text-blue-400'>00</span></>)]}/>
	</div>

	<div>In english, there are two ways in which you can tell the time when you also mention minutes</div>
	<div >the analog way:</div>
	<div>
	<div> you often mention the <span className='text-orange-400'>minutes</span>  first and then the <span className='text-blue-400'>hour</span> </div>
	<Word word={[(<>it's <span className='text-orange-400'>five</span> past <span className='text-blue-400'>three</span></>), (<>it's <span className='text-blue-400'>3</span>:<span className='text-orange-400'>05</span></>)]}/>
	</div>
	<div>
if the minutes are less than 30, you can say <span className='text-blue-400'>it's [minute] <span className='text-orange-400'>past</span> [hour]</span> or <span className='text-blue-400'>it's [minute] <span className='text-orange-400'>after</span> [hour]</span>
		</div>
		<div>
<Word word={[(<>it's five <span className='text-orange-400'>after</span> two</>), (<>it's 2:05</>)]}/>
<Word word={[(<>it's twenty-five <span className='text-orange-400'>after</span> two</>), (<>it's 2:25</>)]}/>


<Word word={[(<>it's five <span className='text-orange-400'>past</span> two</>), (<>it's 2:05</>)]}/>
<Word word={[(<>it's twenty-five <span className='text-orange-400'>past</span> two</>), (<>it's 2:25</>)]}/>
		</div>

		<div>you can also use <span className='text-orange-400'>a quarter</span> to mean <span className='text-orange-400'>fifteen</span></div>
	<div>

<Word word={[(<>it's <span className='text-orange-400'>a quarter</span> after five</>), (<>5:<span className='text-orange-400'>15</span></>)]}/>
<Word word={[(<>it's <span className='text-orange-400'>fifteen</span> after five</>), (<>5:<span className='text-orange-400'>15</span></>)]}/>
		</div>	
<div>when we reach the minute 30, we use <span className='text-orange-400'>half past</span> or <span className='text-orange-400'>thirty past</span> or <span className='text-orange-400'>thirty after</span>(do not say <span className='text-orange-400'>half after</span>) </div>
	<div>
<Word word={[(<>it's <span className='text-orange-400'>half</span> past nine</>), (<>it's 9:<span className='text-orange-400'>30</span></>)]}/>
<Word word={[(<>it's <span className='text-orange-400'>thirty</span> past nine</>), (<>it's 9:<span className='text-orange-400'>30</span></>)]}/>
<Word word={[(<>it's <span className='text-orange-400'>thirty after</span> nine</>), (<>it's 9:<span className='text-orange-400'>30</span></>)]}/>
	</div>

<div>after minute 30 we go backward. we count the minutes need to reach the next hour. you can either use <span className='text-orange-400'>to</span> or <span className='text-orange-400'>'till</span> which is a little bit more casual</div>	

<div>
	<Word word={[(<>it's five <span className='text-orange-400'>to</span> three</>), (<>it's 2:55</>)]}/>
	<Word word={[(<>it's five <span className='text-orange-400'>'till</span> three</>), (<>it's 2:55</>)]}/>
</div>


<div>you can also use <span className='text-orange-400'>a quarter</span> to mean <span className='text-orange-400'>fifteen</span> right here</div>	
<div>
<Word word={[(<>it's <span className='text-orange-400'>a quarter</span> 'till five</>), (<>4:45</>)]}/>
<Word word={[(<>it's <span className='text-orange-400'>fifteen</span> 'till five</>), (<>4:45</>)]}/>
</div>

</div>
	</>);
}

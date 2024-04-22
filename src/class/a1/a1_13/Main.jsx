import {Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest} from './../../explanationUtilities'

import timeImage from './timeImage.png'
import tellingTime from './tellingTime.png'

export function A1_13(){
return (<> 
	<TitleContainer  title={<>parts of the day</>} / >
	<img className='p-2 rounded-xl' src={timeImage} />
	<TitleContainer  title={<>how to talk about time inside the 12 hour period</>} / >
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

	<div>you don't have to tell the minutes if you don't want to</div>
		<div>
	<Word word={[(<>it's five p.m</>), (<>it's from 5:00 p.m to 5:50 p.m</>)]}/>
	<Word word={[(<>it's five in the afternoon</>), (<>it's from 5:00 p.m 5:50 p.m</>)]}/>
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

<div>the digital way:</div>
<div>in the digital way, we start with the <span className='text-blue-400'>hour</span> and then say the <span className='text-orange-400'>minutes</span></div>

<Word word={[(<>it's <span className='text-blue-400'>five</span> <span className='text-orange-400'>twenty five</span></>), (<>it's <span className='text-blue-400'>5</span>:<span className='text-orange-400'>25</span> </>)]}/>
		<div>when the minutes are below ten, we use <span className='text-blue-400'>Oh</span> to mean 0</div>
<Word word={[(<>it's eight <span className='text-blue-400'>oh</span> six</>), (<>it's 8:<span className='text-blue-400'>0</span>6</>)]}/>
	<TitleContainer  title={<>how to speficy further time</>} / >
<ExplanationContainer  explanation={<>the day takes 24 hours but we divide them in 12 hours and use p.m or a.m to talk about which section of day we're talking about. Just like spanish, from 00:00(military time) to noon(12:00 in military time) we use a.m and for the remaning hours we use the p.m the talk about  time</>} example={(<div className="flex flex-col items-center justify-center text-center gap-2">
<div>
<div>4 p.m</div>
<div>16:00(military time)</div></div>

<div>
<div>2 a.m</div>
<div>2:00(military time)</div></div>
	</div>)} / >

<div> parts of the day </div>
<Word word={[(<>morning</>), (<>from 2 a.m or the hour you wake up to noon</>)]}/>
<Word word={[(<>noon</>), (<>12 p.m</>)]}/>
<Word word={[(<>midday</>), (<>from 12 p.m 2 p.m</>)]}/>
<Word word={[(<>afternoon</>), (<>from 12 p.m 6 p.m</>)]}/>
<Word word={[(<>evening</>), (<>from 6 p.m or 9 p.m or when you go to sleep</>)]}/>
<Word word={[(<>night</>), (<>where the sun sets to where the sun rises</>)]}/>
<Word word={[(<>midnight</>), (<>12 a.m to 2 a.m</>)]}/>

<div>You can use parts of the day  like <span className='text-blue-400'>morning</span>, <span className='text-blue-400'>afternoon</span>, <span className='text-blue-400'>evening</span> to talk about time with the hours and minutes</div>

		<div>
<Word word={[(<>it's ten in the morning</>), (<>it's 10 a.m</>)]}/>
<Word word={[(<>it's ten in the evening</>), (<>it's 10 p.m</>)]}/>
</div>

		<div>
<Word word={[(<>it's three in the morning</>), (<>it's 3 a.m</>)]}/>
<Word word={[(<>it's three in the evening</>), (<>it's 3 a.m</>)]}/>
<Word word={[(<>it's three in the afternoon</>), (<>it's 3 p.m</>)]}/>
</div>

</div>
	</>);
}

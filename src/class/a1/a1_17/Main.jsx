import { Word, TinyExplanation, ExplanationContainer, TitleContainer, ListOfTest } from './../../explanationUtilities'
import DaysOfWeek from './daysOfTheWeek.png'

export function A1_17() {
    return (<>
        <TitleContainer title={<>Days Of The Week</>} />
        <img className='p-4 rounded-3xl' src={DaysOfWeek} alt="days of week" />


    </>);
}

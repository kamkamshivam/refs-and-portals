import React , {useState , useRef} from 'react';
// let a = null;  this a will be shared by every component ** in app.jsx
export default function TimerChallenge({title, targetTime}){
    const [timerStarted , setTimerStarted] = useState(false);
    const[timerExpired , setTimerExpired] = useState(false);
    const timer = useRef(); // each component will get its individual useref
    function handleStart(){
         timer.current= setTimeout(()=>{  //setTimeout returns a pointer  which is stored in timer variable and then used by clearTimeout
            setTimerExpired(true)
        }, targetTime *1000);
        setTimerStarted(true);
    }
function handleStop(){
    clearTimeout(timer.current);
}
    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired&& <p>You Lost!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
        <p className={timerStarted ? 'active' : undefined}></p>
        {timerStarted ? 'Time is running...' : 'Tiimer inactive'}
    </section>
}
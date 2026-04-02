import { useEffect, useState } from "react";

// 2026.03.23 과제01
export default function Timer() 
{
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(null);
    const [records, setRecords] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    
    // 시작, 정지
    const toggleTimer = (timerId) => {
        if(timerId) 
        {
            clearInterval(timerId)
            setTimerId(null)
            setIsRunning(false)
        }
        else
        {
            // 1초에 0.01초씩 업데이트
            const newId = setInterval( () => { setSeconds( (prev) => (prev+0.01)) }, 1000)
            setTimerId(newId)
            setIsRunning(true)
        }
    }

    // 기록
    const recordTimer = () => {
        setRecords(prev => [...prev, seconds]);
    };

    // 초기화
    const resetTimer = () => {
        setSeconds(0);
        setIsRunning(false);
        setRecords([]);
    };

    return (
        <>
            <div>
                <h1>{seconds.toFixed(2)}초</h1>
                <button onClick={() => toggleTimer(timerId)}>
                    {timerId ? "정지" : "시작"}
                </button>
                <button style={{margin:'5px'}} disabled={!isRunning} onClick={() => recordTimer()}>
                    기록
                </button>
                <button disabled={isRunning} onClick={resetTimer}>
                    초기화
                </button>
            </div>
            <div>
                {records.map((time, idx) => (
                    <p key={idx}>{time} 초</p>
                ))}
            </div>
        </>
    )
}

// 기본 (강의내용)
export function MakeTimer() 
{
    const [seconds, setSeconds] = useState(0);
    const [timerId, setTimerId] = useState(null);

    const toggleTimer = (timerId) => {
        if(timerId) 
        {
            clearInterval(timerId)
            setTimerId(null)
        }
        else
        {
            const newId = setInterval( () => { setSeconds( (prev) => (prev+1)) }, 1000)
            setTimerId(newId)
        }
    }

    return (
        <div>
            <h1>{seconds}초</h1>
            <button onClick={() => toggleTimer(timerId)}>
                {timerId ? "정지" : "시작"}
            </button>
        </div>
    )
}

// 연습문제
export function EffectTimer()
{
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect( () => { 
        if(isRunning)
        {
            const id = setInterval( () => setSeconds(prev => prev+1), 1000)
            console.log("Timer Start")
        
            return () => {
                clearInterval(id)
                console.log("Timer Stop")
            }
        }
    }, [isRunning] )

    return (
    <div>
        <h1>{seconds}초</h1>
        <button onClick={() => setIsRunning(prev => !prev)}>
            {isRunning ? "정지" : "시작"}
        </button>
    </div>
    )
}

import { useState } from "react";

export default function UseStateEx()
{
    // const [state, setState] = useState(초기값);
    const [text, setText] = useState('입력하세요.');
    const [color, setColor] = useState('');

    return (
        <>
        <h1 style={{color}}>useState Basic</h1>
        <div>
            <button 
                onClick={() => setColor('red')} 
                style={{fontSize:'20px', color:'red', fontWeight:'bold'}}>빨간색</button>

            <button 
                onClick={() => setColor('blue')} 
                style={{fontSize:'20px', color:'blue', fontWeight:'bold'}}>파란색</button>
            
            <h2 style={{color}}>{text}</h2>
            <div>
                <input type="text" onChange={(e) => {setText(e.target.value)}}/>
            </div>
        </div>
        </>
    )
}
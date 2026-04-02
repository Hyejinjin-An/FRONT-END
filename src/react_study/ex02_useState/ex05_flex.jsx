import { useState } from "react"
import "./ex05_flex.css"

export default function FlexEx() {
    const [radius, setRadius] = useState(0)
    return (
        <>
      <div className="box" style={{borderRadius: `${radius}px`}}>
        <h2>Big Short</h2>
        <h2>진격의 거인</h2>
        <h2>주술회전</h2>
      </div>
      <div className="buttonbox">
        <button onClick={() => setRadius(radius+1)}>radius</button>
        <button onClick={() => setRadius(0)}>reset</button>
      </div>
      </>
    )
}
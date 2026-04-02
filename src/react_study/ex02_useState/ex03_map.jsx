import { useState } from "react"

const likes = {
    "왕과 사는 남자":20,
    "주술회전":30,
    "나루토": 14 
}

function Title({title, thumbsup})
{
    const [cnt, setCount] = useState(thumbsup)
    // style에 중괄호 2개인 이유 
    // 1. 변수 괄호
    // 2. 객체 괄호
    return (
        // <div style={{ height:100, padding:10, margin:10, border:"1px solid"}}>
        //     <h3>{title}</h3>
        //     <span>👍 {thumbsup}</span>
        // </div>
        <div style={{ height:100, padding:10, margin:10, border:"1px solid" }}>
            <h3>{title}</h3>
            <button onClick={() => setCount(cnt+1)}>👍 {cnt}</button>
        </div>
    )
}

export default function TitleList()
{
    return (
        <>
            {/* {
                Object.entries(likes).map( ([title, thumbsup], idx) => {
                    return <Title key={idx} title={title} thumbsup={thumbsup} />
                } )
            } */}
            {
                Object.entries(likes).map( ([title, thumbsup], idx) => {
                    return <Title key={idx} title={title} thumbsup={thumbsup} />
                } )
            }
        </>
    )
}
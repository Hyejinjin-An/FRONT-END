import { useState } from "react"

// 내보내기 
export default function Test()
{
    return <h1>안녕하세요.</h1>
}

export const SimpleTest = () => 
{
    return <h2>반갑습니다.</h2>
}

// 파라미터 추가
export function Param(prop)
{
    return <h3>{prop.name} 님 {prop.text} 내용이 추가 되었습니다.</h3>
}

// 연습
export function SetTitle()
{
    const [title, setTitle] = useState("환영합니다!")
    return (
        <>
        <h3>{title}</h3>
        <button onClick={(e) => {
            title.includes("반갑습니다.") ? setTitle("환영합니다.") : setTitle("반갑습니다.")
            }}>클릭</button>
        </>
    )
}

// 기본값
export function DefaultValue({name="SAVE"})
{
    return (
        <>
        <h3>{name} 하시겠습니까?</h3>
        <br />
        </>
    )
}
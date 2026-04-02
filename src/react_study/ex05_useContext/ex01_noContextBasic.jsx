import { createContext } from "react";

function FirstComp({userName})
{
    return (
        <div>
            <hi>첫 번째 컴포넌트</hi>
            <SecondComp username={userName} />
        </div>
    )
}

function SecondComp({userName})
{
    return (
        <h1>{userName} 입니다.</h1>
    )
}

export default function TestContext()
{
    const userName = '홍길동';
    return (
        <div>
            <h2>APP</h2>
            <FirstComp userName={userName} />
        </div>
    )
}
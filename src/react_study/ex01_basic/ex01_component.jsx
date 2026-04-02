// 화살표 함수
// default가 없는 경우, import시 {} 중괄호로 묶어주어야 한다.
export const MyComponent = () => 
{
    return <h2>아</h2>
}

// 원시 함수
export default function MyComponent2()
{
    return <h2>컴포넌트</h2>
}

// 함수에 파라미터 추가
export function Child(props)
{
    return <h1 style={props.childStyle}>안녕, {props.name}</h1>
}

// 파라미터 기본값으로 넘기기
export function Child2({name='Guest'})
{
    return <h1>안녕, {name}</h1>
}

// 파라미터 기본값 스타일 설정
// export function Child3({style='fontSize:"25px", color:"red", border:"2px solid”'})
// {
//     return <h1 style={style}></h1>
// }

// 파라미터 기본값 스타일 설정 답안
export function Child3({name='Guest', style='fontSize:"25px", color:"red", border:"2px solid”'})
{
    return <h1 style={style}>안녕, {name}</h1>
}

// distructuring : 비구조화 할당
// 예제
export function Child_(props)
{
    // const props = 
    // {
    //     name:'말랑',
    //     childStyle: {fontSize:'20px'}
    // }

    const {name, childStyle} = props;
    return <h1 style={childStyle}>안녕, {name}</h1>
}

// distructuring : 비구조화 할당
const obj = {a:1, b:2}
import { memo, useCallback, useState } from "react"

function Child({onClick}) {
  console.log("Child 렌더링")
  return <button onClick={onClick}>+1</button>
}

const MemoChild = memo(Child)

export default function UseCallbackEx(){
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState("라벨");

  const handleAdd = useCallback(
    ()=>setCount(c=>c+1)
  , [])
  return (
    <div>
      <h3>Count: {count}</h3>
      <p>라벨: {label}</p>
      <MemoChild onClick={handleAdd}/>
      <button onClick={()=>setLabel(prev=>prev+"!")}>라벨 변경</button>
    </div>
  )
}
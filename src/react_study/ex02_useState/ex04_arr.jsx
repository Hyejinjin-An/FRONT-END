import { useState } from "react";

export default function UseStateArr() {
  const titleList = ['진격의 거인', '기생충', '빅숏'];
  const [thumbsup,setThumbsup] = useState([0,0,0]);

  function addThumbsup(idx) {
    // ex04_arr 
    // setThumbsup(thumbsup.map((cnt,i)=> {
    //   if (i === idx) {
    //     return cnt + 1
    //   }
    //   return cnt
    // }))

    // ex08_prev 응용
    setThumbsup((prev) => {
      return prev.map( (cnt, i) => { return (i === idx) ? (cnt + 1) : cnt } )
    })
  }

  return (
    <div style={{display:'flex', flexDirection:'row', padding:'20px', justifyContent:'center'}}>
      {
        titleList.map((title,idx)=>(
          <div
            key={idx} 
            style={{
            height:100, 
            width:100,
            padding:10, 
            margin:10, 
            border:"1px solid"
          }}>
            <h3>{title}</h3>
            <button onClick={()=>addThumbsup(idx)}>  👍 {thumbsup[idx]} </button>
          </div>
        ))
      }

    </div>
  )
}
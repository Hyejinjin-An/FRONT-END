import { useEffect, useRef, useState } from "react";

const cardStyle = {
  backgroundColor: "#4C4E58",
  color: "#fff",
  padding: "40px",
  
  borderRadius: "12px",
  width: "50%",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const fieldStyle = { 
  background: "#72757C", 
  border: "none",
  borderRadius: "10px",
  padding: "8px 4px", 
  color: "#FDFDFD", 
  fontSize: "25px" 
};

const wrapperStyle = {
  width: "50%",
  margin: "40px auto",
  backgroundColor: "#383B44",
  padding: "20px",
  borderRadius: "12px"
};

const cardNameStyle = {
  fontWeight: "bold",
  color: "#FDFDFD",
  fontSize: "25px"
};

const deleteButtonStyle = {
  backgroundColor: "red",
  border: "none",
  borderRadius: "10px",
  color: "#fff",
  padding: "4px 8px"
};

const fieldGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px"
};

const labelStyle = {
  fontSize: "14px",
  color: "#FDFDFD"
};

const cardDescStyle = {
  color: "#FDFDFD",
  textAlign: "left"
};


export default function AddRemoveUseEffect() {
  // 함수 실행 후 결과값으로도 초기값을 설정할 수 있다.
  const [card, setCard] = useState( () => { 
    const saved = localStorage.getItem("cards")
    return saved ? JSON.parse(saved) : [];
  })
  const [form, setForm] = useState({ name: '', desc: '' })
  const nameInputRef = useRef(null)
  const changeHandler = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCard(prev => {
      const newCard = [...prev, form];
      // localStorage.setItem("cards", JSON.stringify(newCard))
      return newCard
    })
    setForm({ name: '', desc: '' })

    // ex01_useRef 예제
    // current에 값이 있으면 focus() 실행하고 아니면 말어라.
    nameInputRef.current?.focus()
  }

  // ex09_useEffect
  // 두번째 파라미터가 빈 배열일 경우 첫 마운트에만 동작함
  // 두번째 파라미터에 값이 있는 경우 값이 변할 때마다 동작함
  // useEffect( () => { alert("useEffect 작동") }, [card])
  // useEffect( () => { alert("useEffect 작동") }, [])

  // 연습문제
  useEffect( () => { localStorage.setItem("cards", JSON.stringify(card)) }, [card] )

  // 뒷정리함수
  useEffect( () => { localStorage.setItem("cards", JSON.stringify(card))
    nameInputRef.current?.focus()
    return () => {
      console.log("clean up!!")
      console.log(card, 222)
    }
   }, [card] )

  return (

    <div style={wrapperStyle}>

      <form onSubmit={handleSubmit} style={cardStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle}>캐릭터 이름</label>
          <input type="text" name="name" value={form.name} onChange={changeHandler} style={fieldStyle} ref={nameInputRef}/>
        </div>
          <div style={fieldStyle}>
          <label style={labelStyle}>캐릭터 설정</label>
          <textarea name="desc" value={form.desc} onChange={changeHandler} style={fieldStyle} />
        </div>
        <button type="submit">추가</button>
      </form>

      {
        card.map( (item, idx) => (
          <div key={idx}
              style={cardStyle}>
                <div style={cardNameStyle}>{item.name}</div>
                <div style={cardDescStyle}>{item.desc}</div>
                <button
                  onClick={() => setCard(prev => {
                    const newCard = prev.filter((_, i) => i !== idx)
                    console.log(`${item.name}이 삭제되었습니다.`) 
                    // localStorage.setItem('cards', JSON.stringify(newCard))
                    nameInputRef.current?.focus()
                    return newCard
                  })}
                  style={{ 
                    backgroundColor: "red",
                    border:'none',
                    borderRadius:'10px',
                    color: "#fff",
                    padding: "4px 8px"
                  }}>삭제</button>
          </div>

        ))
      }
    </div>
  )
}
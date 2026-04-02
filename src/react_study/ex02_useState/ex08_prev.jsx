import { useEffect, useState } from "react";

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
  fontSize: "25px",
  color: "#FDFDFD"
};

const cardDescStyle = {
  color: "#FDFDFD",
  textAlign: "left"
};


export default function AddRemove() {
  const [card, setCard] = useState([])
  const [form, setForm] = useState({ name: '', desc: '' })
  const changeHandler = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCard(prev => [...prev, form])
    setForm({ name: '', desc: '' })
  }

  // ex09_useEffect
  // 두번째 파라미터가 빈 배열일 경우 첫 마운트에만 동작함
  useEffect( () => { alert("useEffect 작동") }, [])

  return (

    <div style={wrapperStyle}>

      <form onSubmit={handleSubmit} style={cardStyle}>
        <div style={fieldStyle}>
          <label style={labelStyle}>캐릭터 이름</label>
          <input type="text" name="name" value={form.name} onChange={changeHandler} style={fieldStyle} />
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
                  onClick={() => setCard(prev => prev.filter((_, i) => i !== idx))}
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
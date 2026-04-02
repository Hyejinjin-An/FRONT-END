import { useEffect, useState } from "react";

const cardStyle = {
  backgroundColor: "#4C4E58",
  color: "#fff",
  padding: "85px",
  
  borderRadius: "12px",
  width: "70%",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const fieldStyle = { 
  width: "100%",
  background: "#72757C", 
  border: "none",
  borderRadius: "10px",
  padding: "8px 4px", 
  color: "#FDFDFD", 
  fontSize: "25px" 
};

const wrapperStyle = {
  width: "70%",
  margin: "40px auto",
  backgroundColor: "#383B44",
  padding: "20px",
  borderRadius: "12px",
  gap: "50%",
  display: "flex",
};

const wrapperStyle2 = {
  width: "100%",
  backgroundColor: "#383B44",
  borderRadius: "12px",
  gap: "100px",
  display: "flex",
  textAlign: "center"
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
  gap: "8px",
};

const labelStyle = {
  fontSize: "25px",
  color: "#FDFDFD"
};

const tableStyle = {
  margin: "10px auto",
  fontSize: "15px",
  color: "#FDFDFD",
};

const buttonStyle = {
  width: "70px",
  color: "#FDFDFD"
};

const ulStyle = {
  gap: "8px",
  fontSize: "18px"
};

const cardDescStyle = {
  color: "#FDFDFD",
  textAlign: "left"
};

// 2026.03.23 과제02
export default function TodoList() {
  // 함수 실행 후 결과값으로도 초기값을 설정할 수 있다.
  const [work, setWork] = useState( () => { 
    const saved = localStorage.getItem("works")
    return saved ? JSON.parse(saved) : [];
  })
  const [form, setForm] = useState({ work: '', state: 0 })
  const changeHandler = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // todo 조건
    if(form.work.length < 5){
      alert("5글자 이상 입력해주세요.")
      return ;
    }

    setWork(prev => {
      const newWork = [...prev, form];
      localStorage.setItem("works", JSON.stringify(newWork))
      return newWork
    })
    setForm({ work: '', state: 0 })
  }

  // 삭제
  const deleteWork = (idx) => {
    setWork(prev => prev.filter((_, i) => i !== idx));
  };

  // 진행중 0 완료 1
  // todo: 모든 task 완료처리 할 경우 진행중으로 넘어옴
  const toggleState = (idx) => {
    setWork(prev =>
      prev.map((item, i) =>
        i === idx ? { ...item, state: item.state === 0 ? 1 : 0 } : item
      )
    );
  };

  // 뒷정리함수
  useEffect( () => { localStorage.setItem("works", JSON.stringify(work)) }, [work] )

  return (

    <div style={wrapperStyle}>
      <form onSubmit={handleSubmit} style={cardStyle}>
        <label style={labelStyle}>TODO LIST</label>
        <div style={fieldGroupStyle}>
          <input type="text" name="work" value={form.work} onChange={changeHandler} style={fieldStyle} />
          <button type="submit" style={buttonStyle}>추가</button>
        </div>

        <div style={wrapperStyle2}>
          <div style={tableStyle}>
            <h3>진행중</h3>
            <ul style={ulStyle}>
              {work.filter(item => item.state === 0).map((item, idx) => (
                <li key={idx} style={{ fontSize: "18px" }}>
                  {item.work}
                  <button type="button" onClick={() => toggleState(idx)}>완료처리</button>
                  <button type="button" onClick={() => deleteWork(idx)}>삭제</button>
                </li>
              ))}
            </ul>
          </div>

          <div style={tableStyle}>
            <h3>완료</h3>
            <ul style={ulStyle}>
              {work.filter(item => item.state === 1).map((item, idx) => (
                <li key={idx} style={{ fontSize: "18px" }}>
                  {item.work}
                  <button type="button" onClick={() => toggleState(idx)}>진행중</button>
                  <button type="button" onClick={() => deleteWork(idx)}>삭제</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  )
}
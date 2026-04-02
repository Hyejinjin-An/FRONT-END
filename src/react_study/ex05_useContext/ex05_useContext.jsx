import { createContext, useContext, useEffect, useRef, useState } from "react";

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
  fontSize: "25px",
  textAlign: "left"  
};

const deleteButtonStyle = {
  backgroundColor: "red",
  border: "none",
  borderRadius: "10px",
  color: "#fff",
  padding: "4px 8px",
  cursor: "pointer",
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

const LoginContext = createContext();

// TODO userInfo 추가
const usersInfo = [
  {id: "id1", pw: "1234"},
  {id: "id2", pw: "5678"}
] 

// TODO LoginForm 만들기
function LoginForm( /*{setIsLoginFormOpen, setUser}*/ ) {
  const {setIsLoginFormOpen, setUser} = useContext(LoginContext);
  const [form, setForm] = useState({id:"", pw:""});
  const [error, setError] = useState("");
  const loginRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => {
      return {...prev, [e.target.name]:e.target.value}
    })
  };

  const handleSubmit = (e) => {
    // 초기화방지?
    e.preventDefault();

    // 중괄호를 사용할 경우 반드시 return이 있어야함, return이 없다면 소괄호로만 진행.
    // 중괄호를 사용하고 return을 사용하지 않을 경우, false로 고정됨.
    const ok = usersInfo.some( ({id, pw}) => 
       (id === form.id) && (pw === form.pw) 
    )
    // const ok = usersInfo.some(
    //   (u) => {
    //     return (u.id === form.id) && (u.pw === form.pw)
    //   }
    // )

    // 만약 true인 경우 완료 화면으로 변경
    if(ok)
    {
      setIsLoginFormOpen(false);
      setUser(form.id)
    }
    else
    {
      setError("아이디/비밀번호가 일치하지 않습니다.")
    }
  }

  // 입력창 focus 설정
  useEffect( () => {
    loginRef.current?.focus();
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      style={{border:"1px solid lightgray"}}
    >
      <div
        style={{
          display:"flex",
          gap:"8px",
        }}
      >
        <label htmlFor="login_id">
          ID:
          <input
            id="login_id"
            name="id"
            type="text"
            value={form.id}
            onChange={handleChange}
            ref={loginRef}
          />
        </label>
        <label htmlFor="login_pw">
          Password:
          <input
            id="login_pw"
            name="pw"
            type="password"
            value={form.pw}
            onChange={handleChange}
          />
        </label>
        {error ? (
          <p style={{color:'red'}}>{error}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div 
        style={{
          display:"flex", 
          gap:"8px", 
          justifyContent:"flex-end"}}
      >
        <button type='button' onClick={()=>{

        }}>취소</button>
        <button type="submit">전송</button>
      </div>
    </form>
  )
}

function Header( /*{user, setIsLoginFormOpen, setUser}*/ ) { // TODO prop 추가
  const {user, setIsLoginFormOpen, setUser} = useContext(LoginContext);

  return (
    <header
      style={{
        borderBottom: "1px solid lightgray",
        display: "flex",
        alignItems: "center",
        paddingBottom: '20px',
        paddingTop:'20px'
      }}
    >
      <h1 style={{ flex: 1, textAlign: "center", margin: 0 }}>리액트 연습</h1>
      {/* TODO 상태에 따라 로긴 로그아웃 조건 추가 */}
      {
        user ? (
          <div>
            <span>안녕하세요 {user} 님</span>
            <button
              style={{
                padding: "8px 16px",
                marginLeft: "10px",
                border: "1px solid gray",
                cursor: "pointer"
              }}
              onClick={ () => { setUser(null); }}
            >
                로그아웃
            </button>
          </div>
        ) : (
            <button
              style={{
                padding: "8px 16px",
                marginLeft: "10px",
                border: "1px solid gray",
                cursor: "pointer"
              }}
                onClick={ () => { setIsLoginFormOpen(true) }}
              >
                로그인
            </button>
        )
      }
    </header>
  )
}

function AddRemove() {
  const [card, setCard] = useState(()=>{
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
      return newCard
    })
    setForm({ name: '', desc: '' })
  }

  useEffect(()=>{
    localStorage.setItem("cards", JSON.stringify(card))
    nameInputRef.current?.focus()
  }, [card])

  return (

    <div style={wrapperStyle}>
      {card.map((item, idx) => (
        <div key={idx} style={cardStyle}>

          <div style={cardNameStyle}>{item.name}</div>
          <div style={cardDescStyle}>{item.desc}</div>

          <button
            onClick={() => {
                setCard(prev => prev.filter((_, i) => i !== idx))
                console.log(`${item.name} 삭제되었습니다.`)
              }
            }
            style={deleteButtonStyle}
          >삭제</button>
        </div>
      ))}
      <form onSubmit={handleSubmit} style={cardStyle}>

        <div style={fieldGroupStyle}>
          <label style={labelStyle}>캐릭터 이름</label>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={changeHandler} 
            style={fieldStyle} 
            ref={nameInputRef} // 이름 입력창에 ref 연결
          />
        </div>
        <div style={fieldGroupStyle}>
          <label style={labelStyle}>캐릭터 설정</label>
          <textarea name="desc" value={form.desc} onChange={changeHandler} rows={4} style={fieldStyle} />
        </div>
        <button type="submit" style={{cursor: "pointer"}}>추가</button>
      </form>
    </div>
  )
}

export default function MyApp() {
  const [user, setUser] = useState(null)
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const value = {user, setUser, setIsLoginFormOpen}

  return (
    <>
    {/* TODO Header prop으로 user 추가 */}
    <LoginContext.Provider value={value}>
      <Header 
          // user={user}
          // setIsLoginFormOpen={setIsLoginFormOpen}
          // setUser={user}
      />
      {isLoginFormOpen && !user && 
        <LoginForm 
          // setIsLoginFormOpen={setIsLoginFormOpen}
          // setUser={setUser}
        />
      }
      <AddRemove />
    </LoginContext.Provider>
    </>
  )
}
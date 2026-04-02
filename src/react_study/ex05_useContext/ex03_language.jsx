import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext()

export default function LangComp() {
  const [lang, setLang] = useState("ko"); 
  const value = {lang:lang, setLang:setLang}

  return (
    // TODO: Provider 내부에 <Header />, <Main />, <Button />를 렌더링하세요.
    // TODO: Provider로 lang, setLang을 공유하세요
    <>
    <LanguageContext.Provider value={value}>
      <Header />
      <Main />
      <Button />
    </LanguageContext.Provider>
    </>
  );
}

function Header() {
  // TODO: lang이 'ko'면 "내 웹사이트", 아니면 "My Website"를 렌더링하세요.
  const languageContext = useContext(LanguageContext)
  const {lang} = useContext(LanguageContext)
  return <h1>{languageContext.lang === "ko" ? "내 웹사이트" : "My WebSite"}</h1> 
}

function Main() {
  // TODO:  lang이 'ko'면 "안녕하세요", 아니면 "Hello"를 렌더링하세요.
  const languageContext = useContext(LanguageContext)
  return <p>{languageContext.lang === "ko" ? "안녕하세요" : "Hello"}</p> 
}

function Button() {
  // TODO: - lang이 'ko'면 버튼 라벨 "언어 변경", 아니면 "Change language"
  //       - toggleLanguage를 구현하세요. (힌트: setLang을 가져와서 쓰세요)
  const languageContext = useContext(LanguageContext)
  const {lang, setLang} = useContext(LanguageContext)
  // const setLang = languageContext.setLang
  const toggleLanguage = () => {
    setLang(prev => {
      return prev === "ko" ? 'en' : 'ko';
    })
  }
  return (
    <button 
      onClick={toggleLanguage}
    >{languageContext.lang==="ko" ? "언어 변경" : "Change language" }
    </button>
  )
}

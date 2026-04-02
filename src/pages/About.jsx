import { Heading } from "@chakra-ui/react";
import { onAuthStateChange } from "../service/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function About(){
  // // setUser 사용하기위해 선언
  // const { setUser } = useContext(AuthContext)

  // // 로그인 상태가 바뀔 때마다 콘솔 찍히고 유저 정보 세팅
  // useEffect( () => {
  //   const unSubscribe = onAuthStateChange( (loginUser) => {
  //     console.log("onAuthStateChange 실행", new Date())
  //     setUser(loginUser);
  //   })

  //   // 뒷정리 함수 
  //   // 반환되는 함수를 실행하면 구독 중지
  //   return () => unSubscribe()

  // }, [])

  return (
    <Heading>About Page</Heading>
  )
}
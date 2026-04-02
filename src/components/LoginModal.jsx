
import { Button, Dialog, Field, Fieldset, HStack, Icon, Input, Separator, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";
import { AuthContext } from "../contexts/AuthProvider";
import { login, logout, onAuthStateChange } from "../service/auth";
import { PasswordInput } from "./ui/password-input";
import GoogleLoginButton from "./GoogleLoginButton";
import MenuWithAvatar from "./MenuWithAvatar";
import { toaster } from "./ui/toaster";
import authService from "../service/authService";
import { firebaseErrorMessages } from "../config/firebaseError";


export default function LoginModal() {
  const [open, setOpen] = useState(false);  // 모달 오픈
  const [email, setEmail] = useState(""); // 아이디
  const [password, setPassword] = useState(""); // 비밀번호
  const [loginError, setLoginError] = useState(false); // 에러 관리
  const {user, setUser} = useContext(AuthContext);  // 로그인 유저 보안설정
  const {loginWithEmail} = authService(); // 이메일로 로그인
   
  // password 관련 chakra UI 설치
  // npx @chakra-ui/cli snippet add password-input

  const handleLogin = async (e) => {
    e.preventDefault();
    try 
    {
      // 로그인 실행 함수
      const loginUser = await loginWithEmail(email, password)
      // 로그인 성공 했을 때의 값 ? 초기화 ?
      setUser(loginUser);
      setOpen(false);
      setEmail("");
      setPassword("");
      setLoginError(false);
    } 
    catch (error) 
    {
      console.error(error);
      const message = firebaseErrorMessages[err.code] || "로그인에 실패했습니다.." // 에러 메시지 표시
      setLoginError(message);
    }
  }

  const handleLogout = async () => {
    // 로그아웃 함수
    await logout();
    setUser(null);
  }

  // 로그인 상태가 바뀔 때마다 콘솔 찍히고 유저 정보 세팅
  // useEffect( () => {
  //   const unSubscribe = onAuthStateChange( (loginUser) => {
  //     console.log("onAuthStateChange 실행")
  //     console.log(loginUser)
  //     setUser(loginUser);
  //   })

  //   // 뒷정리 함수 
  //   // 반환되는 함수를 실행하면 구독 중지
  //   return () => unSubscribe()
  // }, [])

  if (user)
  {
    return (
      // <Button size='sm' variant='outline' onClick={handleLogout}>
      //   로그아웃
      // </Button>
      <MenuWithAvatar />
    );
  }

  return (
    // CloseTrigger 가 동작하면 e.open 이 false로 변함 ?
    <Dialog.Root open={open} onOpenChange={ (e) => {setOpen(e.open)} }>
      {/* TODO  Trigger 작성*/}
      <Dialog.Trigger asChild>
        {/* 자식과 똑같은 기능을 사용하겠다 : asChild */}
        <Button size='sm' variant='outline' onClick={ () => {setOpen(true)} }>
          로그인
        </Button>
      </Dialog.Trigger>
      
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>로그인</Dialog.Title>
            <Dialog.CloseTrigger
              size='lg'
              fontSize={"2xl"}
              m={3}
              _hover={{opacity:0.5}}
              cursor="pointer"
              variant="outline"
            >
              <Icon as={FaX} />
            </Dialog.CloseTrigger>
          </Dialog.Header>
          <Dialog.Body>
            <Fieldset.Root invalid={loginError}>

              <Field.Root mb={4}>
                <Field.Label>아이디</Field.Label>
                <Input 
                  type="text"
                  placeholder="이메일을 입력하세요"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Field.Root>

              <Field.Root mb={4}>
                <Field.Label>비밀번호</Field.Label>
                <PasswordInput 
                  value={password}
                  onChange={(e)=>{
                    return setPassword(e.target.value)
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin(e)}
                />
              </Field.Root>

              <Fieldset.ErrorText justifyContent="center">
                {loginError || "로그인에 실패했습니다."}
              </Fieldset.ErrorText>
              
              <Button
                type="submit"
                onClick={handleLogin}
                width="100%"
                mt={4}
              >
                로그인
              </Button>
            </Fieldset.Root>

              {/* Google 로그인 버튼 추가 */}
              <HStack my={4}>
                <Separator flex="1" />
                  <Text px={2} color="gray.500" fontSize="sm" flexShrink="0">
                    또는
                  </Text>
                <Separator flex="1" />
              </HStack>
              <GoogleLoginButton />

          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Positioner>

    </Dialog.Root>
  )

}
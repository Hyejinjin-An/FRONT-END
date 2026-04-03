import { Box, Button, Field, Fieldset, Heading, Input } from "@chakra-ui/react";
import { onAuthStateChange } from "../service/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toaster } from "../components/ui/toaster"

// 2026.04.03 zod 활용
const practiceSchema = z.object({
  name: z.string().min(2, "이름이 두 글자 이상"),
  email: z.email("올바른 이메일 형식이 아님")
})

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

  // zod 활용 : 초기화
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    reset
  } = useForm({
      resolver: zodResolver(practiceSchema),
      mode: "onSubmit",
      // mode: "onChange"
      defaultValues: {name: "", email: ""},
  })

  const fnSubmit = (data) => {
    console.log("submit Data: ", data);
    toaster.create({
      description: `이름: ${data.name} 이메일: ${data.email}`,
      type: "success",
      duration: 10000,
      closable: true
    })
    reset()
  }

  return (
    <Box>
      <Heading>About Page</Heading>
      <Fieldset.Root
        invalid={ Object.keys(errors).length > 0 }
      >
        <Fieldset.Content>
          <Field.Root mb={4} invalid={!!errors.name}>
            <Field.Label>이름</Field.Label>
            <Input
              {...register("name")}
              placeholder="이름 입력"
            />
            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root mb={4} invalid={!!errors.email}>
            <Field.Label>이메일</Field.Label>
            <Input
              {...register("email")}
              placeholder="이메일 입력"
            />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

        </Fieldset.Content>

        <Button
          type="submit"
          onClick={handleSubmit(fnSubmit)}
          width="100%"
          mt={4}
          // disabled={!isValid}
        >
          제출하기
        </Button>
      </Fieldset.Root>
    </Box>
  )
}
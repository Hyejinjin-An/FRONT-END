import z from "zod";

// Zod: 입력값이 올바른지 검사하는 스키마 기반 검증 라이브러리.
function validateAndLog(schema, value)
{
    try 
    {
        const result = schema.parse(value);
        console.log(`성공: ${result}`)    
    } 
    catch (error) 
    {
        console.log(`에러: ${error} | 입력값: ${value}`)
    }
}

const nameSchema = z.toString("문자열이어야 해 !!")
const emailSchema = z.email()
const userSchema = z.object({
    name: z.string("obj: name은 문자열"),
    age: z.number()
})
const signupSchema = z.object({
    email: z.email("올바른 이메일 형식이 아닙니다."),
    password: z.string()
        .min(6, "비밀번호는 최소 6자 이상이어야 합니다.")
        .regex(/[[!@#$%^&*()]]/, "특수문자를 포함해야 합니다.")
        .regex(/[0-9]/, "숫자를 포함해야 합니다.")
        .regex(/[a-zA-Z]/, "영문자를 포함해야 합니다."),
    passwordConfirm: z.string()
}).refine( (d) => d.pw === d.passwordConfirm, {
    message: "비밀번호 불일치",
    path: ['passwordConfirm']
})
const productSchema = z.object({
  productName: z.string().min(3).max(10),
  price: z.number().min(0),
  stock: z.number().min(0),
  seller_email: z.email(),
}).refine((d)=>{
  if (d.price >= 30000) {
    return d.stock >= 1
  }
  return true;
}, {
  message: "가격이 30000원 이상이면 재고가 1 이상이어야 합니다.",
  path: ['stock']
})

// 연습문제
const bookSchema = z.object({
    title: z.string().min(2).max(20),
    publishYear: z.number().min(1900).max(2025)
})

// validateAndLog(nameSchema, "abc");
// validateAndLog(emailSchema, "abcdef.com");
// validateAndLog(userSchema, {name: "james", age:15})
// validateAndLog(bookSchema, {title: "삼국지", publishYear: 2013})
// validateAndLog(signupSchema, {pw: '123', confirm: '123'})
// validateAndLog(signupSchema, {email: "test@test.com", password: 'abc123!', passwordConfirm: 'abc123!'})
validateAndLog(productSchema, {
  productName:"만연필",
  price: 30000,
  stock: 1,
  seller_email: "abc@def.com"
})

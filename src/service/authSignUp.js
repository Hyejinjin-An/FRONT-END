import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

export async function signUp(email, password)
{
    try 
    {
        const userCredential =  await createUserWithEmailAndPassword(auth, email, password)
        
        const user = userCredential.user
        console.log("회원가입 성공: ", user)
        return user;
    } 
    catch (error) 
    {
        console.error("회원가입 실패: ", error)
        throw error;
    }
}

export async function googleSignIn() 
{
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result?.user)
    return {user:result?.user}
  } catch(err) {
    console.error(err)
    throw err;
  }
}
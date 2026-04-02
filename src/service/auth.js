import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export async function login(email, password)
{
    try 
    {
        const cred = await signInWithEmailAndPassword(auth, email, password)
        return cred.user;
    } 
    catch (error) 
    {
        console.error(error)
        throw error;
    }
}

export async function logout()
{
    try 
    {
        await signOut(auth);    
    } 
    catch (error) 
    {
        console.error(error)
        throw error;
    }
}

// firebase 로그인 관련 이벤트가 있을 때마다 
// callback 함수를 실행시켜서 로그인 유지(관리로직?)
// * 인증 상태 변경 감지 함수
export function onAuthStateChange(callback)
{
    return onAuthStateChanged(auth, callback)
}
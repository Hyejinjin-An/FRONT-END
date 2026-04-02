import { async } from "@firebase/util";
import { toaster } from "../components/ui/toaster";
import { firebaseErrorMessages } from "../config/firebaseError"
import { login } from "./auth";
import { googleSignIn } from "./auth_google_signIn";

// 공통 옵션
const TOAST_OPTIONS = 
{
    duration: 5000,
    closable: true
}

export default function authService()
{
    const getErrorMsg = (err) => 
    {
        return firebaseErrorMessages[err?.code]
    }

    const showLoginSuccessToast = (user) =>
    {
        const userName = user?.displayName || user?.email || "사용자";
        toaster.create({
            description: `${userName}님 환영합니다!`,
            type: "success",
            ...TOAST_OPTIONS
        })
    }

    const showLoginErrorToast = (error) =>
    {
        toaster.create({
            description: getErrorMsg(error),
            type: "error",
            ...TOAST_OPTIONS
        })
    }

    const loginWithEmail = async (email, password) => 
    {
        try 
        {
            const user = await login(email, password);
            showLoginSuccessToast(user)
            return user
        } 
        catch (error) 
        {
            showLoginErrorToast(error);
            throw error;
        }
    }

    const loginWithGoogle = async () =>
    {
        try 
        {
            const { user } = await googleSignIn();
            showLoginSuccessToast(user)
            return user    
        } 
        catch (error) 
        {
            showLoginErrorToast(error);
            throw error;
        }
    }

    return {
        loginWithEmail,
        loginWithGoogle
    }

}
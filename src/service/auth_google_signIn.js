import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app, auth } from "../config/firebase";

export async function googleSignIn() 
{
    // const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    try 
    {
        const result = await signInWithPopup(auth, provider);
        // const cred = GoogleAuthProvider.credentialFromResult(result);
        return { user:result?.user}    
    } 
    catch (error) 
    {
        console.error(error)
        throw error;
    }
}
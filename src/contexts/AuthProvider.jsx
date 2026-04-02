import { createContext, useEffect, useState } from "react";
import { onAuthStateChange } from "../service/auth";

export const AuthContext = createContext();

export default function AuthProvider( {children} )
{
    // 초기값
    const [user, setUser] = useState(null);
    
    // 로그인 상태가 바뀔 때마다 콘솔 찍히고 유저 정보 세팅
    useEffect( () => {
        const unSubscribe = onAuthStateChange( (loginUser) => {
            console.log("onAuthStateChange 실행")
            console.log(loginUser)
            setUser(loginUser);
        })
        return () => unSubscribe()
    }, [])
    
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
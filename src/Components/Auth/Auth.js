import { useState, useEffect } from "react"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"

export default function Auth({
    login,
    signUp,
    credentials,
    handleChangeAuth
}) {
    const [showSignUp, setShowSignUp] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getToken = () => {
            const token = window.localStorage.getItem('token')
            if (!token || token === 'null' || token === 'undefined') return null
            const payload = JSON.parse(window.atob(token.split('.')[1]))
            if (payload.exp < Date.now() / 1000) {
                window.localStorage.removeItem('token')
                return null
            }
            return token
        }
        const token = getToken()
        const data = token ? JSON.parse(window.atob(token.split('.')[1])).user : null
        setUser(data)
    }, [])
    return (
        <>
            {
                user && user.name ?
                    <h1>Welcome {user.name.toUpperCase()}</h1> :
                    <>
                        <button
                            onClick={() => {
                                setShowSignUp(!showSignUp)
                            }}
                        >
                            {showSignUp ? 'Sign Up with a New Account Below or Click Here to Login as An Existing User' : 'Welcome Back, Login as an Existing User or Click Here to Sign Up with A new Account'}
                        </button>
                        {
                            showSignUp ?
                                <SignUp
                                    signUp={signUp}
                                    credentials={credentials}
                                    handleChangeAuth={handleChangeAuth}
                                /> :
                                <Login
                                    login={login}
                                    credentials={credentials}
                                    handleChangeAuth={handleChangeAuth}
                                />
                        }
                    </>
            }
        </>
    )
}
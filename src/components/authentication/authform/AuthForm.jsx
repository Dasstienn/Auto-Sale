import { useState, useRef, useContext } from 'react';
import useNavigation from '../../../hooks/use-navigation';
import AuthContext from '../../../store/AuthContext';

import classes from './AuthForm.module.css';

const AuthForm = () => {
    const { navigate } = useNavigation()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const authCtx = useContext(AuthContext)

    const [isLogin, setIsLogin] = useState(true);
    const [errorMsg, setErrorMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        setIsLoading(true)
        let url;

        if (isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVCzNNksiAKaO5GTQatgCLYuItFgG6slg"
        } else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVCzNNksiAKaO5GTQatgCLYuItFgG6slg"
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                setIsLoading(false)
                if (res.ok) {
                    setErrorMsg("")
                    return res.json()
                } else {
                    return res.json().then(data => {
                        let errorMessage = 'Authentication failed!'
                        if (data && data.error && data.error.message) {
                            errorMessage = data.error.message
                        }
                        throw new Error(errorMessage)
                    })
                }
            })
            .then(data => {
                const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
                authCtx.login(data, expirationTime.toString())
                navigate('/shop')
            })
            .catch(err => {
                setErrorMsg(err.message)
            })
    }

    return (
        <section className={classes.auth}>
            <h1 className={classes.title}>{isLogin ? 'Welcome!' : 'Create an account'}</h1>
            <p className={classes.title_supp}>{isLogin ? 'Sign in to access your account.' : 'To continue, please create an account'}</p>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' required ref={passwordInputRef} />
                </div>
                <p>{errorMsg === "" ? "" : errorMsg}</p>
                <div className={classes.actions}>
                    {!isLoading && <button>{isLogin ? 'SIGN IN' : 'Create Account'}</button>}
                    {isLoading && <p>Processing...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;

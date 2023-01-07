import { useRef, useContext } from 'react'
import AuthContext from '../../../store/AuthContext';
import useNavigation from '../../../hooks/use-navigation';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
    const { navigate } = useNavigation()
    const newPasswordInputRef = useRef()
    const authCtx = useContext(AuthContext)

    const submitHandler = event => {
        event.preventDefault()
        const enteredNewPassword = newPasswordInputRef.current.value
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBVCzNNksiAKaO5GTQatgCLYuItFgG6slg', {
            method: 'POST',
            body: JSON.stringify({
                idToken: authCtx.token,
                password: enteredNewPassword,
                returnSecureToken: false
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                navigate('/')
            })
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
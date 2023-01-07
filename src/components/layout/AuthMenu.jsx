import { useContext } from "react";
import Link from "../../routing/Link";
import AuthContext from "../../store/AuthContext";
import classes from "./AuthMenu.module.css"



export default function AuthMenu() {
    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn

    const logoutHandler = () => {
        authCtx.logout()
    }

    return (
        <div className={classes.authmenu}>
            {!isLoggedIn && (
                <Link key='Login' to='/auth'>Login</Link>
            )}
            {isLoggedIn && (
                <Link key='Profile' to='/profile'>Profile</Link>
            )}
            {isLoggedIn && (
                <button className={classes.logout} onClick={logoutHandler}>Logout</button>
            )}
        </div>
    )
}
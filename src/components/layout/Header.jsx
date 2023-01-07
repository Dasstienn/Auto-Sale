import React from "react";
import { useContext } from "react";
import useNavigation from "../../hooks/use-navigation";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import Menu from "./Menu";
import AuthMenu from "./AuthMenu";
import SearchInput from "./SearchInput"
import AuthContext from "../../store/AuthContext";

const Header = props => {
    const authCtx = useContext(AuthContext)
    const { navigate } = useNavigation()

    return (
        <header className={classes.header}>
            <div className={classes.part_one}>
                <h1 className={classes.logo} onClick={() => navigate("/")}>AUTO SALE</h1>
                <Menu />
            </div>
            <div className={classes.part_two}>
                <SearchInput />
                {authCtx.isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
                <AuthMenu />
            </div>
        </header>
    )
}

export default Header
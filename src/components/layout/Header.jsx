import React from "react";
import { useContext, useState } from "react";
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

    const [searchedVal, setSearchedVal] = useState("")
    const [filteredData, setFilteredData] = useState([])

    const getSearch = (val) => {
        const filteredData = props.data.filter(car => {
            const title = `${car.make} ${car.model} ${car.year}`
            return title.toLowerCase().includes(val.toLowerCase())
        })
        setSearchedVal(val)
        setFilteredData(filteredData)
    }

    const displayed = (car) => {
        setSearchedVal(car)
    }

    const clicked = (e) => {
        setSearchedVal(e.target.innerText)
        setFilteredData([])
    }

    return (
        <header className={classes.header}>
            <div className={classes.part_one}>
                <h1 className={classes.logo} onClick={() => navigate("/")}>AUTO SALE</h1>
                <Menu />
            </div>
            <div className={classes.part_two}>
                <SearchInput getSearch={getSearch} val={searchedVal}/>
                {searchedVal &&
                    (<ul className={classes.autocomplete}>
                        {
                            filteredData.map(car => {
                                const title = `${car.make} ${car.model} ${car.year}`
                                return <li onMouseOver={() => displayed(title)} onClick={clicked}>{title}</li>
                            })
                        }
                    </ul>)
                }
                {authCtx.isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
                <AuthMenu />
            </div>
        </header>
    )
}

export default Header
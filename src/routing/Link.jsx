import useNavigation from "../hooks/use-navigation"
import classes from "./Link.module.css"


function Link({ to, children }) {
    const { navigate } = useNavigation()

    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return
        }
        e.preventDefault()

        navigate(to)
    }

    return <a className={classes.menu_link} href={to} onClick={handleClick}>{children}</a>
}

export default Link
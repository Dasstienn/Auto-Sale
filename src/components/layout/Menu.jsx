import Link from "../../routing/Link";
import classes from "./Menu.module.css"



export default function Menu() {
    const links = [
        { label: 'Home', path: '/' },
        { label: 'Shop', path: '/shop' },
        { label: 'Sell', path: '/sell' },
        { label: 'FAQ', path: '/faq' },
        { label: 'News', path: '/news' },
        { label: 'Contact Us', path: '/contactUs' },
    ]

    const renderedLinks = links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })

    return (
        <div className={classes.menu}>
            {renderedLinks}
        </div>
    )
}
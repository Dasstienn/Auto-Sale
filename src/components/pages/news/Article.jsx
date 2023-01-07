import classes from "./Article.module.css"


const Article = (props) => {
    const { title, link, pubDate, image_url } = props.passedData

    return (
        <a className={classes.card} href={link} target="_blank">
            <p className={classes.date}>{pubDate}</p>
            <div className={classes.article}>
                <img src={image_url} alt={title} />
                <p>{title}</p>
            </div>
        </a>
    )
}

export default Article
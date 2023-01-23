import useFetch from "../../../useFetch";
import classes from "./News.module.css"
import Article from "./Article";

const News = () => {
    const url = "https://newsdata.io/api/1/news?apikey=pub_153684d264329870e5377c61408b48d420e02&q=car&country=us&language=en&category=technology"
    const { data, loading, error } = useFetch(url)

    return (
        <div className={classes.news}>
            <p className={classes.press_releases}>Press Releases</p>
            <p className={classes.sm_text}>In this section of Auto Sale, you can find news related to new cars and auto market, in overall.</p>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Error: Something went wrong</h3>}
            {data.map(item => {
                if(item.image_url) {
                    return <Article  passedData={item} />
                }
            })}
        </div>
    )
}

export default News
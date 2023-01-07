import useFetch from "../../../useFetch";
import classes from "./News.module.css"

const News = () => {
    const url = "https://newsdata.io/api/1/news?apikey=pub_153684d264329870e5377c61408b48d420e02&q=car&country=us&language=en&category=technology"
    const { data, loading, error } = useFetch(url)

    return (
        <div className={classes.news}>
            <h1>Custom React Hook (Data Fetch)</h1>
            {loading && <h3>Loading...</h3>}
            {error && <h3>Error: Something went wrong</h3>}
            {data.length}
        </div>
    )
}

export default News
import React from "react";
import classes from "./MainCategories.module.css"


export default class MainCategories extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { setCategory } = this.props
        return (
            <div className={classes.main_categories}>
                <button className={classes.sedan} onClick={() => setCategory("sedan")}>
                    <span className={classes.cat_names}>Sedan</span>
                </button>
                <button className={classes.suv} onClick={() => setCategory("suv")}>
                    <span className={classes.cat_names}>SUV</span>
                </button>
                <button className={classes.hatchback} onClick={() => setCategory("hatchback")}>
                    <span className={classes.cat_names}>Hatchback</span>
                </button>
                <button className={classes.coupe} onClick={() => setCategory("coupe")}>
                    <span className={classes.cat_names}>Coupe</span>
                </button>
            </div>
        )
    }
}
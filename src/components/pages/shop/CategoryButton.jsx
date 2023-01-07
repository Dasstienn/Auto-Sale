import * as React from 'react';
import classes from "./CategoryButton.module.css"

export default class CategoryButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <button
                className={classes.category_btn}
                    onClick={() => {
                        this.props.setCategory(this.props.category);
                    }}>
                    {this.props.category.slice(0,1).toUpperCase() + this.props.category.slice(1)}
                </button>
        );
    }
}
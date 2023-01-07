import React from "react";
import classes from "./Sell.module.css"
import SelectMake from "./Make";
import SelectModel from "./Model";
import SelectCategory from "./Category";
import SelectYear from "./Year";
import SelectColor from "./Color";
import SelectPrice from "./Price";
import SelectDesc from "./Desc";



export default class AddCar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            make: "",
            model: "",
            category: "",
            year: "",
            color: "",
            price: "",
            desc: "",
            newCar: {},
        }
    }

    setMake = (val) => {
        this.setState({ make: val })
    }

    setModel = (val) => {
        this.setState({ model: val })
    }

    setCategory = (val) => {
        this.setState({ category: val })
    }

    setYear = (val) => {
        this.setState({ year: val })
    }

    setColor = (val) => {
        this.setState({ color: val })
    }

    setPrice = (val) => {
        this.setState({ price: val })
    }

    setDesc = (val) => {
        this.setState({ desc: val })
    }

    addNewCar = (event) => {
        event.preventDefault()
        const { make, model, category, price, year, color, desc } = this.state
        const added = {
            id: 2,
            make: make,
            model: model,
            category: category,
            price: price,
            year: year,
            img: `https://cdn.imagin.studio/getImage?customer=usdustin&make=${make}&modelFamily=${model}&modelYear=${year}&zoomType=fullscreen&modelVariant=${category}&paintID=1&paintDescription=${color}`,
            desc: desc,
            owner: "Dastan"
        }
        this.setState({
            newCar: added
        })
        this.setState({ make: "", model: "", category: "", year: "", color: "", price: "", desc: "" })


    }

    componentDidUpdate(_, prevState) {
        if (prevState.newCar !== this.state.newCar) {
            fetch('https://auto-sale-fba02-default-rtdb.firebaseio.com/data.json', {
                method: 'POST',
                body: JSON.stringify(this.state.newCar),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(res => console.log(res))
        }
    }

    render() {
        return (
            <form onSubmit={this.addNewCar}>
                <SelectMake setMake={this.setMake} />
                {this.state.make !== "" && <SelectModel make={this.state.make} setModel={this.setModel} />}
                <div className={classes.specs}>
                    <SelectCategory setCategory={this.setCategory} />
                    <SelectYear setYear={this.setYear} />
                    <SelectColor setColor={this.setColor} />
                    <SelectPrice setPrice={this.setPrice} />
                </div>
                <SelectDesc setDesc={this.setDesc} required/>
                <button type="submit" className={classes.btn}>ADD CAR</button>
            </form>
        )
    }
}
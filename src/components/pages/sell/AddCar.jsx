import React from "react";
import classes from "./Sell.module.css"
import SelectMake from "./Make";
import SelectModel from "./Model";
import SelectCategory from "./Category";
import SelectYear from "./Year";
import SelectColor from "./Color";
import SelectPrice from "./Price";
import SelectDesc from "./Desc";
import PreviewCar from "./PreviewCar";


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
            image: "",
            desc: "",
            newCar: {},
            addCar: {},
            preview: false
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

    previewCarOpen = (event) => {
        event.preventDefault()
        const { make, model, category, price, year, color, desc } = this.state
        this.setState({ image: `https://cdn.imagin.studio/getImage?customer=usdustin&make=${make}&modelFamily=${model}&modelYear=${year}&zoomType=fullscreen&modelVariant=${category}&paintID=1&paintDescription=${color}` })
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
            addCar: added
        })
        this.setState({ preview: true })
    }

    previewCarClose = () => {
        this.setState({ preview: false })
    }

    addNewCar = () => {
        this.setState({
            newCar: this.state.addCar
        })

        setTimeout(() => {
            this.setState({ make: "", model: "", category: "", year: "", color: "", price: "", desc: "", image: "" })
            this.previewCarClose()
        }, 3000)
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
            (!this.state.preview ? (
                <form onSubmit={this.previewCarOpen}>
                    <SelectMake setMake={this.setMake} required />
                    {this.state.make !== "" && <SelectModel make={this.state.make} setModel={this.setModel} required />}
                    <div className={classes.specs}>
                        <SelectCategory setCategory={this.setCategory} required />
                        <SelectYear setYear={this.setYear} required />
                        <SelectColor setColor={this.setColor} required />
                        <SelectPrice setPrice={this.setPrice} required />
                    </div>
                    <SelectDesc setDesc={this.setDesc} required />
                    <button type="submit" className={classes.btn}>PREVIEW CAR</button>
                </form>
            )
                :
                (<PreviewCar car={this.state} onAdd={this.addNewCar} onEdit={this.previewCarClose} />)
            )

        )
    }
}
import React from "react";
import CarComponent from "./CarComponent";
import CategoryButton from "./CategoryButton";
import MainCategories from "../../layout/MainCategories";
import CarModal from "./CarModal";


export default class AllCars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            categoryToShow: "all",
            filteredCars: [],
            makeToShow: "",
            modelToShow: "",
            open: false
        }
    }

    componentDidMount() {
        fetch('https://auto-sale-fba02-default-rtdb.firebaseio.com/data.json')
            .then(res => res.json())
            .then(res => {
                const loadedCars = []
                for (const key in res) {
                    loadedCars.push(res[key])
                }
                this.setState({ data: loadedCars })
                this.filterCars()
            })
    }

    setCategory = (val) => {
        this.setState({ categoryToShow: val })
    }

    // componentDidUpdate(_, prevState) {
    //     if (prevState !== this.state) {
    //         this.filterCars()
    //     }
    // }

    // filterCars = () => {
    //     let filteredData = this.state.data.filter(car => {
    //         return car.category === this.state.categoryToShow || this.state.categoryToShow === "all"
    //     })
    //     filteredData = filteredData.filter(car => {
    //         return car.make === this.state.makeToShow || this.state.makeToShow === ""
    //     })
    //     filteredData = filteredData.filter(car => {
    //         return car.model === this.state.modelToShow
    //     })
    //     this.setState({ filteredCars: filteredData })
    // }

    render() {
        const categories = ["all"]
        this.state.data.forEach(el => {
            !categories.includes(el.category) && categories.push(el.category)
        })
        return (
            <div className="shop">
                <MainCategories setCategory={this.setCategory} />
                <div className="browse-by">
                    <p className="browse">Browse by:</p>
                    <p className="chosen-cat">{this.state.categoryToShow.slice(0, 1).toUpperCase() + this.state.categoryToShow.slice(1)}</p>
                    <p className="cat-count">
                        {this.state.data.filter(car => {
                            if (car.category === this.state.categoryToShow || this.state.categoryToShow === "all") {
                                return car
                            }
                        }).length} products
                    </p>
                </div>
                <div className="shop_main">
                    <div className="categories">
                        {categories.map(cat => (<CategoryButton category={cat} setCategory={this.setCategory} />))}
                    </div>
                    <div className="allcars">
                        {this.state.data.map(car => {
                            if (car.category === this.state.categoryToShow || this.state.categoryToShow === "all") {
                                return (
                                    <>
                                        <CarComponent car={car}/>
                                    </>
                                )
                            }
                        })}
                        {/* {this.state.filteredCars.map(car => < CardComponent car={car} />)} */}
                    </div>
                </div>
            </div>
        )
    }
}
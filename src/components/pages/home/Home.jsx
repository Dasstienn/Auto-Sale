import React from "react";
import useNavigation from "../../../hooks/use-navigation";
import classes from "./Home.module.css"


const Home = () => {
    const { navigate } = useNavigation()

    return (
        <div>
            <div className={classes.main}>
                <div className={classes.main_img}></div>
                <p className={classes.main_msg}>New & Pre-Owned Cars</p>
                <p className={classes.small_msg}>Let us find you a dream car!</p>
                <button className={classes.main_btn} onClick={() => navigate('/shop')}>VIEW VEHICLES</button>
            </div>
            <div className={classes.support}>
                <div className={classes.support_card}>
                    <div className={classes.img_area_one}></div>
                    <h3>Easy Navigation</h3>
                    <p>Find what you are looking for with few clicks.</p>
                </div>
                <div className={classes.support_card}>
                    <div className={classes.img_area_two}></div>
                    <h3>Flexible Payment Options</h3>
                    <p>We provide auto finance for a secured payment.</p>
                </div>
                <div className={classes.support_card}>
                    <div className={classes.img_area_three}></div>
                    <h3>Sell Vehicles</h3>
                    <p>List your vehicle on our platform and find elogible buyers.</p>
                </div>
            </div>
        </div>
    )
}

export default Home
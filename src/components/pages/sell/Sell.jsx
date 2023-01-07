import { useState } from "react";
import classes from "./Sell.module.css"
import { useContext } from "react";
import AuthContext from "../../../store/AuthContext";
import AddCar from "./AddCar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faPerson, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import useNavigation from "../../../hooks/use-navigation";


const Sell = (props) => {
    const { navigate } = useNavigation()
    const authCtx = useContext(AuthContext)

    return (
        <div className={classes.sell}>
            <div className={classes.add}>
                <div className={classes.add_img}></div>
                <div className={classes.msg}>
                    <p className={classes.msg_lg}>GET YOUR CAR LISTED IN A SWIFT</p>
                    <p className={classes.msg_sm}>We pick up your car. You get paid on the spot.</p>
                </div>
                <div className={classes.input}>
                    {authCtx.isLoggedIn && <AddCar />}
                    {!authCtx.isLoggedIn &&
                        (
                            <div className={classes.please_login}>
                                <p>Please sign in to add your vehicle:</p>
                                <button onClick={() => navigate('/auth')}>Login</button>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={classes.info}>
                <div className={classes.info_title}>
                    <p className={classes.lg_text}>HOW IT WORKS</p>
                    <p className={classes.sm_text}>Sell your vehicle on Auto Sale in just a few easy steps.</p>
                </div>
                <div className={classes.cards}>
                    <div className={classes.card}>
                        <FontAwesomeIcon className={classes.icon} icon={faFileLines} />
                        <h5>FILL OUT THE FORM</h5>
                        <p>Share your vehicle's details and we will generate a card with your car.</p>
                    </div>
                    <div className={classes.card}>
                        <FontAwesomeIcon className={classes.icon} icon={faPerson} />
                        <h5>WAIT FOR BUYERS</h5>
                        <p>Your vehicle will be listed on pur portal and potential customers can inqure additional information.</p>
                    </div>
                    <div className={classes.card}>
                        <FontAwesomeIcon className={classes.icon} icon={faMoneyBillWave} />
                        <h5>GET PAID</h5>
                        <p>Once you find a potential buyer, you can arrange a deal with them and get paid via secure channel.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell
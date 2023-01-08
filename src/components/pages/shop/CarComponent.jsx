import React from "react";
import { useContext } from "react";
import classes from "./CarComponent.module.css"
import AuthContext from "../../../store/AuthContext";
import CartContext from "../../../store/CartContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CarModal from "./CarModal";


const CarComponent = (props) => {
    const { id, make, model, category, price, img, year, desc, owner } = props.car
    const title = `${make} ${model} ${year}`

    const authCtx = useContext(AuthContext)
    const cartCtx = useContext(CartContext)

    // Modal handler
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: id,
            img: img,
            name: title,
            amount: 1,
            price: price
        })
    }

    const titleStyle = {
        height: "40px",
    }

    const descStyle = {
        marginTop: "30px",
        height: "40px",
    }

    return (
        <>
            <Card sx={{ maxWidth: 345, minWidth: 345, maxHeight: 430, minHeight: 380 }}>
                <div className={classes.open} onClick={handleOpen}>
                    <CardMedia sx={{ height: 200 }} image={img} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={descStyle}>
                            {desc}
                        </Typography>
                        <Typography sx={{ marginTop: 2, fontWeight: 600 }}>${price}</Typography>
                    </CardContent>
                </div>
                {authCtx.isLoggedIn &&
                    (<CardActions sx={{ marginBottom: 1 }}>
                        <Button size="small" onClick={addToCartHandler}>Add to Cart</Button>
                    </CardActions>)}
            </Card>
            <CarModal car={props.car} open={open} handleClose={handleClose}/>
        </>
    )
}

export default CarComponent
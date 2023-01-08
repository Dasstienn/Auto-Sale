import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from "react";
import AuthContext from "../../../store/AuthContext";
import CartContext from "../../../store/CartContext";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import classes from './CarModal.module.css'


const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const CarModal = (props) => {
    const { id, make, model, category, price, img, year, desc, owner } = props.car
    const { open, handleClose } = props

    const title = `${make} ${model} ${year}`
    const categoryToDisplay = category.slice(0, 1).toUpperCase() + category.slice(1)

    const authCtx = useContext(AuthContext)
    const cartCtx = useContext(CartContext)

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
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CardMedia sx={{ height: 200, borderBottom: 1 }} image={img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
                        {title} <span className={classes.category}> ({categoryToDisplay})</span>
                    </Typography>
                    <p className={classes.owner}><span>Owner:</span> {owner}</p>
                    <p className={classes.contact}><span>Contact:</span> (949) 302-2499</p>
                    <Typography variant="body2" color="text.secondary" sx={descStyle}>
                        {desc}
                    </Typography>
                    <Typography sx={{ marginTop: 2, fontWeight: 600 }}>${price}</Typography>
                </CardContent>
                {authCtx.isLoggedIn &&
                    (<CardActions sx={{ marginBottom: 1 }}>
                        <Button size="small" onClick={addToCartHandler}>Add to Cart</Button>
                    </CardActions>)}
            </Box>
        </Modal>
    )
}

export default CarModal
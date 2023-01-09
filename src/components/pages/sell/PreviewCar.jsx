import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import classes from './PreviewCar.module.css'



const PreviewCar = (props) => {
    const { id, make, model, category, price, img, year, desc, owner, image } = props.car

    const title = `${make} ${model} ${year}`
    const categoryToDisplay = category.slice(0, 1).toUpperCase() + category.slice(1)

    const mainBox = {
        width: "90%",
        bgcolor: 'background.paper',
    };

    const content = {
        textAlign: "left",
    };

    const titleStyle = {
        height: "40px",
    }

    const descStyle = {
        marginTop: "30px",
        height: "40px",
    }

    const editCar = () => {
        props.onEdit()
    }

    const addCar = () => {
        props.onAdd()
    }


    return (
        <>
            <Box sx={mainBox}>
                <CardMedia sx={{ height: 200, borderBottom: 1 }} image={image} />
                <CardContent sx={content}>
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
            </Box>
            <div className={classes.btns}>
                <button className={classes.add} onClick={addCar}>ADD CAR</button>
                <button className={classes.edit} onClick={editCar}>EDIT CAR</button>
            </div>
        </>
    )
}

export default PreviewCar
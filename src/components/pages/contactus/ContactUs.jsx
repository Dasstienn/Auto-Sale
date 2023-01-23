import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classes from './ContactUs.module.css'


const ContactUs = () => {
    const [message, setMessage] = React.useState()


    const boxStyle = {
        width: "100%",
        maxWidth: "1300px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "40px"
    }

    const specificQ = {
        fontSize: "10px"
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setMessage("Your feedback has been submitted. Thank you!")
    }

    return (
        <div className={classes.main}>
            <div className={classes.contactUs}>
                <h1>Contact Us</h1>
                <p>To ask a question or offer feedback, please use the fields below.</p>
                <div className={classes.inputField}>
                    <Box
                        component="form"
                        sx={boxStyle}
                        noValidate
                        autoComplete="off"
                        onSubmit={submitHandler}
                    >
                        <TextField
                            required
                            id="filled-required"
                            label="First Name"
                            defaultValue=""
                            sx={{ width: "44.7%" }}
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="Last Name"
                            defaultValue=""
                            sx={{ width: "44.7%" }}
                        />
                        <TextField
                            required
                            type="email"
                            id="filled-required"
                            label="Email Address"
                            defaultValue=""
                            sx={{ width: "92.5%" }}
                        />
                        <TextField
                            required
                            id="outlined-multiline-static"
                            label="Comments"
                            multiline
                            rows={7}
                            sx={{ width: "92.5%" }}
                        />
                        <p>If your feedback pertains to a specific page on AutoSale.com, please paste the URL in the Comments box.</p>
                        <button>Submit</button>
                    </Box>
                </div>
            </div>
            <div className={classes.second_col}>
                <div className={classes.more_info}>
                    <h3>More Information</h3>
                    <h4>Business Inquiries</h4>
                    <p className={classes.business_inq}>b2b.autosale.com</p>
                    <h4>Mailing Address</h4>
                    <p>21 California Ave, CA 92698</p>
                </div>
                <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5585.6487333525165!2d-117.83494193059313!3d33.65077147675455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0a06fe5e5b%3A0x21ec1d844f59ac4d!2s21%20California%20Ave%2C%20Irvine%2C%20CA%2092612!5e0!3m2!1sru!2sus!4v1674444011672!5m2!1sru!2sus" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ContactUs
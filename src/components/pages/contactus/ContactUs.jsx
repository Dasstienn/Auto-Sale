import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classes from './ContactUs.module.css'


const ContactUs = () => {
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
            </div>
        </div>
    )
}

export default ContactUs
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import classes from "./FAQ.module.css"
import { sliderClasses } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    margin: "0 100px 0 100px",
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FAQ() {
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const detail = {
        borderBottom: "0.5px solid lightgray"
    }

    return (
        <div className={classes.faq}>
            <p className={classes.title}>Frequently Asked Questions:</p>
            <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={{ fontWeight: 600, fontSize: 25, margin: 0.5 }}>What is a return policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can return your purchased vehicle within 5 days after the purchased date and get the full refund. The vehicle needs to be in the same condition as when it was purchased.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={{ fontWeight: 600, fontSize: 25, margin: 0.5 }}>How can I sell my car?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To list and sell your vehicle, you need to sign in and add your vehicle by filling out all the required fields.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{ fontWeight: 600, fontSize: 25, margin: 0.5 }}>Can I get auto loan?</Typography>
                </AccordionSummary>
                <AccordionDetails sx={detail}>
                    <Typography>
                        Yes, we provide financing options for eligible clients, meaning your credit score needs to be within our ranges to get auto loan.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <p className={classes.not_found}>If you did not find the answer to your question please contact our customer service at <span>service@autosale.com</span></p>
        </div>
    );
}

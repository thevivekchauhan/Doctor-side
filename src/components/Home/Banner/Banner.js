import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    function Item(props) {
        return (
            <Paper>
                <div className='banner-container'>
                    <img src={props.item.img} alt="" />
                    <div className='banner-text tracking-in-expand'>
                        <Typography component="h4" variant="h5">
                            {props.item.name}
                        </Typography>
                        <Typography component="p">
                            {props.item.description}
                        </Typography>

                        <HashLink smooth to="/appointment#appointment" className='text-style'>
                            {/* <Button sx={{ mt: 2 }} variant="contained" className="CheckButton">
                                Make an Appointment
                                <AddCircleIcon />
                            </Button> */}
                        </HashLink>
                    </div>
                </div>

            </Paper>
        )
    }
    const items = [
        {
            name: "Regain Your Mobility with Expert Physiotherapy",
            description: "Personalized physiotherapy sessions to help you recover faster and stay active!",
            img: "https://img.freepik.com/free-vector/flat-physiotherapist-social-media-promo-template_23-2149980046.jpg?t=st=1740121508~exp=1740125108~hmac=e065e38e91395325e55ef6b4b7e6ebdfe090e848c0878d11b736be07f9471f14&w=1380"
        },
        {
            name: "Track Your Recovery Progress Regularly",
            description: "Stay updated with your rehabilitation progress – every step matters in your healing journey.",
            img: "https://img.freepik.com/premium-vector/posttraumatic-rehabilitation-people-doctors-who-treat-patients-after-surgery-vector-illustration-white-background_273828-416.jpg?w=1380"
            // img: "https://img.freepik.com/free-vector/flat-physiotherapy-doctors-take-care-people-rehab-physical-therapist-orthopedic-help-patient-recovery-after-leg-knee-back-injuries-exercises-with-medical-equipment-rehabilitation-clinic_88138-860.jpg?t=st=1740121085~exp=1740124685~hmac=ec8073ff9bd1a6009e0b7856aa61d6a6046fbad18eb94b63051246fae9e0d833&w=1380"
        },
        {
            name: "Get Physiotherapy Consultation Online 24/7",
            description: "Connect with expert physiotherapists anytime for guidance on exercises and recovery plans.",
            img: "https://img.freepik.com/free-vector/hr-managers-candidates-job-interview_107791-12034.jpg?t=st=1740118819~exp=1740122419~hmac=6e63e93dedb99165a13b4792d02b632e7487156c0177d178a4572c6113302bb0&w=1380"
        },
       
    ]
    return (
        <div>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default Banner;
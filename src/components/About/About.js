import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
      }}
      points="0,100 50,00, 100,100"
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ color: "blACK", mx: 2, p: 2, textAlign: "center" }}
          variant="h4"
        >
          All-in-One Website Health Solution
        </Typography>

        <Typography sx={{ mx: 2, p: 2, textAlign: "center" }} variant="h6">
          10+ Years Of Experience in Medical Services
        </Typography>

        <Typography
          sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
          variant="p"
        >
          With <b>10+ years of experience</b> in medical services, we are dedicated to providing <b>expert physiotherapy care</b> that helps individuals regain mobility, reduce pain, and improve their overall well-being. Our <b>personalized treatment plans</b> focus on long-term recovery rather than just temporary relief. Whether you're recovering from an injury, surgery, or chronic pain, our team ensures a <b>comprehensive, evidence-based approach</b> to your rehabilitation.
          <br />
          <br />
          Unlike typical online reviews that often reflect <b>negative bias</b>, our methodology presents a <b>true picture of patient satisfaction</b>. We believe that <b>8 to 9 out of 10 patients</b> experience significant improvement with physiotherapy, yet misleading reviews can create doubt in people seeking treatment. This negative perception can lead to delays in care, which is why accurate feedback is crucial in guiding new patients toward the right treatment.
          <br />
          <br />
          Our <b>patient-first approach</b> prioritizes transparency, fairness, and effective treatments. Every session is designed to enhance mobility, strengthen muscles, and promote faster healing. Our advanced techniques include <b>manual therapy, dry needling, electrotherapy, exercise prescription, and posture correction</b>, ensuring a well-rounded recovery process.
          <br />
          <br />
          We encourage you to share your <b>physiotherapy journey</b> by leaving a review on <strong>Health Care</strong>. Whether your experience was <b>positive or had room for improvement</b>, your feedback helps others make informed decisions and promotes the importance of <b>quality rehabilitation services</b>.
          <br />
          <br />
        </Typography>
<br></br>
<br></br>
      </Container>
    </Box>
  );
};

export default About;

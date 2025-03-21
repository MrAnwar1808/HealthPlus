import React from "react";
import { Box, Typography } from "@mui/material";
import Doctor from "../../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "./About.css";

function About() {
  return (
    <Box className="about-section" id="about">
      <Box className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </Box>

      <Box className="about-text-content">
        <Typography variant="h3" className="about-title" sx={{fontWeight:"bold", padding:"40px", }}>
          <span>About Us</span>
        </Typography>

        <Typography className="about-description">
          Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </Typography>

        <Typography variant="h5" className="about-text-title">
          Your Solutions
        </Typography>

        <SolutionStep
          title="Choose a Specialist"
          description="Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </Box>
    </Box>
  );
}

export default About;

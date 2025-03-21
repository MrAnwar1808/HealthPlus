
import React, { useEffect, useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Doctor from "../../Assets/doctor-picture.png";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      setGoUp(window.scrollY > 600);
    };

    window.addEventListener("scroll", onPageScroll);
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <Box className="hero-section" sx={{marginBottom:"20px"}}>
      {/* Text Section */}
      <Box className="text-section">
        <Typography variant="h6" className="text-headline">
          ❤️ Health comes first
        </Typography>
        <Typography variant="h3" className="text-title" sx={{fontWeight:"bold", marginTop:"25px", marginBottom:"25px"}}>
          Find your Doctor and make an Appointments
        </Typography>
        <Typography variant= "h6" className="text-descritpion">
          Talk to online doctors and get medical advice, online prescriptions,
          refills, and medical notes within minutes. On-demand healthcare
          services at your fingertips.
        </Typography>
        <Button
          className="text-appointment-btn"
          startIcon={<FontAwesomeIcon icon={faCalendarCheck} />}
          onClick={handleBookAppointmentClick}
          sx={{padding:"15px", margin:"10px", backgroundColor:"#1A8EFD", color:"white", borderRadius:"30px", font:"24px", marginTop:"20px"}}
        >
          Book Appointment
        </Button>

        {/* Statistics */}
        <Box className="text-stats">
          {[
            { count: "145k+", text: "Receive Patients" },
            { count: "50+", text: "Expert Doctors" },
            { count: "10+", text: "Years of Experience" },
          ].map((item, index) => (
            <Box key={index} className="text-stats-container">
              <Typography>{item.count}</Typography>
              <Typography>{item.text}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Image Section */}
      <Box className="hero-image-section">
        <img src={Doctor} alt="Doctor" className="hero-image1" />
      </Box>

      {/* Scroll-to-top button */}
      {goUp && (
        <IconButton onClick={scrollToTop} className="scroll-up">
          <FontAwesomeIcon icon={faAngleUp} />
        </IconButton>
      )}
    </Box>
  );
};

export default Hero;

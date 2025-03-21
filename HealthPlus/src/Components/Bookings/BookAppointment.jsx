
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Doctor from "../../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import './BookAppointment.css';

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <Box className="ba-section">
      <Box className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </Box>

      <Box className="ba-text-content">
        <Typography className="ba-title" variant="h4" style={{fontWeight:"bold", paddingBottom:"40px"}}>
          <span>Why Choose Health</span>
        </Typography>
        <Typography className="ba-description" variant="h6" style={{marginBottom:"10px"}}>
          Discover the reasons to choose Health Plus for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </Typography>

        <Typography className="ba-checks ba-check-first" variant="h5" style={{fontWeight:"bold", padding:"10px"}}>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Best Professional Doctors
        </Typography>
        <Typography className="ba-checks" variant="h5" style={{fontWeight:"bold", padding:"10px"}}>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Emergency Care
        </Typography>
        <Typography className="ba-checks" variant="h5" style={{fontWeight:"bold", padding:"10px"}}>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> 24/7 Support Live Chat
        </Typography>
        <Typography className="ba-checks ba-check-last" variant="h5" style={{fontWeight:"bold", padding:"10px"}}>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Enrollment Easy and Quick
        </Typography>

        <Button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
          startIcon={<FontAwesomeIcon icon={faCalendarCheck} />}
          style={{borderRadius:"30px", padding:"20px", backgroundColor:"#1A8EFD", color:"white", marginTop:"20px"}}
        >
          Book Appointment
        </Button>
      </Box>
    </Box>
  );
}

export default BookAppointment;

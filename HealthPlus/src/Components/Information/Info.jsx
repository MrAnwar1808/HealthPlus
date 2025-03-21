import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import { Box, Typography, Container } from "@mui/material";
import './Info.css'


function Info() {
  return (
    <Container className="info-section" id="services" sx={{ textAlign:"center", backgroundColor:"white", width:"100%"}}>
      <Box className="info-title-content" >
        <Typography variant="h3" className="info-title" sx={{padding:"10px", fontSize:"40px", fontWeight:"bold", fontFamily: 'Poppins, sans-serif'}}>
          <span>What We Do</span>
        </Typography>
        <Typography className="info-description" variant="h6" sx={{ margin: "20px", color: "rgb(77, 75, 75)", fontFamily: "Rubik, sans-serif", fontSize: "18px", letterSpacing: ".8px", lineHeight: "1.8rem" }}>
          We bring healthcare to your convenience, offering a comprehensiverange of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors whoprovide expert medical advice, issue online prescriptions, and offer 
          quick refills whenever you require them.
        </Typography>
      </Box>

      <Box className="info-cards-content" sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", justifyContent: "center", alignItems: "center" }}>
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use state-of-the-art technology to assess your cardiovascular health and design personalized treatment plans. From comprehensive screenings to advanced interventions, we are committed to helping you maintain a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your oral health needs. Our skilled dentists provide a wide range of treatments, from routine check-ups and cleanings to cosmetic procedures and restorative treatments."
          icon={faTooth}
        />
      </Box>
    </Container>
  );
}

export default Info;
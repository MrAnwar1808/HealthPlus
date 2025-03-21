
import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../../Assets/profile-1.png";
import profile2 from "../../Assets/profile-2.png";
import profile3 from "../../Assets/profile-3.png";
import profile4 from "../../Assets/profile-4.png";
import { Box, Typography, Grid } from "@mui/material";
import './Doctors.css'



function Doctors() {
  return (
    <Box className="doctor-section" id="doctors">
      <Box className="dt-title-content" >
        <Typography className="dt-title" variant="h4" gutterBottom sx={{fontWeight:"bold", padding:"20px", marginTop:"20px"}}>
          <span>Meet Our Doctors</span>
        </Typography>
        <Typography className="dt-description" variant="h5">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </Typography>
      </Box>

      <Grid   className="dt-cards-content" >
        <Grid >
          <DoctorCard img={profile1} name="Dr. Kathryn Murphy" title="General Surgeons" stars="4.9" reviews="1800" />
        </Grid>
        <Grid >
          <DoctorCard img={profile2} name="Dr. Jacob Jones" title="Hematologists" stars="4.8" reviews="700" />
        </Grid>
        <Grid >
          <DoctorCard img={profile3} name="Dr. Jenny Wilson" title="Endocrinologists" stars="4.7" reviews="450" />
        </Grid>
        <Grid >
          <DoctorCard img={profile4} name="Dr. Albert Flores" title="Hematologists" stars="4.8" reviews="500" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Doctors;
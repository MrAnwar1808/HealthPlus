import React from "react";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard({ icon, title, description }) {
  return (
    <Box className="info-cards" sx={{
      height: "auto",
      border: "2px solid #d7d3d3",
      borderRadius: "12px",
      backgroundColor: "white",
      position: "relative",
      padding: "15px",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      width: "550px",
      justifyContent: "center"
    }}>
      <Box className="info-card-icon" sx={{
        position: "absolute",
        top: "-24px",
        left: "44%",
        padding: "10px",
        backgroundColor: "#DCE6FF",
        borderRadius: "30px"
      }}>
        <FontAwesomeIcon className="info-fa-icon" icon={icon} style={{ color: "#2C96FF", fontSize: "24px" }} />
      </Box>
      <Typography className="info-card-title" sx={{
        
        color: "black",
        fontFamily: "Poppins, sans-serif",
        fontSize: "28px",
        fontWeight: "bold",
        letterSpacing: ".8px"
      }}>{title}</Typography>
      <Typography className="info-card-description" sx={{
        margin: "14px",
        color: "rgb(77, 75, 75)",
        fontFamily: "Rubik, sans-serif",
        fontSize: "18px",
        letterSpacing: ".8px",
        lineHeight: "1.5rem"
      }}>{description}</Typography>
    </Box>
  );
}

export default InformationCard;

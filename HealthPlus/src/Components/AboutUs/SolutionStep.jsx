
import React from "react";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function SolutionStep(props) {
  return (
    <Box className="about-text-step">
      <Typography className="about-text-sTitle">
        <span style={{fontWeight:"bold", fontSize:"20px"}}>
          <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "}
          {props.title}
        </span>
      </Typography>
      <Typography className="about-text-description">
        {props.description}
      </Typography>
    </Box>
  );
}

export default SolutionStep;

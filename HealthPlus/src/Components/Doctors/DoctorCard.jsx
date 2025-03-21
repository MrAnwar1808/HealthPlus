
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, Typography } from "@mui/material";

function DoctorCard(props) {
  return (
    <Card className="dt-card" >
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <CardContent>
        <Typography className="dt-card-name" variant="h6">{props.name}</Typography>
        <Typography className="dt-card-title" variant="subtitle1">{props.title}</Typography>
        <Typography className="dt-card-stars" variant="body2">
          <FontAwesomeIcon icon={faStar} style={{ color: "#F7BB50", paddingRight: "6px" }}/>
          {props.stars}
          <span className="dt-card-reviews"> ({props.reviews}+ Reviews)</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;
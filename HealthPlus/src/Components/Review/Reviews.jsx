
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import './Reviews.css';

function Reviews() {
  const customerReviews = [
    {
      name: "Esther Howard",
      location: "Texas, USA",
      message: "Health Plus transformed my healthcare experience! The online consultations were so convenient, and the doctors were knowledgeable and caring."
    },
    {
      name: "John Doe",
      location: "California, USA",
      message: "I found the perfect specialist for my condition through Health Plus. The personalized treatment plan made all the difference. Thank you for prioritizing my health!"
    },
    {
      name: "Alice Smith",
      location: "New York, USA",
      message: "Booking appointments was a breeze, and the service exceeded my expectations. The doctors truly listen and provide effective solutions. 5 stars!"
    },
    {
      name: "Bob Johnson",
      location: "Florida, USA",
      message: "Health Plus is a game-changer! The emergency care saved me during a critical situation. Grateful for their quick and efficient support."
    },
    {
      name: "Jane Brown",
      location: "Washington, USA",
      message: "I used to dread dental visits, but Health Plus made it a pleasant experience. The dentist was gentle and professional. I'll definitely be back!"
    },
    {
      name: "Robert Wilson",
      location: "Texas, USA",
      message: "Finally, a healthcare platform that puts patients first! The heart disease service provided comprehensive care and regular follow-ups. Thank you, Health Plus!"
    },
    {
      name: "Mary Lee",
      location: "California, USA",
      message: "I've been using Health Plus for a variety of health concerns, and each time, I received exceptional care. It's my go-to for all medical needs!"
    },
    {
      name: "David Miller",
      location: "Texas, USA",
      message: "I highly recommend Health Plus for online consultations. It's convenient, secure, and the doctors are top-notch. Great job, team!"
    },
    {
      name: "Sarah Johnson",
      location: "Florida, USA",
      message: "The convenience of accessing medical notes online was fantastic. Health Plus made managing my health records hassle-free! Best Healthcare services."
    },
    {
      name: "Michael Brown",
      location: "New York, USA",
      message: "As a busy professional, Health Plus has been a lifesaver. Quick prescriptions and refills without compromising on quality care. Thank you!"
    }
  ];

  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
  };

  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
  };

  return (
    <Box className="review-section" id="reviews">
      <Box className="rw-text-content">
        <Typography className="rw-text-title" variant="h4" sx={{padding:'20px', fontWeight:"bold"}}>
          More over <span className="rw-text-num">1500+ Customers</span>
        </Typography>
        <Typography className="rw-text-desc" variant="h4" sx={{padding:'10px', fontWeight:"bold", marginBottom:"20px"}}>Don't believe us, Check clients word</Typography>
        <Typography className="rw-text-format" >
          <span className="rw-text-quote1">''</span>
          <span className="rw-review"  style={{fontSize:"24px"}}>{customerReviews[review].message}</span>
          <span className="rw-text-quote2">''</span>
        </Typography>
        <Box className="rw-authors">
          <Box className="rw-names">
            <Typography className="rw-reviewer-name" variant="h5" style={{fontWeight:"bold",  marginTop:"40px", }}>{customerReviews[review].name}</Typography>
            <Typography className="rw-reviewer-place" variant="h6">{customerReviews[review].location}</Typography>
          </Box>
          <Box className="rw-btns" >
            <Button className="rw-next-btn" onClick={backBtnClick} sx={{fontWeight:"bold", fontSize:"50px"}}>←</Button>
            <Button className="rw-next-btn" onClick={frontBtnClick} sx={{fontWeight:"bold", fontSize:"50px"}}>→</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Reviews;
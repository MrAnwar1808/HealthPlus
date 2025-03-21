
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Box } from "@mui/material";
import "./LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container className="legal-section-title" >
      <Typography variant="h4" className="legal-siteTitle" component="h1">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </Typography>

      <Box className="legal-text-content">
        <Typography variant="h6" className="legal-title">General Info</Typography>
        <Typography className="legal-description">
          Welcome to Health Plus, your trusted online healthcare platform. Our
          mission is to provide accessible and personalized healthcare services
          to individuals seeking expert medical advice and treatment. By using
          our platform, you agree to the terms outlined in our Privacy Policy
          and Terms of Service.
        </Typography>

        <Typography variant="h6" className="legal-title">Privacy Policy</Typography>
        <Typography className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and medical information. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
        </Typography>

        <Typography variant="h6" className="legal-title">Terms of Service</Typography>
        <Typography className="legal-description">
          When using Health Plus, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with doctors,
          and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth experience for all users.
        </Typography>

        <Typography variant="h6" className="legal-title">Consultations</Typography>
        <Typography className="legal-description">
          Our platform connects you with expert doctors who provide online
          consultations. These consultations are not a replacement for in-person
          medical visits but serve as a convenient option for medical advice,
          prescriptions, and guidance. It's crucial to provide accurate and
          complete information to receive the best possible care.
        </Typography>

        <Typography variant="h6" className="legal-title">How it Works</Typography>
        <Typography className="legal-description">
          Health Plus is designed to simplify healthcare access. You can choose
          a specialist, schedule an appointment, and engage in a virtual
          consultation. Our specialists offer personalized advice and treatment
          plans tailored to your needs. Please remember that emergencies require
          immediate medical attention and should be directed to your local
          medical facility.
        </Typography>
      </Box>

      <Box className="legal-footer">
        <Typography>© 2013-2023 Health+. All rights reserved.</Typography>
      </Box>
    </Container>
  );
}

export default LegalDocs;

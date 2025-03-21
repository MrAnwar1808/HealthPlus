import React from "react";
import { Link } from "react-router-dom";
import { Email, Phone, Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import './Footer.css'

function Footer() {
  return (
    <Box className="footer-section">
      <Box className="footer-container">
        <Box className="ft-info">
          <Box className="ft-info-p1">
            <Typography className="ft-title" variant="h6">
              Health <span className="ft-sign">+</span>
            </Typography>
            <Typography className="ft-description">
              Talk to online doctors and get medical advice, online prescriptions, refills, and medical notes within minutes. On-demand healthcare services at your fingertips.
            </Typography>
          </Box>
          
        </Box>

        <Box className="ft-list">
          <Typography className="ft-list-title">Services</Typography>
          <List className="ft-list-items" >
            {["Emergency Care", "Heart Disease", "Dental Care", "Prescription", "Insights for doctors"].map((item) => (
              <ListItem key={item} component="a" href="#services" style={{color:"white"}}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box className="ft-list">
          <Typography className="ft-list-title">Legal</Typography>
          <List className="ft-list-items" >
            {["General Info", "Privacy Policy", "Terms of Services", "Consultations", "How it Works"].map((item) => (
              <ListItem key={item} component={Link} to="/legal" style={{color:"white"}}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box className="ft-list" id="contact">
          <Typography className="ft-list-title">Talk To Us</Typography>
          <List className="ft-list-items">
            <ListItem component="a" href="mailto:support@healthplus.com" >
              <Email style={{color:"yellow"}} /> <ListItemText primary="support@healthplus.com" style={{color:"white"}} />
            </ListItem>
            <ListItem component="a" href="mailto:appointment@healthplus.com">
              <Email style={{color:"yellow"}}/> <ListItemText primary="appointment@healthplus.com" style={{color:"white"}}/>
            </ListItem>
            <ListItem component="a" href="tel:+02254545252">
              <Phone style={{color:"yellow"}}/> <ListItemText primary="+022 5454 5252" style={{color:"white"}}/>
            </ListItem>
            <ListItem component="a" href="tel:+02223266232">
              <Phone style={{color:"yellow"}}/> <ListItemText primary="+022 2326 6232" style={{color:"white"}}/>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box className="ft-copyright">
        <Typography>© 2013-2023 Health+. All rights reserved.</Typography>
        <Box className="ft-social-links">
          <IconButton component="a"  title="LinkedIn" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton component="a"  title="Facebook" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton component="a"  title="Twitter" target="_blank">
            <Twitter />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

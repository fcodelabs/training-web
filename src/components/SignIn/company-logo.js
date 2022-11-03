import { Grid } from "@mui/material";
import React from "react";
import "./company-logo.css";
import company_logo from "./comapny-logo.png";
const CompanyLogo = () => {
  return (
    <Grid className="company-logo-container">
      <img src={company_logo} className="company-logo-image" />
      <div className="company-logo-text"> Dear Diary </div>
    </Grid>
  );
};

export default CompanyLogo;

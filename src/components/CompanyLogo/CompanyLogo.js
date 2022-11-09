import { Grid } from "@mui/material";
import React from "react";
import "./companyLogo.css";
import companyLogo from "./companyLogo.png";

const CompanyLogo = () => {
  return (
    <Grid className="company-logo-container">
      <img src={companyLogo} alt="" className="company-logo-image" />
      <div className="company-logo-text"> Dear Diary </div>
    </Grid>
  );
};

export default CompanyLogo;

import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import "./addForm.css";

const AddForm = ({ passfunction }) => {
  const [ViewMode, setViewMode] = useState("0");

  const [title, setTitle] = useState(false);

  const [desc, setDesc] = useState(false);

  const [submit, setSubmit] = useState(false);

  const [titleInputValue, setTitleInputValue] = useState("");

  const [descInputValue, setDescInputValue] = useState("");

  

  const submitHandler = (e) => {
    e.preventDefault();
    
      passfunction({ title: titleInputValue, desc: descInputValue });
      setTitleInputValue("");
      setDescInputValue("");
    
  };

  return (
    <Grid container className="submit-new-form-container">
      <div className="submit-new-form-title">
        <TextField
          id="title-input"
          placeholder="Submit New"
          value={titleInputValue}
          required
          onChange={(e) => {
            setTitleInputValue(e.target.value);
          }}
          className={[
            "submit-new-form-title-input",
            ViewMode === "1" ? "submit-new-form-title-input-mode-1" : "",
          ]}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          onFocus={() => {
            // setTitle(true);
            setViewMode("1");
          }}
          // onBlur={() => {
          //   setTitle(false);
          //   {
          //     title === false && desc === false && submit === false
          //       ? setViewMode("0")
          //       : setViewMode("1");
          //   }
          // }}
        />
        {/* <span>{error.titlerror}</span> */}
        <Button
          size="medium"
          className={[
            "submit-new-submit-btn",
            ViewMode === "1" ? "view-mode-1-submit-btn" : "",
          ]}
          onClick={submitHandler}
        >
          {" "}
          SUBMIT{" "}
        </Button>
      </div>
      <div className={"submit-new-form-desc-container"}>
        <TextField
          multiline
          id="desc-input"
          placeholder="Enter Description"
          rows={4}
          required
          value={descInputValue}
          onChange={(e) => {
            setDescInputValue(e.target.value);
          }}
          onFocus={() => {
            // setDesc(true);
            setViewMode("1");
          }}
          // onBlur={() => {
          //   setDesc(false);
          //   {
          //     title === false && desc === false && submit === false
          //       ? setViewMode("0")
          //       : setViewMode("1");
          //   }

          // }}
          className={[
            [
              "submit-new-form-desc-input",
              ViewMode === "1" ? "view-mode-1-desc" : "",
            ],
          ]}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
        {/* <span>{error.descriptionerror}</span> */}
      </div>
    </Grid>
  );
};

export default AddForm;

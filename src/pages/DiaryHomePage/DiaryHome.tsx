import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Snackbar } from "@mui/material";
import { theme } from "../../theme/theme";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import DiaryCard from "../../components/DiaryCard/DiaryCard";

interface DiaryEntry {
  title: string;
  uName: string;
  description: string;
}

const DiaryHome: React.FC = () => {
  const location = useLocation();
  const { name } = location.state || {};
  const [uName] = useState<string>(name || "");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([]);
  const navigate = useNavigate();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      setIsSnackbarOpen(true);
      return;
    }

    const newEntry: DiaryEntry = {
      title,
      uName,
      description,
    };

    setDiaryEntries([...diaryEntries, newEntry]);

    setTitle("");
    setDescription("");
    setIsTitleFocused(false);
  };

  const handleTitleFocus = () => {
    setIsTitleFocused(true);
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={12} lg={12}>
          <div style={{ margin: "2rem" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
              style={{
                marginLeft: "1rem",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              Logout
            </Button>
            <div style={{ display: "flex" }}>
              <h1 style={{ color: "white" }}>Home</h1>
              <h3
                style={{
                  color: "#ecf0f1",
                  marginLeft: "auto",
                }}
              >
                You are here : {name || "Home"}
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={handleTitleChange}
                onFocus={handleTitleFocus}
                placeholder="Enter title"
                style={{
                  marginRight: "1rem",
                  backgroundColor: "#3498db",
                  borderRadius: "10px",
                }}
              />
              {isTitleFocused && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                    }}
                  >
                    Submit
                  </Button>
                </>
              )}
            </div>

            {isTitleFocused && (
              <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Enter description"
                  style={{
                    backgroundColor: "#3498db",
                    borderRadius: "10px",
                  }}
                />
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <div
            style={{
              marginRight: "2rem",
              marginLeft: "2rem",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {diaryEntries.map((entry, index) => (
                <DiaryCard
                  key={index}
                  title={entry.title}
                  username={entry.uName}
                  description={entry.description}
                />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Title and Description are required."
      />
    </ThemeProvider>
  );
};

export default DiaryHome;

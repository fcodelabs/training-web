import CustomizedButton from "../../components/CustomizedButton/CustomizedButton";
import Header from "../../components/Header/Header";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";
import useStyles from "../../components/InputStyles/InputStyles";

import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import DiaryCardWrapper from "../../components/DiaryCard/DiaryCardWrapper";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const classes = useStyles();

  const [flexDirection, setFlexDirection] = useState<"row" | "column">("row");
  const [textFieldWidth, setTextFieldWidth] = useState("352px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setFlexDirection("column");
        setTextFieldWidth("400px");
      } else {
        setFlexDirection("row");
        setTextFieldWidth("530px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const divStyles = {
    margin: "30px 60px 0 60px",
    display: "flex",
    flexDirection: flexDirection,
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  };

  const textFieldStyle = {
    width: textFieldWidth,
  };

  return (
    <div style={{ height: "fit-content", paddingBottom: "20px" }}>
      <Header />

      <div
        style={{
          margin: "0 60px",
          fontSize: "36px",
          fontWeight: "700",
        }}
      >
        Home
      </div>

      <div style={divStyles}>
        <TextField
          size="small"
          id="outlined-basic"
          variant="outlined"
          placeholder="Placeholder"
          className={classes.root}
          InputLabelProps={{
            classes: {
              root: classes.customLabel,
            },
          }}
          InputProps={{
            className: classes.multilineColor,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={textFieldStyle}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <CustomizedButton
          label="Submit New"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>

      <div
        style={{
          margin: "47px 60px 0 60px",
        }}
      >
        <DiaryCardWrapper searchInput={searchInput} />
      </div>

      <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

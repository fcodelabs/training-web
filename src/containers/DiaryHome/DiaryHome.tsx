import CustomizedButton from "../../components/Buttons/CustomizedButton";
import Header from "../../components/Header/Header";
import IconInput from "../../components/Inputs/IconInput";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
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

      <div
        style={{
          margin: "30px 60px 0 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconInput label="Placeholder" icon={<SearchIcon />} width="530px" />

        <CustomizedButton
          label="Submit New"
          onClick={() => {
            setIsOpen(true);
            console.log("Clicked");
          }}
        />
      </div>
      <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

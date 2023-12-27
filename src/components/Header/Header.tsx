import Logo from "../Logo/Logo";
import { useTypedSelector } from "../../redux/store/store";


export default function Header() {

  const currentUsername = useTypedSelector((state) => state.users.currentUsername);


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "60px 60px 30px 60px",
      }}
    >
      <Logo />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <img src={'/images/frame.png'} alt="" style={{ height: "72px", width: "72px" }} />
        <div style={{ fontSize: "17px", fontWeight: "500" }}>{currentUsername}</div>
      </div>
    </div>
  );
}
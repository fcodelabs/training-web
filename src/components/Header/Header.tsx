import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "60px 60px 30px 60px",
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
        <div style={{ fontSize: "17px", fontWeight: "500" }}>William</div>
      </div>
    </div>
  );
}

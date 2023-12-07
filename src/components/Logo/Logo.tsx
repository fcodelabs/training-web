
export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
      }}
    >
      <img src={'/images/logo.png'} alt="" style={{ width: "40px", height: "40px" }} />
      <div
        style={{
          fontSize: "24px",
          fontWeight: "500",
          color: "#4B465C",
        }}
      >
        Dear Diary
      </div>
    </div>
  );
}

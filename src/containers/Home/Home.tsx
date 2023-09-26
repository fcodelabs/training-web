import { Box, Button, Card, Container, TextField } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        height: "100vh",
        width: "100vw",
        margin: "25px 0px 0px 0px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          margin: "25px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "30px",
          backgroundColor: "#F4F2FD",
          opacity: "0.7",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "@media (max-width: 768px)": {
            width: "calc(100vw - 50px)",
          },
          "@media (max-width: 1496px)": {
            width: "calc(100vw - 110px)",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            margin: "25px 0px 25px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            "@media (max-width: 1024px)": {
              flexWrap: "wrap",
            },
          }}
        >
          <TextField
            size="small"
            label="Submit Title"
            required
            fullWidth
            InputProps={{ sx: { borderRadius: "20px" } }}
            variant="outlined"
            sx={{
              backgroundColor: "rgba(1, 172, 220, 0.2)",
              borderRadius: "20px",
              outline: "none",
              outlineColor: "none",
              width: "90vw",
              "@media (max-width: 1024px)": {
                width: "90vw",
                justifyContent: "center",
              },
            }}
          />
          <Button
            size="small"
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#01ACDC",
              color: "#fff",
              "&:hover": { backgroundColor: "#01ACDC" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "end",
              width: "8vw",
              "@media (max-width: 768px)": {
                width: "90vw",
                justifyContent: "center",
              },
            }}
          >
            Submit
          </Button>
        </Container>
        <TextField
          size="small"
          InputProps={{ sx: { borderRadius: "20px" } }}
          multiline
          rows={4}
          label="Enter Description"
          variant="outlined"
          required
          contentEditable={true}
          sx={{
            margin: "0px 25px 25px 25px",
            width: "calc(100% - 50px)",
            borderRadius: "20px",
            backgroundColor: "rgba(1, 172, 220, 0.2)",
          }}
        ></TextField>
      </Card>
    </Box>
  );
}

import { Container, Typography } from "@mui/material";
import { TeamFormWrapper } from "./components/TeamFormWrapper";

export default async function Home() {
  const TitleText = "Sistema de votacion para los premios de L'Argento League";

  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        textAlign: "center",
      }}
    >
      <Typography variant="body1" color="white">
        {TitleText}
      </Typography>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid black",
          padding: "10px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          minHeight: "250px",
          justifyContent: "space-evenly",
        }}
      >
        <TeamFormWrapper />
      </Container>
    </Container>
  );
}

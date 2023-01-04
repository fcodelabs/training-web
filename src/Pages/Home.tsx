import React from "react";
import Header from "../components/Header";
import AddCard from "../components/AddCard";
import Cards from "../components/Cards";
import { Container } from "reactstrap";

function Home() {
  return (
    <Container
      style={{
        height: "100%",
        backgroundImage: `url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-71554.jpg?w=1060&t=st=1672743749~exp=1672744349~hmac=7abe054ff9ed4063b56bd8090a73e0014095fe7f96078bca1fe2fe4e47b88134)`,
      }}
    >
      <Header />
      <h1 style={{ fontWeight: "bold", color: "white", marginLeft: "20px" }}>
        Home
      </h1>
      <AddCard />
      <Cards />
    </Container>
  );
}

export default Home;

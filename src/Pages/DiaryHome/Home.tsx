import React, { useEffect } from "react";
import Header from "../../components/HomeComponents/Header";
import AddCard from "../../components/HomeComponents/AddCard";
import Cards from "../../components/DiaryCard/Cards";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { getDiaries } from "../../Pages/DiaryHome/diaryRedux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Home() {
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();

  useEffect(() => {
    dispatch(getDiaries());
  });

  return (
    <div>
      <FullScreen handle={handle}>
        <Container
          style={{
            overflow: "auto",
            height: "100%",
            minHeight: "100vh",
            backgroundImage: `url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-71554.jpg?w=1060&t=st=1672743749~exp=1672744349~hmac=7abe054ff9ed4063b56bd8090a73e0014095fe7f96078bca1fe2fe4e47b88134)`,
          }}
        >
          <Header handle={handle} />
          <h1
            style={{
              fontWeight: "bold",
              color: "white",
              marginLeft: "20px",
              marginTop: "60px",
            }}
          >
            Home
          </h1>
          <AddCard />
          <Cards />
        </Container>
      </FullScreen>
    </div>
  );
}

export default Home;

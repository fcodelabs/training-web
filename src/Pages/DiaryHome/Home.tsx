import React, { useEffect } from "react";
import Header from "../../components/HomeComponents/Header";
import AddCard from "../../components/HomeComponents/AddCard";
import Cards from "../../components/DiaryCard/Cards";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { getDiaries } from "../../Pages/DiaryHome/diaryRedux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import cloudImage from "../Images/clouds.jpg";

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
            backgroundImage: `url(${cloudImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <Header handle={handle} />
          <h1
            style={{
              fontWeight: "bold",
              color: "white",
              marginLeft: "20px",
              marginTop: "90px",
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

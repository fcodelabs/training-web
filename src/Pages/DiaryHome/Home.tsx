import React, { useEffect } from "react";
import Header from "../../components/HomeComponents/Header";
import AddCard from "../../components/HomeComponents/AddCard";
import Cards from "../../components/DiaryCard/Cards";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { getDiaries } from "../../Pages/DiaryHome/diaryRedux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const handle = useFullScreenHandle();

  useEffect(() => {
    dispatch(getDiaries());
  });

  return (
    <div>
      <FullScreen handle={handle}>
        <Container className="home-container">
          <Header handle={handle} />
          <h1 className="home-title">Home</h1>
          <AddCard />
          <Cards />
        </Container>
      </FullScreen>
    </div>
  );
}

export default Home;

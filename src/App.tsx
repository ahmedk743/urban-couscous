import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./common/Header";
import Home from "./pages/Home";

function App() {
  return (
    <AppContainer>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <Home />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  height: 100vh;
`;

const LeftSidebar = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 220px;
  height: 100%;
  background-color: white;
  color: white;
`;
const RightSidebar = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 220px;
  height: 100%;
  background-color: white;
  color: white;
`;

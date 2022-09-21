import {
  Bed,
  Group,
  Loop,
  Notifications,
  Person2,
  RoomService,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import CustomCard from "./components/CustomCard";
import Header from "../common/Header";

function Home() {
  return (
    <div>
      <Content>
        <CustomCard
          button="Manage"
          icon={<Person2 style={{ marginRight: 10 }} />}
          title="Users"
        >
          <div>Active</div>
          <div style={{ fontSize: "25px", fontWeight: "500" }}>31</div>

          <a href="#" style={{ fontSize: 12, marginTop: 30 }}>
            Add User
          </a>
        </CustomCard>

        <CustomCard
          icon={<Notifications style={{ marginRight: 10 }} />}
          title="Alerts"
          button="View All"
        ></CustomCard>

        <CustomCard
          icon={<Bed style={{ marginRight: 10 }} />}
          title="Rooms"
        ></CustomCard>

        <CustomCard
          icon={<Group style={{ marginRight: 10 }} />}
          title="Onboarding Users"
          button="Details"
        >
          <div>Active</div>
          <div style={{ fontSize: "25px", fontWeight: "500" }}>3</div>

          <a href="#" style={{ fontSize: 12, marginTop: 30 }}>
            Invite to Onboarding
          </a>
        </CustomCard>

        <CustomCard
          icon={<Loop style={{ marginRight: 10 }} />}
          title="News"
        ></CustomCard>
      </Content>
    </div>
  );
}

export default Home;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 25px;
  margin-top: 50px;
  padding-left: 250px;
  padding-right: 200px;
`;

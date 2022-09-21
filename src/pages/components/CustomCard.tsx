import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";

function CustomCard({ children, icon, title, button }: any) {
  return (
    <MyCard style={{ borderRadius: "10px" }}>
      <HeaderSection>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
          {title}
        </div>
        {button && <CustomButton>{button}</CustomButton>}
      </HeaderSection>

      <CardContent>{children}</CardContent>
    </MyCard>
  );
}

export default CustomCard;

const MyCard = styled(Card)`
  width: 300px;
  height: 250px;
  margin: 8px;
  border-radius: 100%;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;
const CustomButton = styled.button`
  height: 20px;
  font-size: 10px;
  background-color: lightgray;
  color: gray;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

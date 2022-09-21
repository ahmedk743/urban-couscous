import { Avatar, IconButton, Input } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";

function Header() {
  return (
    <Container>
      <LeftMenu>
        <CollapseButton>
          <IconButton>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </CollapseButton>

        <Logo>Co. Society</Logo>

        <div style={{ position: "relative" }}>
          <SearchInput
            type="text"
            placeholder="Search users, room or settings"
          />
          <Search
            style={{ position: "absolute", right: 1, top: 1, color: "black" }}
          />
        </div>
      </LeftMenu>

      <RightMenu>
        <Details>
          <div style={{ fontSize: "14px" }}>Abbas Khan</div>
          <div>Online</div>
        </Details>
        <Avatar />
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4c667e;
  height: 60px;
  padding: 0 16px;
  color: white;
  position: fixed;
  top: 0;
  width: 98%;
`;
const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;
const CollapseButton = styled.div``;
const Logo = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-left: 16px;
`;
const SearchInput = styled(Input)`
  margin-left: 36px;
  background-color: white;
  width: 280px;
  height: 25px;
  border-radius: 8px;
  font-style: italic;
  padding: 0 10px;
  border: none;
  outline: none;
  color: lightgray;
  font-size: 10px;
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 12px;
  margin-right: 16px;
`;

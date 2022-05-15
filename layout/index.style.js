import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  background-color: #eee;

  /* .drawerContainer {
    min-width: 250px;
    max-width: 250px;
  } */

  @media (max-width: 768px) {
    .sideBarContainerActive {
      margin-right: -250px;
    }
    .sideBarContainer {
      margin-right: 0;
    }
    .headerAndContent {
      height: 62px;
    }
  }
`;

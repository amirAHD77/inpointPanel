import styled from "styled-components";

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  .container {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-left: auto;
    margin-right: 0;
  }
  .label {
    margin-bottom: 16px;
  }
  .input {
    margin-bottom: 16px;
    background-color: #ddd;
    border-radius: 9px;
    height: 30px;
  }
  .button {
    background-color: orange;
    border-radius: 8px;
    padding: 4px 8px;
    border: none;
    width: 30%;
    margin-right: auto;
    margin-top: 3rem;
  }
`;

import styled from "styled-components";

const EventSettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;

  form {
    /* border: 1px solid #ddd; */
    padding: 24px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 10px 3px rgba(69, 94, 100, 0.12);
    overflow: scroll;
    max-height: 90vh;
    overflow-x: hidden;
    min-width: 600px;
  }

  .headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .headerButton {
    width: 120px;
    text-align: center;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    font-weight: bold;
  }

  .headerButton:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 3px rgba(69, 94, 100, 0.12);
  }

  .headerTitle {
    color: orange;
    text-align: center;
  }

  .table {
    margin-top: 32px;
  }

  .table > :not(:first-child) {
    border-top: 2px solid green;
  }

  th {
    text-align: center;
  }

  td {
    text-align: center;
  }

  .functionsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .functionsContainer > div {
    margin: 0 8px;
  }

  .btn {
    border: 1px solid;
    padding: 2px 8px;
  }

  .disable {
    border-color: purple;
    color: purple;
  }

  .delete {
    border-color: red;
    color: red;
  }

  .edit {
    color: orange;
    border-color: orange;
  }

  .logs {
    color: yellowgreen;
    border-color: yellowgreen;
  }

  .name {
    width: 150px;
  }

  .price {
    width: 180px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export default EventSettingContainer;

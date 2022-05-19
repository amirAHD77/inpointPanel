import styled from "styled-components";

const AdminListContainer = styled.div`
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
  }

  .headerTitle {
    color: ${(props) => props.colors.main};
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

export default AdminListContainer;

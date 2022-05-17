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
    color: orange;
    text-align: center;
  }

  .table {
    margin-top: 32px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export default AdminListContainer;
